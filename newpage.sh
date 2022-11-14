#!/bin/bash
if [[ $# -eq 0 ]] ; then
    echo 'Please enter a page name'
    exit 1
fi
copyfrom=$1
pagename=$2
echo "Copy $copyfrom to $pagename"
cp -r site/content/$copyfrom/ site/content/$pagename/
cp site/layouts/section/$copyfrom.html site/layouts/section/$pagename.html
cp src/js/cms-preview-templates/$copyfrom.js src/js/cms-preview-templates/$pagename.js
echo "Open $pagename files for editing"
code site/static/admin/config.yml
code src/js/cms.js
code site/layouts/partials/nav.html
code site/content/$pagename/_index.md
code site/layouts/section/$pagename.html
code src/js/cms-preview-templates/$pagename.js
