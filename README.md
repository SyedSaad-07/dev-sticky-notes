# 📝 Sticky Notes CLI  

A **simple CLI tool** to manage sticky notes. You can also **use it as a module in your Node.js code**.

## 📌 Features  
- ✅ Add, list, delete, search notes, and exporting notes  
- ✅ Use via **CLI** or **directly in your code**  
- ✅ Lightweight and easy to use  

---

## 🚀 Installation  
npm i dev-sticky-notes

---

## 📖 Usage
Once installed, you can use the following commands in your terminal:
✅ Add a new note with tags (tags is optional):
npx sticky-notes add "Meeting" "Discuss project updates" --tags work urgent

✅ List all notes:
npx sticky-notes list

✅ Delete a note by title:
npx sticky-notes delete "Meeting"

✅ Search notes by keyword:
npx sticky-notes search "project"

✅ Export notes as .md file:
npx sticky-notes export

---

## 📦 Using as a Module
You can also use this package inside your Node.js project:

const { addNote, listNotes, deleteNote, searchNotes, exportNotesToMarkDown } = require("dev-sticky-notes");

addNote("Meeting", "Discuss project updates", ["work", "urgent"]);
or
addNote("Meeting", "Discuss project updates");

listNotes();

deleteNote("Meeting");

searchNotes("project");

exportNotesToMarkDown();

## 🌟 Contributing

Want to improve this project? Feel free to open an issue or submit a pull request.

1) Fork the repository
2) Create a new branch (git checkout -b feature-branch)
3) Commit your changes (git commit -m 'Add new feature')
4) Push to the branch (git push origin feature-branch)
5) Open a Pull Request.

## 📧 Contact
For any queries or suggestions, feel free to reach out!
📩 Email: syed.07saad@gmail.com
📦 npm: dev-sticky-notes