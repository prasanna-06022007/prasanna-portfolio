// ========================================
// PRASANNA PORTFOLIO
// Simple website interactions
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // Smooth navigation
    const navigationLinks = document.querySelectorAll(".navbar a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // Add a small reveal effect when sections enter the screen
    const sections = document.querySelectorAll(
        ".section, .pink-section, .education-section, .certificate-section, .contact-section"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    sections.forEach(function (section) {
        observer.observe(section);
    });

});