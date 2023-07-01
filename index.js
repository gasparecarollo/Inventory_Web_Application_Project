







let stockStatus = true;

const h2ForInStock = document.getElementsByClassName(".inStock")

h2ForInstock.addEventListener("click", () => {
    //Handle the toggle

    // for (let i = 0; i < .length; i++)
    stockStatus = !stockStatus
    //the opposite of what it was previously



    h2ForInStock.innerText = "Available in Stock"

    //Conditional rendering
    if (stockStatus === true) {
        h2ForInStock.innerText = "Available in Stock"

    } else {

        h2ForInStock.innerText = "Sold Out"

    }


})


const getImgOffice = document.querySelector("#theOffice")
const hoverInsideBox = addEventListener("mouseover", () => {
    theOffice.src = "/Users/gasparecarollo/10-1_Folder/Inventory_Web_Application/Assets/Opacity.jpg"

})


