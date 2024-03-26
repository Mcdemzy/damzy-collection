// Simulate page loading
window.addEventListener("load", function () {
  // Hide the loader and show the content after a delay (for demonstration purposes)
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 6000); // Change the delay time as needed
});
