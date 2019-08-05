function sure() {
	var name = document.getElementById("name").value;
 document.getElementById("none").style.display = "none";
 document.getElementById("text").style.display = "block";
 document.getElementById("ead").style.display = "block";
 document.getElementById("ead1").style.display = "block";
 document.getElementById("text").innerHTML = '♥' + name;
}
function back() {
	document.getElementById("none").style.display = "block";
	document.getElementById("text").style.display = "none";
 document.getElementById("ead").style.display = "none";
 document.getElementById("ead1").style.display = "none";
}
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}