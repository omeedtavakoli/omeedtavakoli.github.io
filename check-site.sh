#!/usr/bin/env bash
#
# Consistency check for the standalone pages.
#
# There is no build step here, so nothing stops five hand-maintained HTML files
# from drifting apart — and they did: the essay pages sat on styles.css?v=71
# while index.html was on v=88, so every crossing between them refetched an
# already-cached stylesheet and flashed. This script makes that class of drift
# fail loudly instead of showing up as a visual glitch weeks later.
#
# Run before committing:  ./check-site.sh
#
set -uo pipefail
cd "$(dirname "$0")"

PAGES=(22 loyalty standard carwash familytree)
TEMPLATE=drafts/essay-template.html
fail=0

err() { printf '  FAIL  %s\n' "$1"; fail=1; }
ok()  { printf '  ok    %s\n' "$1"; }

# --- 1. One stylesheet version across the whole site ------------------------
# Differing ?v= values are separate cache entries for identical bytes.
echo "stylesheet version"
versions=$(grep -oh 'styles\.css?v=[0-9]*' index.html "${PAGES[@]/%//index.html}" "$TEMPLATE" | sort -u)
if [ "$(echo "$versions" | wc -l)" -ne 1 ]; then
  err "pages disagree: $(echo "$versions" | tr '\n' ' ')"
else
  ok "all pages on ${versions##*\?}"
fi

# --- 2. One essay-chrome version across the essay pages ---------------------
echo "essay-chrome version"
chrome=$(grep -oh 'essay-chrome\.js?v=[0-9]*' "${PAGES[@]/%//index.html}" "$TEMPLATE" | sort -u)
if [ "$(echo "$chrome" | wc -l)" -ne 1 ]; then
  err "pages disagree: $(echo "$chrome" | tr '\n' ' ')"
else
  ok "all pages on ${chrome##*\?}"
fi

# --- 3. The nav header is byte-identical everywhere -------------------------
# It lives in the HTML (so it paints without waiting on JS) at the cost of being
# duplicated. This is the check that buys back the safety essay-chrome.js used
# to provide by owning the only copy.
echo "nav header"
ref=$(awk '/<header>/,/<\/header>/' "$TEMPLATE")
for p in "${PAGES[@]}"; do
  if [ "$(awk '/<header>/,/<\/header>/' "$p/index.html")" != "$ref" ]; then
    err "$p/index.html header differs from $TEMPLATE"
  fi
done
[ "$fail" -eq 0 ] && ok "identical across ${#PAGES[@]} pages"

# --- 4. No relative paths inside the page directories -----------------------
# From /22/index.html a relative "styles.css" resolves to /22/styles.css and
# 404s — an unstyled page with no nav. Everything must be rooted or absolute.
echo "absolute paths"
relfail=0
for p in "${PAGES[@]}"; do
  bad=$(grep -oE '(src|href)="[^"]+"' "$p/index.html" \
        | grep -vE '="(/|https?:|#|mailto:|tel:)' || true)
  if [ -n "$bad" ]; then
    err "$p/index.html has relative path(s): $(echo "$bad" | tr '\n' ' ')"
    relfail=1
  fi
done
[ "$relfail" -eq 0 ] && ok "no relative paths"

# --- 5. Internal page links carry a trailing slash --------------------------
# /loyalty without the slash gets a 301 to /loyalty/ — a wasted round trip.
echo "trailing slashes"
slashbad=$(grep -oE 'href="/('"$(IFS='|'; echo "${PAGES[*]}")"')"' index.html "${PAGES[@]/%//index.html}" || true)
if [ -n "$slashbad" ]; then
  err "missing trailing slash: $(echo "$slashbad" | tr '\n' ' ')"
else
  ok "all internal page links end in /"
fi

# --- 6. The retired .html paths stay retired --------------------------------
echo "no .html page links"
htmlbad=$(grep -oE 'href="/?('"$(IFS='|'; echo "${PAGES[*]}")"')\.html"' index.html "${PAGES[@]/%//index.html}" site.js || true)
if [ -n "$htmlbad" ]; then
  err "link to a retired .html path: $(echo "$htmlbad" | tr '\n' ' ')"
else
  ok "none"
fi

echo
if [ "$fail" -eq 0 ]; then
  echo "PASS"
else
  echo "FAILED — fix the above before committing."
fi
exit "$fail"
