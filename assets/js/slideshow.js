const dataImgSlideShow = [
  {
    id: 1,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/63/44/fd/722847a16a71a815fb7f0248b76468f0.jpg.webp",
  },
  {
    id: 2,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/9a/ce/d5/61d214243161d241a4dae148acc06471.png.webp",
  },
  {
    id: 3,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/b0/3b/bf/86b665e3787504b2d89b34cd7721b27d.png.webp",
  },
  {
    id: 4,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/67/f8/8d/40917c015206ca43ef4065cc50f6a1e6.png.webp",
  },
  {
    id: 5,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/f2/e1/77/2042106a7711a896ca96fcf680ca8896.png.webp",
  },
  {
    id: 6,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/06/e7/a3/d5addea7dc7364eef72b7c21bc032960.png.webp",
  },
  {
    id: 7,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/9d/a6/d7/d6768226c3f43e335789c9d07cedb91e.png.webp",
  },
  {
    id: 8,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/9c/d8/04/70549e43accc3713f6eee3a88675f5ce.png.webp",
  },
  {
    id: 9,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/14/35/05/c30c0eb5d6e5f66a57fa5bffd272a6a6.png.webp",
  },
  {
    id: 10,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/75/e6/eb/40dd6c5f7fbab72107274dd61a9d9519.png.webp",
  },
  {
    id: 11,
    src: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/32/d0/ec/9a770d3765edcfcc104b53e8b0577a9b.png.webp",
  },
];

dataImgSlideShow.map((item) => {
  item.src;
});
let slideshow = document.querySelector("#group-img");
let abc = dataImgSlideShow.map((item) => {
  return `<img src=${item.src}>`;
});
slideshow.innerHTML = abc.join("");

let slideIndex = 1;
showSlides(slideIndex);

setInterval(function () {
  changeSlide(1);
}, 3000);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementById("slideshow").getElementsByTagName("img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
}

let next = document.querySelector(".next-slideshow");
next.onclick = function () {
  changeSlide(1);
};

let prev = document.querySelector(".prev-slideshow");
prev.onclick = function () {
  changeSlide(-1);
};
