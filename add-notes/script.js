const addNoteButton = document.getElementById("add-note");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addNoteButton.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button class="edit-note"><i class="fas fa-edit"></i></button>
        <button class="delete-note"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  const editNoteButton = note.querySelector(".edit-note");
  const deleteNoteButton = note.querySelector(".delete-note");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteNoteButton.addEventListener("click", () => {
    note.remove();

    updateLocalStorage();
  });

  editNoteButton.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLocalStorage();
  });

  document.body.appendChild(note);
}

function updateLocalStorage() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
