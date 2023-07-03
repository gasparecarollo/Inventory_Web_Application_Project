const dontBodyShameMe = document.querySelector("body")
const headingOne = document.querySelector("h1")
const newForm = document.getElementById("myForm")
const submit = document.getElementsByClassName(".submitBtn")
const reset = document.getElementsByClassName(".resetBtn")
const allFormInputs = document.querySelectorAll("#stockForm input")
const unorderedList = document.querySelector("ul")
const getItemName = document.getElementById("itemName")
const getPrice = document.getElementById("price")
const inStock = document.getElementById("inStock")

const inventoryList = document.getElementById("inventList")
const inventList = document.getElementById("inventListSect")


const newItemForList = document.querySelector("p")
const imageUploaded = document.querySelector("image")

newForm.addEventListener("submit", (event) => {
    event.preventDefault();
});


function inputData() {
    inventoryList.innerText = "item Name:" + " " + " " + document.forms["myForm"].itemName.value + " " + " " + " " + "Price:" + " " + " " + " " + document.forms["myForm"].price.value + " " + " " + "In Stock:" + " " + " " + " " + document.forms["myForm"].inStock.value;

}

function resetData() {
    inventoryList.innerText = " "


}



// toDoListDiv.append(newForm)






//Hover over mystery box to see the contents inside 
function setNewImage() {
    document.getElementById("theOfficeImg").src = "../assets/opacity.png"
    document.getElementById("tmntImg").src = "../assets/TMNTopacity.png"
    document.getElementById("rnmImg").src = "../assets/R&Mopacity.png"
    document.getElementById("animeImg").src = "../assets/Animeopacity.png"
}
function setOldImage() {

    document.getElementById("theOfficeImg").src = "../assets/theOfficeBox.png"
    document.getElementById("tmntImg").src = "../assets/TMNTbox.png"
    document.getElementById("rnmImg").src = "../assets/R&Mbox.png"
    document.getElementById("animeImg").src = "../assets/Animebox.png"

}

