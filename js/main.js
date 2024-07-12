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
        handleCloseMenu();
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

var swiperDiplom = new Swiper(".swiper-diplom", {
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next-dp",
        prevEl: ".swiper-button-prev-dp",
    },
    pagination: {
        el: ".swiper-pagination-diplom",
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

// work with cookies
const cookieModal = document.querySelector(".js-cookie");
const cookieCloseBtn = document.querySelector(".js-cookie-close");
const cookieAcceptBtn = document.querySelector(".js-cookie-accept");

if (localStorage.getItem("cookie")) {
    cookieModal.classList.remove("no-accepted");
} else {
    cookieModal.classList.add("no-accepted");
}

cookieCloseBtn.addEventListener("click", () => {
    cookieModal.classList.remove("no-accepted");
});

cookieAcceptBtn.addEventListener("click", () => {
    cookieModal.classList.remove("no-accepted");
    localStorage.setItem("cookie", 1);
});

// work with modals
const handleOpenModal = (modal) => {
    document.body.classList.add("is-modal");
    modal.classList.add("active");
};

const handleCloseModal = (modal) => {
    document.body.classList.remove("is-modal");
    modal.classList.remove("active");
};

const handleCloseWithEsc = (modal) => {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" || event.key === "Esc") {
            document.body.classList.remove("is-modal");
            modal.classList.remove("active");
        }
    });
};

// promo modals
const allPromoItems = document.querySelectorAll(".js-promo-item");
const promoModal = document.querySelector(".js-promo-modal");
const promoCloseBtn = document.querySelector(".js-promo-close");

allPromoItems.forEach((item) => {
    item.addEventListener("click", () => {
        const promoImage = item
            .querySelector(".promo__image")
            .getAttribute("src");
        const promoModalImage = promoModal.querySelector(".promo__modal_image");

        promoModalImage.setAttribute("src", promoImage);

        if (item.classList.contains("js-gift")) {
            document.querySelector(".js-promo-modal-title").textContent =
                item.getAttribute("data-title");
        }

        handleOpenModal(promoModal);
        handleCloseWithEsc(promoModal);
    });
});

promoCloseBtn.addEventListener("click", () => {
    handleCloseModal(promoModal);
});

// sale modal
const saleModal = document.querySelector(".js-sale-modal");
const saleOpenBtn = document.querySelector(".js-sale-modal-open");
const saleCloseBtn = document.querySelector(".js-sale-modal-close");

saleOpenBtn.addEventListener("click", () => {
    handleOpenModal(saleModal);
    handleCloseWithEsc(saleModal);
});

saleCloseBtn.addEventListener("click", () => {
    handleCloseModal(saleModal);
});

// response modal
const responseModal = document.querySelector(".js-response");
const responseOpenBtn = document.querySelectorAll(".js-response-open");
const responseCloseBtn = document.querySelector(".js-response-close");

responseOpenBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        handleOpenModal(responseModal);
        handleCloseWithEsc(responseModal);
    });
});

responseCloseBtn.addEventListener("click", () => {
    handleCloseModal(responseModal);
});

// diplom modal
const diplomModal = document.querySelector(".js-diplom");
const diplomOpenBtn = document.querySelector(".js-diplom-open");
const diplomCloseBtn = document.querySelector(".js-diplom-close");

diplomOpenBtn.addEventListener("click", () => {
    handleOpenModal(diplomModal);
    handleCloseWithEsc(diplomModal);
});

diplomCloseBtn.addEventListener("click", () => {
    handleCloseModal(diplomModal);
});

// work with timer
const timer = document.querySelector(".sale__modal_timer");
const finalDate = new Date(timer.getAttribute("data-final-date"));

function updateTimer() {
    const now = new Date();
    const remainingTime = finalDate - now;

    if (isNaN(finalDate)) {
        console.error("Invalid date format in data-final-date attribute");
        clearInterval(timerInterval);
        return;
    }

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );

    timer
        .querySelectorAll(".timer__item")[0]
        .querySelector(".timer__time").textContent = String(days).padStart(
        2,
        "0"
    );
    timer
        .querySelectorAll(".timer__item")[1]
        .querySelector(".timer__time").textContent = String(hours).padStart(
        2,
        "0"
    );
    timer
        .querySelectorAll(".timer__item")[2]
        .querySelector(".timer__time").textContent = String(minutes).padStart(
        2,
        "0"
    );
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// work with menu
const menuElement = document.querySelector(".js-menu");
const burgerBtn = document.querySelector(".js-header-burger");
const burgerIcon = document.querySelector(".js-burger-icon");
let burgerToggle = false;

burgerBtn.addEventListener("click", () => {
    burgerToggle = !burgerToggle;

    if (burgerToggle) {
        burgerIcon.setAttribute("src", "img/icons/close.svg");
        burgerIcon.setAttribute("width", "40");
        burgerIcon.setAttribute("height", "40");
        menuElement.classList.add("active");
        document.body.classList.add("is-modal");
    } else {
        burgerIcon.setAttribute("src", "img/icons/burger.svg");
        burgerIcon.setAttribute("width", "34");
        burgerIcon.setAttribute("height", "17");
        menuElement.classList.remove("active");
        document.body.classList.remove("is-modal");
    }
});

const handleCloseMenu = () => {
    burgerToggle = !burgerToggle;
    burgerIcon.setAttribute("src", "img/icons/burger.svg");
    burgerIcon.setAttribute("width", "34");
    burgerIcon.setAttribute("height", "17");
    menuElement.classList.remove("active");
    document.body.classList.remove("is-modal");
};

// work with response rate
const responseRateBtns = document.querySelectorAll(".js-response-rate");
const responseRateValue = document.querySelector(".js-response-rate-value");
let rateCount = 0;

responseRateBtns.forEach((btn, index, buttons) => {
    btn.addEventListener("click", () => {
        const newSrc = "img/icons/star-color.svg";
        const oldSrc = "img/icons/star-dark.svg";

        for (let i = 0; i <= index; i++) {
            buttons[i]
                .querySelector(".js-response-star")
                .setAttribute("src", newSrc);
        }

        for (let i = index + 1; i < buttons.length; i++) {
            buttons[i]
                .querySelector(".js-response-star")
                .setAttribute("src", oldSrc);
        }

        rateCount = index + 1;
        responseRateValue.value = rateCount;
    });
});

// work with map
var map = L.map("map").setView([56.8796, 24.6032], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
}).addTo(map);

var marker = L.marker([56.987683, 24.2297479]).addTo(map);
var marker2 = L.marker([56.5071131, 27.3347481]).addTo(map);
var marker3 = L.marker([55.8726213, 26.5233285]).addTo(map);
var marker4 = L.marker([57.5310671, 25.430233]).addTo(map);
var marker5 = L.marker([57.391726, 21, 21.5657262]).addTo(map);

marker.bindPopup(
    "<a href='https://www.google.com/maps/place/Br%C4%ABv%C4%ABbas+iela+410,+Vidzemes+priek%C5%A1pils%C4%93ta,+R%C4%ABga,+LV-1024,+%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F/@56.987683,24.227173,17z/data=!3m1!4b1!4m6!3m5!1s0x46eece98556dc42b:0xb99494f68517f73a!8m2!3d56.987683!4d24.2297479!16s%2Fg%2F11c2h_x9k5?entry=ttu' target='_blank'>Rīga (Jugla), Brīvības iela 410</a>"
);
marker2.bindPopup(
    "<a href='https://www.google.com/maps/place/D%C4%81rzu+iela+22,+R%C4%93zekne,+LV-4601,+%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F/@56.5071159,27.3321732,17z/data=!3m1!4b1!4m6!3m5!1s0x46c215f00f96aa1b:0x2ee81179cca55713!8m2!3d56.507113!4d27.3347481!16s%2Fg%2F11c5k3ht0y?entry=ttu' target='_blank'>Rēzekne, Dārzu iela 22</a>"
);
marker3.bindPopup(
    "<a href='https://www.google.com/maps/place/Viestura+iela+68,+Daugavpils,+LV-5401,+%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F/@55.8726242,26.5184576,17z/data=!3m1!4b1!4m6!3m5!1s0x46c295c728a38a6f:0x487f237641b59dff!8m2!3d55.8726213!4d26.5233285!16s%2Fg%2F11j8_wv3x9?entry=ttu' target='_blank'>Daugavpils, Viestura iela 68</a>"
);
marker4.bindPopup(
    "<a href='https://www.google.com/maps/place/Stacijas+iela+11,+Valmiera,+LV-4201,+%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F/@57.53107,25.4276581,17z/data=!3m1!4b1!4m6!3m5!1s0x46ebee9db5f92367:0x4864b39a20b1bff8!8m2!3d57.5310671!4d25.430233!16s%2Fg%2F11csl4jj7l?entry=ttu' target='_blank'>Valmiera, Stasijas iela 11</a>"
);
marker5.bindPopup(
    "<a href='https://www.google.com/maps/place/J%C5%ABras+iela+8,+Ventspils,+LV-3601,+%D0%9B%D0%B0%D1%82%D0%B2%D0%B8%D1%8F/@57.3917289,21.5631513,17z/data=!3m1!4b1!4m6!3m5!1s0x46f1c8e4cf561747:0xd095bab183cfad5f!8m2!3d57.391726!4d21.5657262!16s%2Fg%2F11j8x929q3?entry=ttu' target='_blank'>Ventspils, Juras iela 8</a>"
);

const allMapSigns = document.querySelectorAll(".leaflet-marker-icon");

allMapSigns.forEach((sign) => {
    const currentStyle = sign.getAttribute("style") || "";
    const newStyle = "width: 42px; height: 42px";
    sign.setAttribute("style", currentStyle + newStyle);
    sign.setAttribute("src", "img/icons/map-icon.svg");
});

// work with phone
const allPhoneLinks = document.querySelectorAll(".js-main-phone");

allPhoneLinks.forEach((link) => {
    if (window.innerWidth < 768) {
        link.setAttribute("href", `tel:${link.getAttribute("data-phone")}`);
    } else {
        link.removeAttribute("href");
    }
});
