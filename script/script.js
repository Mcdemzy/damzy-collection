// Simulate page loading
window.addEventListener("load", function () {
  // Hide the loader after a delay and show the content
  setTimeout(function () {
    document.getElementById("loader-container").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1000); // Adjust the delay time as needed
});

// NAVBAR BEHAVIOUR
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > navbar.offsetHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
