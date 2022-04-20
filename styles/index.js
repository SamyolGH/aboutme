// Iterations \\
var tP = 0;
var tD = 0;
var i = 0;
var it = 0;
var timeContact = 0;
// Text Integration \\
var gitHub = "github";
var twitter = "twitter";
var email = "email"
var myName = "Samuel Drew";
var myDetails = "computer science student eagar to learn"
var irllocation = "located brisbane, australia"
// Element IDs \\
var na = document.getElementById("displayName");
var bd = document.getElementById("basicDetails");
var gl = document.getElementById("GitHubLink");
var tl = document.getElementById("TwitterLink");
var el = document.getElementById("EmailLink");
var ld = document.getElementById("locationDetails");
// Interval Fucntions \\
var expandName = setInterval(function() {
    tP = tP + 1;
    na.innerHTML = myName.slice(0, tP);
}, 200);
var expandDetails = setInterval(function() {
    tD = tD + 1;
    bd.innerHTML = myDetails.slice(0, tD)
}, 60)
var expandLocation = setInterval(function() {
    it = it + 1;
    ld.innerHTML = irllocation.slice(0,it);
}, 90);
var expandContact = setInterval(function() {
    i = i + 1;
    tl.innerHTML = twitter.slice(0, i);
    gl.innerHTML = gitHub.slice(0, i);
    el.innerHTML = email.slice(0, i);
}, 300)