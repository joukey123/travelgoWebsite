const bannerBox = document.querySelectorAll(".banner-contents");

//배너 롤링
let indexNumber = 0;

const carousel = () => {
  for (let i = 0; i < bannerBox.length; i++) {
    bannerBox[i].classList.add("hidden");
  }
  if (indexNumber > bannerBox.length - 1) {
    indexNumber = 0;
    sliderImg();
  } else {
    sliderImg();
  }
};

const sliderImg = () => {
  bannerBox[indexNumber].classList.remove("hidden");
  indexNumber++;
};

carousel();
setInterval(carousel, 5000);
