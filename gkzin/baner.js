
const slideList = [{
    img: 'linear-gradient(rgba(255, 0, 0, 0.35), rgba(255, 0, 0, 0.35)), url(images/baner-img/baner1.png)',
    text: 'Pierwszy tekst'
},
{
    img: 'linear-gradient(rgba(159, 90, 253, 0.35), rgba(159, 90, 253, 0.35)), url(images/baner-img/baner2.png)',
    text: 'Drugi tekst'
},
{
    img: 'linear-gradient(rgba(25, 181, 254, 0.35), rgba(25, 181, 254, 0.35)), url(images/baner-img/baner3.png)',
    text: 'Trzeci tekst'
},
{
    img: 'linear-gradient(rgba(41, 241, 195, 0.35), rgba(41, 241, 195, 0.35)), url(images/baner-img/baner4.png)',
    text: 'Czwarty tekst'
}];



const imageSlider = document.querySelector('div.baner-photo');
const h1Slider = document.querySelector('h1.baner-title');
const dots = [...document.querySelectorAll('.dots span')];

// interface

const time = 3500;
// active slide from arr
let activeSlider = 0;

// implementation

// changing dots implementation
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[activeSlider].classList.add('active');
}

// changing slide implementation
const changeSlide = () => {
    activeSlider++;
    if (activeSlider === slideList.length) {
        activeSlider = 0;
    }
    imageSlider.style.backgroundImage = slideList[activeSlider].img;
    h1Slider.textContent = slideList[activeSlider].text;
    changeDot();
}


let intervalIndex = setInterval(changeSlide, time)


// changing dots and slide by buttons
const keyChangeSlide = (e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(intervalIndex);
        e.keyCode === 37 ? activeSlider-- : activeSlider++;
        if (activeSlider === slideList.length) {
            activeSlider = 0;
        } else if (activeSlider < 0) {
            activeSlider = slideList.length - 1;
        }

        imageSlider.style.backgroundImage = slideList[activeSlider].img;
        h1Slider.textContent = slideList[activeSlider].text;
        changeDot();
        intervalIndex = setInterval(changeSlide, time);
    }
}


// changing dots and slide by click
const changeSlideClick = (e) => {
    clearInterval(intervalIndex);
    //changing dots
    const activeSlide = dots.indexOf(e.target);
    const activeClick = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeClick].classList.remove('active');
    e.target.classList.add('active');
    //changing photo
    imageSlider.style.backgroundImage = slideList[activeSlide].img;
    h1Slider.textContent = slideList[activeSlide].text;
    activeSlider = activeSlide;
    intervalIndex = setInterval(changeSlide, time);
}


window.addEventListener('keydown', keyChangeSlide);
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', changeSlideClick)
}


