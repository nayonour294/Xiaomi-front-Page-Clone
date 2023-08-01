const background = document.querySelectorAll(".background");
const slides = document.querySelector(".slides-bg");

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



// const stopSlide = () => {
//     count++
//     clearInterval(currentBg);
// }

// slides.addEventListener("click", stopSlide)