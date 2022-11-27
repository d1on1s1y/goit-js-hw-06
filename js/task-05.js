const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
nameInput.addEventListener("input", (event) => {
    output.textContent = null ? Anonymous : event.currentTarget.value;
        
})