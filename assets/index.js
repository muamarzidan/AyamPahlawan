function updateIconSizeMain() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const iconA1 = document.getElementById("iconify-footer-1");
    const iconA2 = document.getElementById("iconify-footer-2");

    if (width <= 320) {
        iconA1.style.display = "block";
        iconA2.style.display = "block";
        iconA1.setAttribute("width", "20");
        iconA2.setAttribute("width", "20");
    } else if (width <= 576) {
        iconA1.style.display = "block";
        iconA2.style.display = "block";
        iconA1.setAttribute("width", "26");
        iconA2.setAttribute("width", "26");
    } else if (width <= 768) {
        iconA1.style.display = "block";
        iconA1.setAttribute("width", "24");
        iconA2.style.display = "block";
        iconA2.setAttribute("width", "24");
    } else {
        iconA1.style.display = "block";
        iconA2.style.display = "block";
        iconA1.setAttribute("width", "50");
        iconA2.setAttribute("width", "50");
    }
}
window.addEventListener("DOMContentLoaded", updateIconSizeMain);
window.addEventListener("resize", updateIconSizeMain);