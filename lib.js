/* Inspect local HTML for missing image descriptions and page metadata. No runtime dependencies. */
'use strict';
function analyze(text) {

var images=[],m,pattern=/<img\b([^>]+)>/gi;
while((m=pattern.exec(text))){var tag=m[1];if(!/\balt\s*=/.test(tag))images.push(tag.trim());}
return {titlePresent:/<title>[^<]+<\/title>/i.test(text),missingAlt:images.length,imagesWithoutAlt:images};
}
module.exports = { analyze: analyze };
