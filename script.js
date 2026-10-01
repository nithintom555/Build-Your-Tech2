/* =====================================================
   BUILD YOUR TECH
   JAVASCRIPT
===================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* ================= NAVIGATION ================= */

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");
    const navbar = document.querySelector(".navbar");


    /* Mobile menu */

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });


        /* Close mobile menu after clicking a link */

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

            });

        });

    }


    /* ================= NAVBAR SCROLL ================= */

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    /* ================= SMOOTH SCROLL ================= */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const navbarHeight = navbar.offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


});