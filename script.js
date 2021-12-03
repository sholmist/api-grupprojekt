let api_key = 'CNCFz3LTIegsRtNzARWJShPRpuzRXlCjtC0p1K69';
let stringdate = document.getElementById("date");

//Skriva ut dagens datum i date
let today = new Date();
let date = [today.getFullYear(),today.getMonth() + 1,today.getDate()];

if (date[2] < 10) {
    stringdate.value = date[0] + "-" + date[1] + "-0" + date[2];
}
else{
    stringdate.value = date[0] + "-" + date[1] + "-" + date[2];
}



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
       let result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date[0]}-${date[1]}-${date[2]}&api_key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.photos.length > 0) {
                document.getElementById("start-image").src = data.photos[0].img_src;
                document.getElementById("image-title").innerText = `Picture from Mars Rover`;
                document.getElementById("image-text").innerText = date;
            }
            else {
                document.getElementById("start-image").src = '';
                document.getElementById("image-text").innerText = date;
                document.getElementById("image-title").innerText = 'There is no picture from chosen date. Please, try again.';
            }
            
        })
        .catch(error => document.getElementById("image-title").innerText = 'There has been a problem with your fetch operation:' + error);
            
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
            document.querySelector(".lat").innerText = "Latitude: " + xhr.response[0].centroid_coordinates.lat;
            document.querySelector(".lon").innerText = "Longitude: " + xhr.response[0].centroid_coordinates.lon;
            document.getElementById("image-title").innerText = xhr.response.date;
            document.getElementById("image-text").innerText = xhr.response.caption;
            document.getElementById("start-image").src = "https://epic.gsfc.nasa.gov/archive/natural/" +  date[0] + "/" + date[1] + "/" + date[2] + "/png/" + xhr.response[0].image + ".png";
        }
    };
    xhr.send();
}

// Alla andra planeter

function planeter(planet) {

    if (planet == 0) {
        document.querySelector(".intro h1").innerText = "Venus"
        document.querySelector(".intro p").innerText = "Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds. Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough to melt lead. The surface is a rusty color and it’s peppered with intensely crunched mountains and thousands of large volcanoes. Scientists think it’s possible some volcanoes are still active.        Venus has crushing air pressure at its surface – more than 90 times that of Earth – similar to the pressure you'd encounter a mile below the ocean on Earth."
        document.querySelector("#start_image").src = "img/venus.jpg"
        document.querySelector(".lat").innerText = "Surface: 460 200 000 km²";
        document.querySelector(".lon").innerText = "Orbital period: 225 days";
    }
    if (planet == 1) {
        document.querySelector(".intro h1").innerText = "Mercury"
        document.querySelector(".intro p").innerText = "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.Because of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planets surface. The same thing happens in reverse at sunset."
        document.querySelector("#start_image").src = "img/mercury.jpg"
        document.querySelector(".lat").innerText = "Surface: 74 800 000 km²"
        document.querySelector(".lon").innerText = "Orbital period: 88 days"
    }
    if (planet == 2) {
        document.querySelector(".intro h1").innerText = "Jupiter"
        document.querySelector(".intro p").innerText = "Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe. Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. One spacecraft – NASA's Juno orbiter – is currently exploring this giant world."
        document.querySelector("#start_image").src = "img/jupiter.jpg"
        document.querySelector(".lat").innerText = "Surface: 6,142×10^10 km²"
        document.querySelector(".lon").innerText = "Orbital period: 12 years"
    }
    if (planet == 3) {
        document.querySelector(".intro h1").innerText = "Saturn"
        document.querySelector(".intro p").innerText = "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium."
        document.querySelector("#start_image").src = "img/saturn.jpg"
        document.querySelector(".lat").innerText = "Surface: 4,27×10^10 km"
        document.querySelector(".lon").innerText = "Orbital period: 29 years"
    }
    if (planet == 4) {
        document.querySelector(".intro h1").innerText = "Uranus"
        document.querySelector(".intro p").innerText = "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode."
        document.querySelector("#start_image").src = "img/uranus.jpg"
        document.querySelector(".lat").innerText = "Surface: 8,083×10^9 km²"
        document.querySelector(".lon").innerText = "Orbital period: 84 years"
    }
    if (planet == 5) {
        document.querySelector(".intro h1").innerText = "Neptune"
        document.querySelector(".intro p").innerText = "Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. NASA's Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system."
        document.querySelector("#start_image").src = "img/neptune.jpg"
        document.querySelector(".lat").innerText = "Surface: 7,618×10^9 km²"
        document.querySelector(".lon").innerText = "Orbital period: 165 years"
    }

}