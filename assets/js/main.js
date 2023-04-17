const dataHighlight = [
  {
    id: 1,
    name: "Giá rẽ mỗi ngày",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png.webp",
  },
  {
    id: 2,
    name: "Mua nhiều giảm sâu",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/40/e8/d2/c1a9921c81741654ab6df7b0910b2bb2.png.webp",
  },
  {
    id: 3,
    name: "Gia dụng giá rẽ",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/5e/29/e3/fae84abe2d72ee3c30292108ae967f15.png.webp",
  },
  {
    id: 4,
    name: "Xả kho",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/3c/ce/96/db8c083610e45b78d8f7662f0013faa8.png.webp",
  },
  {
    id: 5,
    name: "Mã giảm giá",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp",
  },
  {
    id: 6,
    name: "Ưu đãi Affiliate",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/02/02/df/8732a7d47ac8739b296fc05864f75acd.png.webp",
  },
  {
    id: 7,
    name: "Đóng tiền nạp thẻ",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/4d/a3/cb/c86b6e4f17138195c026437458029d67.png.webp",
  },
  {
    id: 8,
    name: "Mua trước trả sau",
    src: "https://salt.tikicdn.com/cache/100x100/ts/tmp/6f/4e/41/93f72f323d5b42207ab851dfa39d44fb.png.webp",
  },
  {
    id: 9,
    name: "Ưu đãi thẻ ví",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/1e/27/a7/e2c0e40b6dc45a3b5b0a8e59e2536f23.png.webp",
  },
  {
    id: 10,
    name: "Bảo hiểm Tiki360",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/6f/d0/68/76b6c01998c3f45f70b843c390097690.png.webp",
  },
  {
    id: 11,
    name: "Tiki Exchange",
    src: "https://salt.tikicdn.com/cache/100x100/ts/upload/44/58/fc/804a2dfd610e9075ad5a8f0d13f2b21a.png.webp",
  },
];
const dataCategory = [
  {
    id: 1,
    name: "Đồ Chơi - Mẹ & Bé",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp",
  },
  {
    id: 2,
    name: "Ngon",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png.webp",
  },
  {
    id: 3,
    name: "Điện Thoại - Máy Tính Bảng",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp",
  },
  {
    id: 4,
    name: "Làm Đẹp - Sức Khoẻ",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png.webp",
  },
  {
    id: 5,
    name: "Điện Gia Dụng",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png.webp",
  },
  {
    id: 6,
    name: "Thời Trang Nữ",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp",
  },
  {
    id: 7,
    name: "Thời Trang Nam",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png.webp",
  },
  {
    id: 8,
    name: "Giày - Dép Nữ",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png.webp",
  },
  {
    id: 9,
    name: "Túi Thời Trang Nữ",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png.webp",
  },
  {
    id: 10,
    name: "Ba Lô & Vali",
    src: "https://salt.tikicdn.com/cache/100x100/ts/category/3e/c0/30/1110651bd36a3e0d9b962cf135c818ee.png.webp",
  },
];
const renderMenu = () => {
  let highLightItem = "";
  let dataHighlightLength = dataHighlight.length;
  for (let item = 0; item < dataHighlightLength; item++) {
    highLightItem += `<li class="highlight__item">
                    <a href="" class="highlight__link">
                        <img class="highlight__icon" src="${dataHighlight[item].src}">
                        <span class="text">${dataHighlight[item].name}</span>
                    </a>
                </li>`;
  }
  let menu = document.querySelector(".highlight__list");
  menu.innerHTML = highLightItem;
};

renderMenu();

const showListCategory = () => {
  let categoryItem = "";
  let dataCategoryLength = dataCategory.length;
  for (let i = 0; i < dataCategoryLength; i++) {
    categoryItem += `<li class="highlight__item">
                            <a href="" class="highlight__link">
                                <img class="highlight__icon" src="${dataCategory[i].src}">
                                <span class="text">${dataCategory[i].name}</span>
                            </a>
                        </li>`;
  }
  const listCategory = document.querySelector("#category__list");
  listCategory.innerHTML = categoryItem;
};
showListCategory();
