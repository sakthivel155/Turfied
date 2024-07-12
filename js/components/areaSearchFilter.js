import { turfs } from "../data/turfDetails.js";
import { state } from "../data/cityStates.js";
import { sortedTurf } from "./framingTurf.js";

const availableKeywords = Object.entries(state).flatMap(([key, value]) =>
    value.map(city => `<span class='city'>${city}</span> <span class='state'>${key}</span>`)
);

const Input_box = document.getElementById('search-area');
const Result_box = document.getElementById('area-result-box');
const resultList = Result_box.querySelector('ul');

function display(result) {
    if (result.length) {
        resultList.innerHTML = result.map(item => `<li>${item}</li>`).join('');
        Result_box.style.display = 'block';

        resultList.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', function() {
                selectItem(this);
            });
        });
    } else {
        Result_box.style.display = 'none';
    }
}

function selectItem(item) {
    Input_box.value = item.textContent.replace(" ", ", ");
    let displayCity = item.textContent.slice(0, item.textContent.indexOf(" "));
    document.getElementById("city").innerHTML = displayCity;
    Result_box.style.display = 'none';
    filterTurf(displayCity);
}

Input_box.addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const result = input.length ? availableKeywords.filter(keyword =>
        keyword.toLowerCase().includes(input)
    ) : [];
    display(result);
});

document.addEventListener('click', function(e) {
    if (!Result_box.contains(e.target) && e.target !== Input_box) {
        Result_box.style.display = 'none';
    }
});

function filterTurf(city) {
    const filteredTurfs = turfs.filter(turf => turf.turf_area.toLowerCase() === city.toLowerCase());
    if (filteredTurfs.length > 0) {
        sortedTurf(filteredTurfs);
    } else {
        console.log(`No turfs found for ${city}`);
    }
}

document.addEventListener('DOMContentLoaded', () => { getGeolocation() });
document.getElementById('detect-location-icon').addEventListener('click', () => { getGeolocation() });

function getGeolocation(){
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                    .then(response => response.json())
                    .then(data => {

                        const district = data.address.county || data.address.district || 'N/A';
                        Input_box.value = district;
                        Input_box.dispatchEvent(new Event('input'));
  
                        // Check if there's a matching result and select it
                       
                            const matchingItem = Array.from(resultList.querySelectorAll('li')).find(item =>
                                item.textContent.toLowerCase().includes(district.toLowerCase())
                            );
                            if (matchingItem) {
                                selectItem(matchingItem);
                            }
                       

                        resolve(district);
                    })
                    .catch(error => {
                        console.error("Error getting location details:", error);
                        reject(error);
                    });
            }, (error) => {
                console.error("Error getting location:", error);
                reject(error);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
            reject("Geolocation not supported");
        }
    }); 
}
    


