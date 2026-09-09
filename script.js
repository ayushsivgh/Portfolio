/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileMenu =
    document.querySelector(".mobile-menu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });



/* =========================
   SCROLL PROGRESS
========================= */

const scrollProgress =
    document.querySelector(".scroll-progress");


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage =
        (scrollTop / pageHeight) * 100;

    scrollProgress.style.width =
        `${percentage}%`;

});



/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});



/* =========================
   SKILL PROGRESS BARS
========================= */

const skillBars =
    document.querySelectorAll(".progress-bar");


const skillObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const bar =
                        entry.target;

                    const percentage =
                        bar.dataset.progress;

                    bar.style.width =
                        `${percentage}%`;

                    skillObserver.unobserve(bar);

                }

            });

        },

        {
            threshold: 0.5
        }

    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});



/* =========================
   NAVBAR SHADOW
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(15, 23, 42, 0.08)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});



/* =========================
   CLOSE MOBILE MENU
========================= */

document.addEventListener("click", (event) => {

    if (
        mobileMenu.classList.contains("active") &&
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        mobileMenu.classList.remove("active");

    }

});
