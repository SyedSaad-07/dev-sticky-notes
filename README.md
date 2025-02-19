# 📝 Sticky Notes CLI  

A **simple CLI tool** to manage sticky notes. You can also **use it as a module in your Node.js code**.

## 📌 Features  
- ✅ Add, list, delete, and search notes  
- ✅ Use via **CLI** or **directly in your code**  
- ✅ Lightweight and easy to use  

---

## 🚀 Installation  
npm i dev-sticky-notes

---

## 📖 Usage
Once installed, you can use the following commands in your terminal:
✅ Add a new note:
sticky-notes add "Meeting" "Discuss project updates"

✅ List all notes:
sticky-notes list

✅ Delete a note by title:
sticky-notes delete "Meeting"

✅ Search notes by keyword:
sticky-notes search "project"

---

## 📦 Using as a Module
You can also use this package inside your Node.js project:

const { addNote, listNotes, deleteNote, searchNotes } = require("dev-sticky-notes");

// Add a new note
addNote("Meeting", "Discuss project updates");

// List all notes
listNotes();

// Delete a note
deleteNote("Meeting");

// Search for a note
searchNotes("project");

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