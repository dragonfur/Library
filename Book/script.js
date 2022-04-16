// script

// Initializers
const library = document.querySelector(".theLibrary")
const addButton = document.getElementById('AddNewBook')
const formDisplay = document.getElementById("overlay")
const submitButton = document.getElementById("theSubmitButton")

var row, cell, text, deleteButton

//the library
let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: "310",
        read: "true"
    }
]

class Book {
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function addBookToLibrary(array) {
    for (i = 0; i < array.length; i++) {
        row = document.createElement("tr")
        //Title of the book
        cell = document.createElement("td")
        text = document.createTextNode(array[i].title)
        cell.appendChild(text)
        row.appendChild(cell)
        //Author of the book
        cell = document.createElement("td")
        text = document.createTextNode(array[i].author)
        cell.appendChild(text)
        row.appendChild(cell)
        //Pages of the book
        cell = document.createElement("td")
        text = document.createTextNode(array[i].pages)
        cell.appendChild(text)
        row.appendChild(cell)
        //Read or not?
        cell = document.createElement("td")
        var readCheckbox = document.createElement("div")
        readCheckbox.setAttribute("id", "readValue")
        if (array[i].read === "true" || array[i].read === true) {
            text = document.createTextNode("Read")
            readCheckbox.setAttribute("class", "isRead")
        }
        else if (array[i].read === "false" || array[i].read === true) {
            text = document.createTextNode("Unread")
        }
        readCheckbox.appendChild(text)
        cell.appendChild(readCheckbox)
        row.appendChild(cell)
        //Delete button
        cell = document.createElement("td")
        buttonContainer = document.createElement("div")
        deleteButton = document.createElement("button")
        const trashButton = document.createElement("img")
        trashButton.setAttribute("src", "img/delete.svg")
        deleteButton.appendChild(trashButton)
        deleteButton.setAttribute("id", "aDeleteButton")
        buttonContainer.setAttribute("class", "theDeleteButton")
        deleteButton.setAttribute("onclick", "deleteRow(this)")
        buttonContainer.appendChild(deleteButton)
        cell.appendChild(buttonContainer)
        row.appendChild(cell)
        library.appendChild(row)
        myLibrary = []
    }  
}

function deleteRow(r) {
    let areYouSure = confirm("Are you sure you want to delete this book?")
    if (areYouSure === true) {
        var i = r.parentNode.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i)
    }
    else {
        return
    }
}

addButton.addEventListener("click", () => {
    formDisplay.style.display = "block";
})

addBookToLibrary(myLibrary)

//grabbing form data
submitButton.addEventListener("click", () => {
    var title = document.getElementById("bookTitle").value
    var author = document.getElementById("bookAuthor").value
    var pages = document.getElementById("bookPages").value
    if (title === "" || author === "" || pages === "") {
        alert("Please don't leave the fields empty")
        return
    }
    else
    var read = document.getElementById("bookRead").checked
    read = read.toString()
    var ABook = new Book(title, author, pages, read)
    myLibrary.push(ABook)
    console.log(myLibrary)
    document.getElementById("bookDetails").reset()
    formDisplay.style.display = "none"
    addBookToLibrary(myLibrary)
})

//read or unread toggle
function readToggling() {
    const readToggle = document.querySelector("div#readValue")
    readToggle.addEventListener("click", (e) => {
        e.target.removeAttribute("class")
    })
}

document.addEventListener("click", (e) => {
   if (e.target.classList.contains("isRead") === true) {
       e.target.removeAttribute("class")
       e.target.textContent = "Unread"

   }
   else if (e.target.textContent === "Unread") {
        e.target.setAttribute("class", "isRead")
        e.target.textContent = "Read"
   }
})

//exit button
const container = document.querySelector("div.container")
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("container") !== true) {
        return
    }
    else
    formDisplay.style.display = "none"
})