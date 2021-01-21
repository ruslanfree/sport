
const slideIbg = document.querySelectorAll('.slider-top__items');

slideIbg.forEach(function (item) {
    item.classList.add('ibg');

});

let sliderBg = new Swiper('.slider-top__container', {

    navigation: {
        nextEl: '.slider-top__arrow-next',
        prevEl: '.slider-top__arrow-prev',
    },
    loop: true,
    autoplay: true,

    wrapperClass: 'slider-top__wrapper',

    slideClass: 'slider-top__items',
});

let sliderCont = new Swiper('.slider__wrapper', {

    navigation: {
        nextEl: '.slider__arrow-next',

        prevEl: '.slider__arrow-prev',
    },

    loop: true,

    autoplay: true,
    slidesPerView: 'auto',

    wrapperClass: 'slider__container',

    slideClass: 'slider__item',
});

let sliderShop = new Swiper('.shop-slider', {

    navigation: {
        nextEl: '.shop-slider__arrow-next',

        prevEl: '.shop-slider__arrow-prev',
    },

    loop: true,

    autoplay: true,
    slidesPerView: 'auto',

    wrapperClass: 'shop-slider__wrapper',

    slideClass: 'shop-slider__item',
});

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    let widthTran = window.innerWidth - burger.clientWidth * 2;
    let navigBlock = document.querySelector('.header__navigation');
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        burger.style.transform = 'translate(' + widthTran + 'px)';
        navigBlock.style.transform = 'translate(0%)';
    } else {
        burger.style.transform = 'translate(0px)'
        navigBlock.style.transform = 'translate(-100%)'
    }
});


const imageCard = document.querySelectorAll('.services__card-image img');

imageCard.forEach(item => {
    item.addEventListener('mousemove', imageMove);
    item.addEventListener('mouseout', imageMoveEnd);
});


let tabs = document.querySelectorAll('.tabs__btn');
let tabsB = document.querySelector('.tabs__buttons');
let tabsContent = document.querySelectorAll('.tabs__content');

tabsB.addEventListener('click', tabOpen);


function tabOpen(e) {

    if (e.target.className == 'tabs__btn') {
        let dataTab = e.target.getAttribute('data-tab');

        for (let i = 0; i < tabsContent.length; i++) {
            if (dataTab == i) {
                tabsContent[i].classList.add('active');

            }
            else {
                tabsContent[i].classList.remove('active')
            }
        }
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i] == e.target) {
                tabs[i].classList.add('active');
            } else { tabs[i].classList.remove('active'); }
        }

    }

}

function imageMove(e) {

    let itemWidth = this.clientWidth / 2;
    let itemHeight = this.clientHeight / 2;

    let rotateX = e.offsetX - itemWidth;
    let rotateY = e.offsetY - itemHeight;

    this.style.transform = `rotateX(${-rotateY / 6}deg) rotateY(${rotateX / 6}deg)`;

}




function imageMoveEnd() {
    this.style.transform = 'none';
}


// image-background function

function ibg() {
    let ibgBlock = document.querySelectorAll('.ibg');

    for (let i = 0; i < ibgBlock.length; i++) {

        let ibgImg = ibgBlock[i].querySelector('img');

        let image = ibgImg.getAttribute('src');

        ibgBlock[i].style.background = `url(../${image})`


    }
}

ibg();