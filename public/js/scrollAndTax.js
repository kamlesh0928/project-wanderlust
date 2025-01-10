let taxSwitch = document.getElementById("flexSwitchCheckDefault");
const filters = document.getElementById("filters");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

leftBtn.addEventListener("click", () => {
    filters.scrollLeft -= 200;
});

rightBtn.addEventListener("click", () => {
    filters.scrollLeft += 200;
});


taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");

    for (let info of taxInfo) {

        if (info.style.display != "inline") {
            info.style.display = "inline";
        } else {
            info.style.display = "none";
        }
    }
});