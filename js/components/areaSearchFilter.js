import { state } from "./data.js";

let availableKeywords = [];
        Object.entries(state).forEach(([key, value]) => {
            value.forEach((city) => {
                availableKeywords.push("<span class='city'>"+ city +"</span>"+" "+"<span class='state'>"+ key +"</span>");
            });
        });
        
        let Input_box = document.getElementById('search-area');
        let Result_box = document.getElementById('area-result-box');

        Input_box.onkeyup = function () {
            let result = [];
            let input = Input_box.value;

            if (input.length) {
                result = availableKeywords.filter((keyword) => {
                    return keyword.toLowerCase().includes(input.toLowerCase());
                });
                Result_box.style.display = 'block';
            } else {
                Result_box.style.display = 'none';
            }
            display(result);
        };

        function display(result) {
            let List = "";
            result.forEach((list) => {
                List += `<li>${list}</li>`;
            });
            Result_box.querySelector('ul').innerHTML = List;

            // Add click event listeners to list items
            let listItems = Result_box.querySelectorAll('li');
            listItems.forEach(item => {
                item.addEventListener('click', function() {
                    Input_box.value = this.textContent.replace(" ", ", ");
                    Result_box.style.display = 'none';
                });
            });
        }

        // Hide results when clicking outside
        document.addEventListener('click', function(e) {
            if (!Result_box.contains(e.target) && e.target !== Input_box) {
                Result_box.style.display = 'none';
            }
        });