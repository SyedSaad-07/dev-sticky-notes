#!/usr/bin/env node

const {program} = require("commander");
const { addNote, listNotes, deleteNote, searchNotes, exportNotesToMarkDown } = require("../src/notesManager");

program
    .version("2.0.1")
    .description("📌 Sticky Notes for Developers")

program
    .command("add <title> <content>")
    .description("Add a new sticky note")
    .option("--tags <tags...>","Comma separated list of tags", [])
    .action((title, content, options) => {
        addNote(title, content, options?.tags)
    })

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

program
    .command("export")
    .description("Export all notes to Markdown files")
    .action(exportNotesToMarkDown)
program.parse(process.argv);