import { turfs } from '../data/turfDetails.js';

export function displayCard(cards) {
    const turfCardContainer = document.getElementById('turf-list-wrapper');
    turfCardContainer.innerHTML = cards.map(turfCard => `
        <div class="turf-card">
            <div class="turf-image">
                <img src="${turfCard.turf_imgurl1}" alt="Turf Image">
                <span>Bookable</span>
            </div>
            <div class="turf-detail">
                <div>
                    <div class="turf-name">${turfCard.turf_name}</div>
                    <div class="turf-rating">
                        <img src="../assets/icons/turf card/star-icon.svg" alt="star-icon">
                        <div>${turfCard.turf_avg_rating}</div>
                        <div>(${turfCard.turf_no_of_rating})</div>
                    </div>
                </div>
                <div>
                    <div class="turf-place">${turfCard.turf_place}</div>
                    <div>(~ ${turfCard.turf_distance} km)</div>
                </div>
                <div class="turf-available-sports">
                    ${turfCard.turf_sports.map(sport => `<img src="../assets/icons/turf card/${sport}.png" alt="${sport}">`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

displayCard(turfs);




const Input_venue = document.getElementById('search-venue');

Input_venue.onkeyup = function() {
    const searchTerm = this.value.toLowerCase();
    
    if (searchTerm === "") {
        displayCard(turfs);
        return;
    }
    
    if (searchTerm.length >= 3) {
        const filteredTurfs = turfs.filter(turf => 
            turf.turf_name.toLowerCase().includes(searchTerm)
        );
        displayCard(filteredTurfs);
    }
};

