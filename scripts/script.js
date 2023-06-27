const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
    menuBtn.classList.toggle('menu--open');
});

const imageWrapper = document.querySelector('.promo-carousel-images-wrapper');
let buttons = document.getElementsByClassName('promo-carousel-button');
let imageWidth = 945;
let currentImageIndex = 0;

const changeImage = (newImageIndex) => {
    let previousImageIndex = currentImageIndex;
    currentImageIndex = newImageIndex;

    imageWrapper.scroll(imageWidth*currentImageIndex, 0);
    changeButtonState(previousImageIndex, currentImageIndex);
};

const changeButtonState = (previousImageIndex, currentImageIndex) => {    
    buttons.item(currentImageIndex).classList.add('active');
    buttons.item(previousImageIndex).classList.remove('active');
};