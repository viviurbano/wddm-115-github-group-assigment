console.log("👋 Good see you here!");

function toogleFunction() {
  var x = document.getElementById("toogle-details");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
