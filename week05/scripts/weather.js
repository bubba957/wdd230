const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=2eff4b5074904b47420be6d3095f18f6&units=imperial';

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