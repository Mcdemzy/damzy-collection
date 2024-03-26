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

// ACTIVE BEHAVIOUR
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".navbar ul li a");

  navItems.forEach((navItem) => {
    navItem.addEventListener("mouseenter", function (event) {
      const hoveredNavItem = event.target;

      // Remove the 'active__nav-item' class from all nav items
      navItems.forEach((item) => item.classList.remove("active__nav-item"));

      // Add the 'active__nav-item' class to the hovered nav item
      hoveredNavItem.classList.add("active__nav-item");

      // Move the underline to the hovered nav item
      moveUnderline(hoveredNavItem);
    });
  });

  function moveUnderline(navItem) {
    const underline = document.querySelector(
      ".navbar ul li a.active__nav-item:after"
    );
    const navItemPosition = navItem.getBoundingClientRect();
    const navItemWidth = navItem.offsetWidth;

    // Set the width and position of the underline to match the hovered nav item
    underline.style.width = `${navItemWidth}px`;
    underline.style.left = `${navItemPosition.left}px`;
  }
});
