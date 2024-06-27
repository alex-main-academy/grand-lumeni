// works with categories
const allCategoryBtns = document.querySelectorAll(".js-category-btn");
const allCategoryBlocks = document.querySelectorAll(".js-category-block");
let activeBtn = allCategoryBtns[0];
let activeBlock = allCategoryBlocks[0];

allCategoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (activeBtn) {
            activeBtn.classList.remove("active");
        }

        btn.classList.add("active");
        activeBtn = btn;

        allCategoryBlocks.forEach((block) => {
            if (
                btn.getAttribute("data-category") ===
                block.getAttribute("data-category")
            ) {
                if (activeBlock) {
                    activeBlock.classList.remove("active");
                }

                block.classList.add("active");
                activeBlock = block;
            }
        });
    });
});

// work with anchors link
function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 89;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorId = this.getAttribute("href").substring(1);
        scrollToAnchor(anchorId);
    });
});

// work with faq
const faqItems = document.querySelectorAll(".js-question");
let faqToggle = false;

faqItems.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (elem.classList.contains("active")) {
            elem.classList.remove("active");
        } else {
            faqItems.forEach((el) => {
                el.classList.remove("active");
            });

            elem.classList.add("active");
        }
    });
});

// work with slider
var swiper = new Swiper(".swiper-promo", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination-promo",
        clickable: "true",
    },
    slidesPerGroup: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1150: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var swiperTeam = new Swiper(".swiper-team", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next-tm",
        prevEl: ".swiper-button-prev-tm",
    },
    pagination: {
        el: ".swiper-pagination-team",
        clickable: "true",
    },
    slidesPerGroup: 1,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiperReviews = new Swiper(".swiper-reviews", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next-rev",
        prevEl: ".swiper-button-prev-rev",
    },
    slidesPerGroup: 1,
    breakpoints: {
        1150: {
            slidesPerView: 2,
            spaceBetween: 17,
        },
    },
});

var swiperStars = new Swiper(".swiper-stars", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next-st",
        prevEl: ".swiper-button-prev-st",
    },
    pagination: {
        el: ".swiper-pagination-stars",
        clickable: "true",
    },
    slidesPerGroup: 1,
    breakpoints: {
        1150: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

var swiperWelcome = new Swiper(".swiper-welcome", {
    slidesPerView: 3,
    spaceBetween: 15,
    pagination: {
        el: ".swiper-pagination-welcome",
        clickable: "true",
    },
    slidesPerGroup: 1,
});

// work with header
const headerElement = document.querySelector(".js-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        headerElement.classList.add("is-fixed");
    } else {
        headerElement.classList.remove("is-fixed");
    }
});

// work with gallery
const galleryList = document.querySelector(".gallery__list");
const items = document.querySelectorAll(".gallery__item");
const itemsArray = Array.from(items);

itemsArray.forEach((item) => {
    const clone = item.cloneNode(true);
    galleryList.appendChild(clone);
});

galleryList.style.width = `calc(200vw)`;

// work with map
const allContactLink = document.querySelectorAll(".js-contact-link");
let activeLink = allContactLink[0];

allContactLink.forEach((link) => {
    link.addEventListener("click", () => {
        if (activeLink) {
            activeLink.classList.remove("active");
        }

        link.classList.add("active");
        activeLink = link;
    });
});
