import { turfs } from "../data/turfDetails.js";
import { displayCard } from "./framingTurf.js";

const selectBox = document.querySelector('.select-box');
const optionsContainer = document.querySelector('.options');
const checkboxes = document.querySelectorAll('.option input');
const dropdown = document.querySelector('.dropdown');

// Array to store selected sports
let selectedSports = ["allsports"];
let filteredTurf = [];

selectBox.addEventListener('click', () => {
    dropdown.classList.toggle('rotate');
    optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectBox);
});

function updateSelectBox() {
    selectedSports = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    if (selectedSports.length === 0) {
        selectedSports = ["allsports"];
        selectBox.textContent = 'All sports';
    } else if (selectedSports.length === checkboxes.length) {
        selectedSports = ["allsports"];
        selectBox.textContent = 'All sports';
    } else {
        selectBox.textContent = selectedSports.join(', ');
    }

    // Filter turfs based on selected sports
    filterTurf(selectedSports);
}

document.addEventListener('click', (e) => {
    if (!selectBox.contains(e.target) && !optionsContainer.contains(e.target)) {
        optionsContainer.style.display = 'none';
    }
});

function filterTurf(selectedSports) {
    if (selectedSports.includes("allsports")) {
        filteredTurf = turfs;
    } else {
        filteredTurf = turfs.filter(turf => 
            selectedSports.some(sport => 
                turf.turf_sports.includes(sport)
            )
        );
    }
    displayCard(filteredTurf);
}

// Initial filtering
filterTurf(selectedSports);