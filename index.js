







let stockStatus = true;

const h3ForInStock = document.getElementsByClassName(".inStock")

h3ForInStock.addEventListener("click", () => {
    //Handle the toggle

    // for (let i = 0; i < .length; i++)
    stockStatus = !stockStatus
    //the opposite of what it was previously



    h3ForInStock.innerText = "Available in Stock"

    //Conditional rendering
    if (stockStatus === true) {
        h3ForInStock.innerText = "Available in Stock"

    } else {

        h3ForInStock.innerText = "Sold Out"

    }


})



// const hoverInsideBox = addEventListener("mouseover", () => {
//     .src = "/Users/gasparecarollo/10-1_Folder/Inventory_Web_Application/Assets/Opacity.jpg"
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
//image Uploader
const inputUploader = document.querySelector("input")
const preview = document.querySelector(".preview")
inputUploader.style.opacity = 0;
inputUploader.addEventListener("change", updateImageDisplay)

function updateImageDisplay() {

    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }
    const inputFiles = input.files;
    if (inputFiles.length === 0) {
        const para = document.createElement("p");
        para.textContent = "No files currently selected for upload";
        preview.appendChild(para);
    } else {
        const list = document.createElement("ol");
        preview.appendChild(list);
        for (const file of inputFiles) {
            const listItem = document.createElement("li");
            const para = document.createElement("p");
            if (validFileType(file)) {
                para.textContent = `File name ${file.name}, file size ${returnFileSize(
                    file.size
                )}.`;
                const image = document.createElement("img");
                image.src = URL.createObjectURL(file);

                listItem.appendChild(image);
                listItem.appendChild(para);
            } else {
                para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
                listItem.appendChild(para);
            }

            list.appendChild(listItem);
        }
    }
    const fileTypes = [
        "image/apng",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/svg+xml",
        "image/tiff",
        "image/webp",
        "image/x-icon",
    ];

    function validFileType(file) {
        return fileTypes.includes(file.type);
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return `${number} bytes`;
        } else if (number >= 1024 && number < 1048576) {
            return `${(number / 1024).toFixed(1)} KB`;
        } else if (number >= 1048576) {
            return `${(number / 1048576).toFixed(1)} MB`;
        }
    }
}
