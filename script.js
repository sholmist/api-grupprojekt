//API KEY:
//https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69

let date = document.getElementById("prev-date");

function getAPOD() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69');

    xhr.responseType = 'json';

    xhr.onload = function () {
        console.log(xhr.response);
    };

    xhr.send();
}

date.onchange = function(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?date=' + date.value + '&api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69');

    xhr.responseType = 'json';

    xhr.onload = function () {
        var c = document.getElementById("prev-apod");

        console.log(xhr.response);
        if (xhr.response.code == 400) {
            c.getElementsByTagName("h3")[0].innerText = "Not a valid date"
        }else{
            c.getElementsByTagName("img")[0].src = xhr.response.url;
            c.getElementsByTagName("p")[0].innerText = xhr.response.explanation;
            c.getElementsByTagName("h3")[0].innerText = xhr.response.title;
        }
    };

    xhr.send();
}

//Körs när js laddas
getAPOD();