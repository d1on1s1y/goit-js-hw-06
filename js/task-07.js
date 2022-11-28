const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

input.addEventListener("input", (event) => {
    
    const inputValue = event.currentTarget.value;
    console.log(inputValue);
    text.setAttribute("style", `font-size: ${inputValue}px` )

})