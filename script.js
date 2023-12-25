const notesContainer  =  document.querySelector(".notes-container");
const createBtn  =  document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


// When if the data is their in the input fill then this data is store till if we not delete if ->function
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
// here We  are calling again the showNotes function to store the data o the browser
showNotes();


// Here We are adding the loacalStorage
function updateStorage(){
    localStorage.setItem("notes" ,notesContainer.innerHTML);
}



createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});







//Below is the method of Clearing the localStorage 


// Function to remove the "notes" item from localStorage

/*
function clearStorage() {
     localStorage.removeItem("notes");
}
*/

// Call the function to remove "notes" from localStorage


// clearStorage(); 