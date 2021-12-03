let api_key = 'CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69';
let stringdate = document.getElementById("date");
let date = [];

//#region Header
function header() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69");
    xhr.responseType = "json";
    xhr.onload = function () {
document.querySelector(".headerbg").style.backgroundImage = "url('" + xhr.response.url + "')";
    console.log("header visar: " + xhr.response.url);
    };
    xhr.send();
};
header();
//#endregion

//Uppdatterar date när datumväljar ändras
stringdate.onchange = function(){
    date = stringdate.value.split("-");
    console.log(date);
}

// MARS
async function marsRover() {
    year = '2015';
    month = '12';
    day = '11';
    let bild;
       let result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`)
        .then(response => response.json())
        .then(data => document.getElementById("start_image").src = data.photos[0].img_src);
            
    console.log(`result: ${result}`);
}

//TELLUS
function tellusEpic() {
    // let year = "2020";
    // let month = '11';
    // let day = '25';
    let xhr = new XMLHttpRequest();
    let pickedDate = document.querySelector("#date").value;

    xhr.open("GET", "https://api.nasa.gov/EPIC/api/natural/date/" + date[0] + "-" + date[1] + "-" + date[2] + "?api_key=" + api_key);
    
    xhr.responseType = "json";
    xhr.onload = function() {
        if (xhr.response.length == 0) {
            document.getElementById("image-title").innerText = "Ogiltigt datum";
            document.getElementById("image-text").innerText = "Välj ett annat";
        }
        else {
            console.log(xhr.response);
            document.getElementById("image-title").innerText = xhr.response.date;
            document.getElementById("image-text").innerText = xhr.response.caption;
            document.getElementById("start-image").src = "https://epic.gsfc.nasa.gov/archive/natural/" +  date[0] + "/" + date[1] + "/" + date[2] + "/png/" + xhr.response[0].image + ".png";
        }
    };
    xhr.send();
}