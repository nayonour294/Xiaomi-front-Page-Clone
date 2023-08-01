const background = document.querySelectorAll(".background");

let count = 1;

setInterval(() => {
    count++;
    const currentBg = document.querySelector(".current");
    currentBg.classList.remove("current");
    if (count > background.length) {
        background[0].classList.add("current");
        count = 1;
    } else {
        currentBg.nextElementSibling.classList.add("current");
    }
}, 2000);