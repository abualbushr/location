var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "recivedData.php?lat= " +  position.coords.latitude + " \n&long= " + position.coords.longitude);
    xhttp.send();

}


