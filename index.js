
const notesContainer = document.querySelector(".notes-container"); // Container for notes

function addNote() {
    let input = document.createElement("p");
    const img = document.createElement("img");
    img.src = "images/DelIcon.png";
    input.className = "notes";
    input.setAttribute("contenteditable", "true");
    notesContainer.appendChild(input).appendChild(img);
    img.addEventListener("click", () => {
        input.remove();
    });
};

