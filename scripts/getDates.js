
const optionsY = {year: 'numeric'}

document.querySelector('#year').textContent = new Date().toLocaleDateString('en-US', optionsY);

const optionsDMY = {day: 'numeric', month: 'long', year: 'numeric'}

document.querySelector('#lastModified').textContent = new Date().toLocaleDateString('en-US', optionsDMY);

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('#navMain');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const darkBtn = document.querySelector('#darkBtn');
const main = document.querySelector('#navMain');

darkBtn.addEventListener('click', () => {
    main.classList.toggle('dark');
});