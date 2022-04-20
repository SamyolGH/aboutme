// Iterations \\
var tP = 0;
var tD = 0;
var i = 0;
var it = 0;
var timeContact = 0;
// Text Integration \\
var pageTexts = [
    "github",
    "twitter",
    "email",
    "Samuel Drew",
    "comptuer science student, eager to learn!",
    "located brisbane, australia."
]
// Element IDs \\
var na = document.getElementById("displayName");
var bd = document.getElementById("basicDetails");
var gl = document.getElementById("GitHubLink");
var tl = document.getElementById("TwitterLink");
var el = document.getElementById("EmailLink");
var ld = document.getElementById("locationDetails");
// Write Text \\
function writeText(iterator, element, text, speed) {
    setInterval(function() {
        iterator = iterator + 1;
        element.innerHTML = text.slice(0, iterator);
    }, speed);
};
// Our function calls \\
writeText(it, ld, pageTexts[5], 90);
writeText(tD, bd, pageTexts[4], 60);
writeText(i, tl, pageTexts[1], 300);
writeText(i, gl, pageTexts[0], 300);
writeText(i, el, pageTexts[2], 300);
writeText(tP, na, pageTexts[3], 200);