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
        const offsetTop = targetElement.offsetTop - 50;
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
const questionItem = document.querySelectorAll(".js-question");

questionItem.forEach((item) => {
    let itemToggle = false;

    item.addEventListener("click", (event) => {
        itemToggle = !itemToggle;

        if (itemToggle) {
            event.currentTarget.classList.add("active");
        } else {
            event.currentTarget.classList.remove("active");
        }
    });
});
