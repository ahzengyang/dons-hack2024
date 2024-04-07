function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos){
        const crd = pos.coords;
        let loc = document.getElementById("locationInput");
        loc.setAttribute("value", String(crd.latitude) + String(crd.longitude));
        let myForm = document.getElementById("location");
        myForm.submit();
        window.location.href = "searchResults.html";
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }