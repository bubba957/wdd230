
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

//*********************************************

const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#range");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

//********************************************

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=36.17&lon=-115.14&appid=2eff4b5074904b47420be6d3095f18f6&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.weather[0]}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherIcon}.10d.png`;
    let desc = data.weather[0].weatherIcon;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather in Trier, Germany.');
    captionDesc.textContent = `${desc}`;
}

apiFetch();