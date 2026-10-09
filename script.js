// Mobile menu toggle
    var hamburger = document.getElementById("hamburger");
    var navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    // Close the mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });

    // Auto-update the copyright year
    document.getElementById("year").textContent = new Date().getFullYear();