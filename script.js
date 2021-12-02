let api_key = 'CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69';
let year;
let month;
let day;

//#region Header
function header() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69");
    xhr.responseType = "json";
    xhr.onload = function () {
document.querySelector(".headerbg").style.backgroundImage = "url('" + xhr.response.url + "')";
    console.log(xhr.response.url);
    };
    xhr.send();
};
header();
//#endregion

// Funktioner för att hämta och visa marsrover
function showImage(url) {
    document.getElementById("start_image").src = url;
    return `visar ${url}`;
}

async function planetPicker(planet) {
    switch (planet) {
        case 'venus':
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`;
            break;
        case 'tellus':
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`;
            break;
        case 'merkurius':
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`;
            break;
        case 'mars':
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`;
            break;
        case 'jupiter':
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`;
            break;
        case 'saturnus':
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`;
            break;
        case 'uranus':
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`;
            break;
        case 'neptunus':
            url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`;
            break;
    }
    year = '2015';
    month = '06';
    day = '03';
    let result = await fetch(url)
        .then(response => response.json())
        .then(data => {
            showImage(data.photos[0].img_src)
        });
    console.log(result);
}