function media(x) {
  if (x.matches) { // If media query matches
    document.querySelector(".bg1").style.visibility = "hidden";
    document.querySelector(".aboutStyle1").style.visibility = "hidden";
  } else {
    document.querySelector(".bg1").style.visibility = "visible";
    document.querySelector(".aboutStyle1").style.visibility = "visible";
  }
}

var x = window.matchMedia("(max-width: 600px)")
media(x) // Call listener function at run time
x.addListener(media) // Attach listener function on state changes