// picking items

const panels = document.querySelectorAll(".panel");


panels.forEach(function (items) {
    items.addEventListener("click", function () {
        removeAllClasses();
        items.classList.add("active");
    });
});

function removeAllClasses() {
    panels.forEach(function (items) {
        items.classList.remove("active");
    });
};