//API KEY:
//https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69


function header(){

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