//API KEY:
//https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69

let date = document.getElementById("prev-date");

//Kan möjligen göra initialization en gång
function getAPOD() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69');

    xhr.responseType = 'json';

    xhr.onload = function () {
        let div = document.getElementById("apod");

        display(xhr.response, div);
    };

    xhr.send();
}

date.onchange = function(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?date=' + date.value + '&api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69');

    xhr.responseType = 'json';

    xhr.onload = function () {
        let div = document.getElementById("prev-apod");

        display(xhr.response, div);
    };

    xhr.send();
}

function randomImg(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?count=1&api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69');

    xhr.responseType = 'json';

    xhr.onload = function () {
        let div = document.getElementById("random-apod");

        display(xhr.response[0], div);
    };

    xhr.send();
}

function display(R, D){
    console.log(R);

    //Skriver ut error meddelande
    if (typeof R.msg !== "undefined") {
        D.getElementsByTagName("h3")[0].innerText = R.msg;
    }else{
        D.getElementsByTagName("img")[0].src = R.url;
        D.getElementsByTagName("h3")[0].innerText = R.title;
        D.getElementsByTagName("p")[0].innerText = R.explanation;
    }
}

//Körs när js laddas
getAPOD();