const fs = require("fs-extra");
const path = require("path");

const NOTES_FILE = path.join(__dirname, "../data/notes.json");

/**
 * Load notes from JSON file.
 */

function loadNotes() {
  try {
    if (!fs.existsSync(NOTES_FILE)) {
      fs.writeFileSync(NOTES_FILE, "[]");
    }
    const notes = fs.readJsonSync(NOTES_FILE);
    return Array.isArray(notes) ? notes : [];
  } catch (error) {
    console.error(
      "Error reading notes.json. Initializing with an empty array."
    );
    fs.writeFileSync(NOTES_FILE, "[]"); // Reset if corrupted
    return [];
  }
}

/**
 * Save notes to the JSON file
 */
function saveNotes(notes) {
  fs.writeJsonSync(NOTES_FILE, notes, { spaces: 2 });
}

/**
 * Add a new note
 */
function addNote(title, content) {
  const notes = loadNotes();
  notes.push({ id: Date.now(), title, content });
  saveNotes(notes);
  console.log("✅ Note added successfully");
}
/**
 * List all notes
 */
function listNotes() {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log("❌ No notes found!");
  } else {
    console.log("📌 Your Notes:");
    notes.forEach((note, index) => {
      console.log(`${index + 1}. [${note?.title}] - ${note?.content}`);
    });
  }
}

/**
 * Delete a note by title
 */

function deleteNote(title) {
  let notes = loadNotes();
  const filteredNotes = notes?.filter((note) => note.title !== title);
  if (notes?.length === filteredNotes?.length) {
    console.log(`❌ No note found with title "${title}"`);
  } else {
    saveNotes(filteredNotes);
    console.log(`✅ Note titled "${title}" deleted!`);
  }
}

/**
 * Search notes by keyword
 */
function searchNotes(keyword) {
  const notes = loadNotes();
  const results = notes.filter(
    (note) => note.title.includes(keyword) || notes?.content.includes(keyword)
  );
  if (results.length === 0) {
    console.log(`❌ No notes found matching "${keyword}"`);
  } else {
    console.log(`🔍 Found ${results.length} note(s) matching "${keyword}":`);
    results.forEach((note) => {
      console.log(`📌 [${note.title}] - ${note.content}`);
    });
  }
}
module.exports = { addNote, listNotes, deleteNote, searchNotes };
