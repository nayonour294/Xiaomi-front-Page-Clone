"use strict";

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

const backgroundChange = document.querySelectorAll(".background-change");
const sliderImages = document.querySelector(".slider-images");

let sliderCount = 1;

setInterval(() => {
    sliderCount++;
    const currentImage = document.querySelector(".current-img");
    currentImage.classList.remove("current-img");
    if (sliderCount > backgroundChange.length) {
        backgroundChange[0].classList.add("current-img");
        sliderCount = 1;
    } else {
        currentImage.nextElementSibling.classList.add("current-img");
    }
}, 4000);

const contentChange = document.querySelectorAll(".content-change");
const sliderContents = document.querySelector(".slider-contents");

let contentSliderCount = 1;

setInterval(() => {
    contentSliderCount++;
    const currentContent = document.querySelector(".current-content");
    currentContent.classList.remove("current-content");
    if (contentSliderCount > contentChange.length) {
        contentChange[0].classList.add("current-content");
        contentSliderCount = 1;
    } else {
        currentContent.nextElementSibling.classList.add("current-content");
    }
}, 4000);


const allContent = document.querySelectorAll(".content-change");
const forwordBtn = document.querySelector("#forword");
const backBtn = document.querySelector("#back");

let nextCount = 0;

const clickForword = () => {
    console.log("Sorry! This button is not working");
    
};

const clickBack = () => {
    
    contentSliderCount++;
    const currentContent = document.querySelector(".current-content");
    currentContent.classList.remove("current-content");
    if (contentSliderCount > contentChange.length-1) {
        contentChange[0].classList.add("current-content");
        contentSliderCount = 1;
    } else {
        currentContent.nextElementSibling.classList.add("current-content");
    }
};

clickForword();

forwordBtn.addEventListener("click", clickForword);
backBtn.addEventListener("click", clickBack);
