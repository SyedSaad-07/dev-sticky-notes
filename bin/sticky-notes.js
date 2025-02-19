#!/usr/bin/env node

const {program} = require("commander");
const { addNote, listNotes, deleteNote, searchNotes } = require("../src/notesManager");

program
    .version("1.0.0")
    .description("📌 Sticky Notes for Developers")

program
    .command("add <title> <content>")
    .description("Add a new sticky note")
    .action(addNote)

program
    .command("list")
    .description("List all sticky notes")
    .action(listNotes);

program
    .command("delete <title>")
    .description("Delete a sticky note by title")
    .action(deleteNote);

program
    .command("search <keyword>")
    .description("Search notes by keyword")
    .action(searchNotes);

program.parse(process.argv);