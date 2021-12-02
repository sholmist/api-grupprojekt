let api_key = 'CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69';
let year;
let month;
let day;


//#region Header
function header() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=" + api_key);
  xhr.responseType = "json";
  xhr.onload = function () {
    document.querySelector(".headerbg").style.backgroundImage = "url('" + xhr.response.url + "')";
    console.log(xhr.response.url);
  };
  xhr.send();
};
//#endregion

// Ska denna vara kvar?
// function getXML() {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=' + api_key);
//   xhr.responseType = 'json';
//   xhr.onload = function () {
//     console.log(xhr.response);
//   };
//   xhr.send();
// }


// Mars
function showMarsRover(url) {
  document.getElementById("mars_rover").src = url;
  return `visar ${url}`;
}
async function marsRover() {
  year = '2015';
  month = '06';
  day = '03';
  let result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${api_key}`).then(response => response.json()).then(data => {
    showMarsRover(data.photos[0].img_src)
  });
  console.log(result);
}


//Körs när js laddas
getXML();
header();