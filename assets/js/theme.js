const form = document.querySelector('form'); 
const nameInput = document.getElementById('name-input'); 
const emailInput = document.getElementById('email-input'); 
const phoneInput = document.getElementById('phone-input'); 
const commentInput = document.getElementById('comment'); 
const checkbox = document.querySelector('.check_box'); 

form.addEventListener('submit', function (event) {
    if (!nameInput.value || !emailInput.value || !phoneInput.value || !commentInput.value || !checkbox.checked) {
        alert('Kļūda');
        event.preventDefault(); 
    }
});


