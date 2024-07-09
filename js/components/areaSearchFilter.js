import { state } from "../data/cityStates.js";

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
                Input_box.value = this.textContent.replace(" ", ", ");
                let displayCity = this.textContent.slice(0, this.textContent.indexOf(" "));
                document.getElementById("city").innerHTML = displayCity;
                Result_box.style.display = 'none';
            });
        });
    } else {
        Result_box.style.display = 'none';
    }
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