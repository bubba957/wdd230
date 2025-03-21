
const optionsY = {year: 'numeric'}

document.querySelector('.year').textContent = new Date().toLocaleDateString('en-US', optionsY);

const optionsDMY = {day: 'numeric', month: 'long', year: 'numeric'}

document.querySelector('.lastModified').textContent = new Date().toLocaleDateString('en-US', optionsDMY);

// **************************************
const hamButton = document.querySelector('.hamButton');
const navigation = document.querySelector('.navMain');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// ************************************

const darkBtn = document.querySelector('.darkBtn');
const main = document.querySelector('.navMain');

darkBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
});

// **************************************

const visits = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits;
}
else {
    visits.textContent = `Welcome. Hope you have a nice visit.`;
}

numVisits++;

localStorage.setItem('numVisits-ls', numVisits);