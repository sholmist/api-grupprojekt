//API KEY:
//https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69

function getXML() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69');

    xhr.responseType = 'json';

    xhr.onload = function () {
        console.log(xhr.response);
    };

    xhr.send();
}

//Körs när js laddas
getXML();