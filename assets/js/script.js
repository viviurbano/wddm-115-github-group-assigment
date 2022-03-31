console.log("👋 Good see you here!");

function toggleFunction(id) {
  var x = document.getElementById(`toggle-details-${id}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
