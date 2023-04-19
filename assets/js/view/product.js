let dataProduct = {
    id: 1,
    title: 'Pin Sạc Dự Phòng 10.000mAh ROBOT RT180 - 2 Cổng Sạc Vào Type-C/Micro, Kích Thước Mỏng và Nhẹ - HÀNG CHÍNH HÃNG',
    imgSmall: ['https://salt.tikicdn.com/cache/100x100/ts/product/dd/e7/d7/ed5b711bd5ebbbad96a06a5f2836726d.jpg.webp',
        'https://salt.tikicdn.com/cache/100x100/ts/product/2b/3a/d0/381d4b88d0a5e2615cd642b9f3847104.jpg.webp',
        'https://salt.tikicdn.com/cache/100x100/ts/product/7c/10/25/407f7d8a941938d451345a6afd48a7ef.jpg.webp',
        'https://salt.tikicdn.com/cache/100x100/ts/product/eb/f4/ed/468272ec8212c0f8c66391450f0fecbd.jpg.webp'],
    imgZoom: ['https://salt.tikicdn.com/cache/750x750/ts/product/dd/e7/d7/ed5b711bd5ebbbad96a06a5f2836726d.jpg.webp',
        'https://salt.tikicdn.com/cache/750x750/ts/product/2b/3a/d0/381d4b88d0a5e2615cd642b9f3847104.jpg.webp',
        'https://salt.tikicdn.com/cache/750x750/ts/product/7c/10/25/407f7d8a941938d451345a6afd48a7ef.jpg.webp',
        'https://salt.tikicdn.com/cache/750x750/ts/product/eb/f4/ed/468272ec8212c0f8c66391450f0fecbd.jpg.webp'],
    productSaled: 4664,
    vote: 1500,
    price: 320,
    discount: 0.5,
    color: ['trắng', 'xanh'],
    batteryCapacity: '10.000mAh',
    Trademark: 'Robot',
    brandOrigin: 'Indonesia',
    Model: 'RT180',
    origin: 'China',
    productWeight: '225gr',
    output: 'USB-A',
    input: ['Micro', 'Type-C']
};
let countInput = document.querySelector('#_countInput');
let subtractBtn = document.querySelector('#_subtractBtn');
let addBtn = document.querySelector('#_addBtn');
countInput.value = '1';
let getData = () => {
    let titleList = document.querySelectorAll('.titleProduct');
    for (let i = 0; i < titleList.length; i++) {
        titleList[i].innerHTML = dataProduct.title;
    }
    let votingList = document.querySelectorAll('.vote');
    for (let i = 0; i < votingList.length; i++) {
        votingList[i].innerHTML = dataProduct.vote;
    }
    let productSaledList = document.querySelectorAll('.productSaled');
    for (let i = 0; i < productSaledList.length; i++) {
        productSaledList[i].innerHTML = dataProduct.productSaled;
    }
    let TrademarkList = document.querySelectorAll('.trademark');
    for (let i = 0; i < TrademarkList.length; i++) {
        TrademarkList[i].innerHTML = dataProduct.Trademark;
    }


    document.querySelector('#_priceAfterDiscount').innerHTML = dataProduct.price - (dataProduct.price * dataProduct.discount) - 1;
    document.querySelector('#_price').innerHTML = dataProduct.price;
    document.querySelector('#_discount').innerHTML = dataProduct.discount * 100;
    document.querySelector('#_color').innerHTML = dataProduct.color.toString().replace(',', ` - `);
    document.querySelector('#_batteryCapacity').innerHTML = dataProduct.batteryCapacity;
    document.querySelector('#_brandOrigin').innerHTML = dataProduct.brandOrigin;
    document.querySelector('#_Model').innerHTML = dataProduct.Model;
    document.querySelector('#_origin').innerHTML = dataProduct.origin;
    document.querySelector('#_productWeight').innerHTML = dataProduct.productWeight;
    document.querySelector('#_output').innerHTML = dataProduct.output;
    document.querySelector('#_input').innerHTML = dataProduct.input.toString().replace(',', ` và `);



    // init list show img product
    let bigImg = [];
    for (let i = 0; i < dataProduct.imgZoom.length; i++) {
        bigImg[i] = document.createElement("img");
        bigImg[i].src = dataProduct.imgZoom[i];
        bigImg[i].style.width = '100%';
        // Product Description
        document.querySelector('.imgShow').appendChild(bigImg[i]);
    }

    // init first img product
    let firstImg = document.createElement("img");
    firstImg.src = bigImg[0].src;
    firstImg.style.width = '100%';
    document.querySelector('.show-img').append(firstImg)

    // init list small img product
    let smallImg = [];
    for (let i = 0; i < dataProduct.imgSmall.length; i++) {
        smallImg[i] = document.createElement("img");
        smallImg[i].src = dataProduct.imgSmall[i];
        smallImg[i].style.height = '100%';
        smallImg[i].style.cursor = 'pointer';
        smallImg[i].style.marginRight = '5px';
        smallImg[i].addEventListener('click', () => {
            document.querySelector('.show-img>img').src = bigImg[i].src;
        })
        document.querySelector('.list-img').appendChild(smallImg[i]);
    }

    /*button count*/
    subtractBtn.disabled = true;

}
getData();
// subtractBtn _addBtn

let subtractCount = () => {
    countInput.value = Number(countInput.value) - 1;
    if (countInput.value <= '1') {
        subtractBtn.disabled = true;
    } else subtractBtn.disabled = false;
};
let addCount = () => {
    countInput.value = Number(countInput.value) + 1;
    subtractBtn.disabled = false;
};

countInputChange = () => {
    if (countInput.value <= '1') {
        subtractBtn.disabled = true;
        countInput.value = 1;
    } else subtractBtn.disabled = false;
}

toggleShowHide = () => {
    let x = document.querySelector(".imgShow");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.querySelector('.productDescription>button').innerHTML = 'Thu Gọn Nội Dung';
    } else {
        x.style.display = "none";
        document.querySelector('.productDescription>button').innerHTML = 'Xem Thêm Nội Dung';
    }
}