
var timePort = 0;
var timeDeet = 0;
var timeContact = 0;
var gitHub = "github";
var twitter = "twitter";
var email = "email"
var myName = "Samuel Drew";
var myDetails = "computer science student eagar to learn"
var na = document.getElementById("displayName");
var bd = document.getElementById("basicDetails");
var gl = document.getElementById("GitHubLink");
var tl = document.getElementById("TwitterLink");
var el = document.getElementById("EmailLink");
var i = 0;
na.innerHTML = "";
bd.innerHTML = "";

var expandName = setInterval(function() {
    timePort = timePort + 1;
    na.innerHTML = myName.slice(0, timePort);
}, 200);

var expandDetails = setInterval(function() {
    timeDeet = timeDeet + 1;
    bd.innerHTML = myDetails.slice(0, timeDeet)
}, 60)

var expandContact = setInterval(function() {
    i = i + 1;
    tl.innerHTML = twitter.slice(0, i);
    gl.innerHTML = gitHub.slice(0, i);
    el.innerHTML = email.slice(0, i);
}, 300)