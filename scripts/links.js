const baseURL = "https://bubba957.github.io/wdd230/";
const linksURL = "https://bubba957.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        
    });
}

getLinks();