const root = document.querySelector("section#root");
const book1 = new Book(1,"title","author","192","readed");
const book2 = new Book(2,"Kamienie na szaniec","Aleksander Kamiński","240","readed");
const book3 = new Book(3,"Krzyżacy","Hernyk Sienkiewicz","638","not-readed");

function Book(id, title, author, numberOfPages, isReaded){
    this.id = id;
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isReaded = isReaded;
    this.info = function(){
        let returned = `${this.title} by ${this.title}, ${this.numberOfPages} pages, ${this.isReaded}`;
        return returned;
    }
}
let myDivs = [];
let myLibrary = [book1, book2, book3];
function addBookToLibrary(){
    let id = Math.random()*100000;
    let book = new Book(id,title,author,numberOfPages,isReaded);
    myLibrary.push(book);
}
myLibrary.forEach(element => {
    let div = document.createElement("section");
    div.classList.add("book");
    div.classList.add("id-"+element.id);
    createHeader(div, element.title);
    createContent(div, element.author, element.numberOfPages, element.isReaded, element.id);
    root.appendChild(div);
});

function createHeader(div, title){
    let header = document.createElement("section");
    header.classList.add("header");
    header.textContent = title;
    div.appendChild(header);
}
function createContent(div, author, numberOfPages, status, id){
    let content =document.createElement("section");
    content.classList.add("content");
    content.innerHTML = `Author: ${author}<br> Number of Pages: ${numberOfPages}<br>`;
    createRemoveButton(content, id);
    createStatusButton(content,status);
    div.appendChild(content);
}
function createRemoveButton(parent, id){
    let button = document.createElement("button");
    button.classList.add("remove");
    button.setAttribute("id",id)
    button.textContent = "remove";
    parent.appendChild(button);
}
function createStatusButton(parent, status){
    let button = document.createElement("button");
    if(status=="readed"){
        button.classList.add("readed");
        button.textContent = "readed";
    }
    else{
        button.classList.add("not-readed");
        button.textContent = "not readed";
    }
    parent.appendChild(button);
}
function generateCopyright(){
    const footerParagraph = document.querySelector("p#copyright");
    const year = new Date().getFullYear();
    footerParagraph.textContent = "BBUTTER98 Copyright © "+year;
}

generateCopyright();
const remove = document.querySelectorAll("button.remove");
remove.forEach(element =>{
    element.addEventListener("click",function(){
        myLibrary.forEach(element => {
            if(element.id == this.id){
                let index = myLibrary.indexOf(element);
                myLibrary.splice(index,1);
                let container = document.querySelector("section.id-"+this.id);
                root.removeChild(container);
            }
        });
    });
});
