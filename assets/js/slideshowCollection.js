let indexCollection = 1;

const slideShow = (n) => {
  let slideList = document
    .querySelector("#slideshow-collection")
    .getElementsByTagName("ul");
  if (n > slideList.length) {
    indexCollection = 1;
  }
  if (n < 1) {
    indexCollection = slideList.length;
  }
  for (let i = 0; i < slideList.length; i++) {
    slideList[i].classList.remove("active");
  }
  slideList[indexCollection - 1].classList.add("active");
};
slideShow(indexCollection);

const handleNext = (n) => {
  slideShow((indexCollection += n));
};

const handlePrev = (n) => {
  slideShow((indexCollection = n));
};

let btnNext = document.querySelector(".next-collection-list");
btnNext.onclick = function () {
  handleNext(1);
};

let btnPrev = document.querySelector(".prev-collection-list");
btnPrev.onclick = function () {
  handleNext(-1);
};
