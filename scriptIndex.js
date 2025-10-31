 
 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
document.getElementById("headingslay").style.display = "none";
function nonconsent() {
  document.getElementById("headingslay").style.display = "block";
  
}

let text = "";
for (let i = 0; i < 10000; i++) {
  text += "do you know what you're here for?" + "<br>";
}

function repeattext()
{
  document.getElementById("repeatmessage").innerHTML = text;
  window.scrollTo({ top:document.body.scrollHeight, behavior: 'smooth', });
  setTimeout("window.location.href = 'https://marredpod.bandcamp.com/album/icebreaker-m-a-r-r-e-d-s1-soundtrack';", 3000);
}

var i = 0;
var txt = "do you know what you're here for?"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("repeatmessage").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
    repeattext();
  }
}