// script

// Initializers
const library = document.querySelector(".theLibrary")
const addButton = document.getElementById('AddNewBook')
const formDisplay = document.getElementById("overlay")

var row, cell, text, deleteButton

//the library
let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: "297",
        read: "not yet"
    }
]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//need to iterate over inTable
function displayBook(array,) {
    array.forEach(element => {
        row = document.createElement("tr")
        for (prop in element) {
            cell = document.createElement("td")
            text = document.createTextNode(`${element[prop]}`)
            cell.appendChild(text)
            row.appendChild(cell)
            
        }
        deleteButton = document.createElement("input")
        deleteButton.setAttribute("type", "button")
        deleteButton.setAttribute("onclick", "deleteRow(this)")
        row.appendChild(deleteButton)
        library.appendChild(row)
        myLibrary = []
    })
}

function deleteRow(r) {
    var i = r.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

addButton.addEventListener("click", () => {
    formDisplay.style.display = "block";
})

displayBook(myLibrary)

//form data
document.querySelector("form").addEventListener("submit", (e) => {
    const data = Object.fromEntries(new FormData(e.target).entries())
    myLibrary.push(data)
    document.getElementById("bookDetails").reset()
    formDisplay.style.display = "none"
    displayBook(myLibrary)
})