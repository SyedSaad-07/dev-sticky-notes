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
const saveNotes = (notes) => {
  fs.writeJsonSync(NOTES_FILE, notes, { spaces: 2 });
}

/**
 * Add a new note
 */
const addNote = (title, content, tags) => {
  try {
    const notes = loadNotes();
    if (tags && Array.isArray(tags) && tags?.length > 0) {
      notes.push({ id: Date.now(), title, content, tags: tags });
    } else {
      notes.push({ id: Date.now(), title, content });
    }
    saveNotes(notes);
    console.log("✅ Note added successfully");
  } catch (error) {
    console.log("Error adding ");
  }
}
/**
 * List all notes
 */
const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log("❌ No notes found!");
  } else {
    console.log("📌 Your Notes:");
    notes.forEach((note, index) => {
      const tags = (note?.tags)?.length ? `[${note?.tags}]` : `[]`;
      console.log(`${index + 1}. [${note?.title}] - ${note?.content} - ${tags}`);
    });
  }
}

/**
 * Delete a note by title
 */

const deleteNote = (title) => {
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
const searchNotes = (keyword) => {
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

const exportNotesToMarkDown = () => {
  const notes = loadNotes();
  const outputDir = path.join(__dirname, "exported_notes");

  if(!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }

  let markdownContent = '# Exported Notes\n\n';
  notes.forEach( note => {
    const {title, content, tags} = note;
    const formattedTags = tags && Array.isArray(tags) && tags?.length > 0 ? `\n\n**Tags:** ${tags.join(',')}` : '';
    markdownContent += `## ${title}\n\n${content}${formattedTags}\n\n---\n\n`;
  })

  // const safeTitle = title.replace(`/[^a-z0-9]`, '_').toLowerCase();
  const filePath = path.join(outputDir, 'all_notes.md');

  fs.writeFileSync(filePath, markdownContent, 'utf8');
  console.log(`Exported all notes to: , ${filePath}`);
}
module.exports = { addNote, listNotes, deleteNote, searchNotes, exportNotesToMarkDown };
