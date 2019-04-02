// section A covers clicking


const posterCovers = [...document.querySelectorAll('div.zin-content')];
const rotateCovers = [...document.querySelectorAll('div.cover')];
const btnRotate = [...document.querySelectorAll('button.btn-rotate')];

const activeCover = (e) => {
    console.log(e.target)
    posterCovers.findIndex(cover => cover.classList.remove('rotate-content'));
    if (e.target.classList == 'cover') {
        const activeCover = rotateCovers.indexOf(e.target)
        posterCovers[activeCover].classList.add('rotate-content');
        if (posterCovers.findIndex(cover => cover.classList.contains('rotate-content'))) {
            posterCovers.forEach(cover => cover.classList.remove('double-rotate'));
        } else if (posterCovers.findIndex(cover => cover.classList.contains('double-rotate'))) {
            console.log('dziala')
            posterCovers.forEach(cover => cover.classList.remove('double-rotate'));
        }
    }

};

const nextCover = (e) => {
    if (e.target.classList == 'btn-rotate') {
        const activeBtn = btnRotate.indexOf(e.target);
        posterCovers[activeBtn].classList.add('double-rotate');
    }
}

// btnRotate.addEventListener('click', function () {
//     if (posterCovers.classList == 'zin-content rotate-content') {
//         posterCovers.classList.remove('rotate-content');
//         posterCovers.classList.add('double-rotate');
//     }
// })
btnRotate.forEach(btn => btn.addEventListener('click', nextCover));
posterCovers.forEach(cover => cover.addEventListener('click', activeCover));
