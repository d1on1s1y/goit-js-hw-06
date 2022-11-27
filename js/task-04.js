const decrementButton = document.querySelectorAll("Button")[0];
const incrementButton = document.querySelectorAll("Button")[1];
let counterValue = 0;
    const valueEl = document.querySelector(`span`);
incrementButton.addEventListener(`click`, (event) => {
    counterValue += 1;
    
    valueEl.textContent = counterValue;
});
decrementButton.addEventListener(`click`, (event) =>{
    counterValue = counterValue - 1;

    valueEl.textContent = counterValue;
})


