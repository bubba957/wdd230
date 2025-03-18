
const hamBtn = document.querySelector('.navBtn');
const nav = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamBtn.classList.toggle('open');
});

const optionsY = {year: 'numeric'};

document.querySelector('.year').textContent = new Date().toLocaleDateString('en-US', optionsY);

const optionsDMY = {day: 'numeric', month: 'short', year: 'numeric'};

document.querySelector('.lastModified').textContent = new Date().toLocaleDateString('en-US', optionsDMY);

