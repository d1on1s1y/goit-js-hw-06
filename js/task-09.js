function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color")
const field = document.querySelector(".color")
const body = document.body;

button.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  field.textContent = color;
  body.setAttribute("style", `background-color: ${color}`)
  })
