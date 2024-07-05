const selectBox = document.querySelector('.select-box');
const optionsContainer = document.querySelector('.options');
const checkboxes = document.querySelectorAll('.option input');
const dropdown = document.querySelector('.dropdown');

selectBox.addEventListener('click', () => {
    dropdown.classList.toggle('rotate');
    optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
});


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectBox);
});

function updateSelectBox() {
    const selectedOptions = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    if (selectedOptions.length === 0) {
        selectBox.textContent = 'All sports';
    } else if (selectedOptions.length === checkboxes.length) {
        selectBox.textContent = 'All sports';
    } else {
        selectBox.textContent = selectedOptions.join(', ');
    }
}

document.addEventListener('click', (e) => {
    if (!selectBox.contains(e.target) && !optionsContainer.contains(e.target)) {
        optionsContainer.style.display = 'none';
    }
});