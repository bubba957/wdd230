
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

// *********************************

const visits = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits == 0) {
    visits.textContent = `Welcome! Let us know if you have any questions.`;
}
else if (numVisits == 1) {
    visits.textContent = `You last visited 1 day ago.`;
}
else if (numVisits > 1) {
    visits.textContent = `You last visted {} days ago.`;
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);