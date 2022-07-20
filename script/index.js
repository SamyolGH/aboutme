// Text Integration \\
const pageTexts = [
    "github",
    "twitter",
    "email",
    "Samuel Drew",
    "comptuer science student, eager to learn!",
    "located brisbane, australia."
];
const htmlElements = [
    "displayName",
    "basicDetails",
    "githubLink",
    "twitterLink",
    "emailLink",
    "locationDetails",
];
// Element IDs \\
var na = document.getElementById(htmlElements[0]);
var bd = document.getElementById(htmlElements[1]);
var gl = document.getElementById(htmlElements[2]);
var tl = document.getElementById(htmlElements[3]);
var el = document.getElementById(htmlElements[4]);
var ld = document.getElementById(htmlElements[5]);
// Write Text \\
function writeText(element, text, speed) {
    let i = 0;
    setInterval(function() {
        i += 1;
        element.innerHTML = text.slice(0, i);
    }, speed);
};
// Our function calls \\
writeText(ld, pageTexts[5], 90);
writeText(bd, pageTexts[4], 60);
writeText(tl, pageTexts[1], 300);
writeText(gl, pageTexts[0], 300);
writeText(el, pageTexts[2], 300);
writeText(na, pageTexts[3], 200);