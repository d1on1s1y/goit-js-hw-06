const categoryItem = document.querySelector("#categories");
const categoryList = categoryItem.querySelectorAll("li.item");
console.log("Number of categories:", categoryList.length);

const categoryElements = document.querySelectorAll("li.item");
categoryElements.forEach(function (categoryElement) {
    const firstElement = categoryElement.firstElementChild;
    console.log(`Category: ${firstElement.textContent}`)

    const allCategoryElements = categoryElement.querySelectorAll("li")
    console.log(`Elements: ${allCategoryElements.length}`)
})