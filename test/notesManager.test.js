const {expect} = require("chai");
const { addNote, listNotes, deleteNote, searchNotes } = require("../src/notesManager");

describe("Sticky Notes Manager", () => {
    it("Should add a note", () => {
        addNote("Test Note", "This is a test");
        const notes = require("fs-extra").readJsonSync("../data/notes.json");
        expect(notes.some(n => n.title === "Test Note")).to.be.true;
    });

    it("should delete a note", () => {
        deleteNote("Test Note");
        const notes = require("fs-extra").readJsonSync("../data/notes.json");
        expect(notes.some(n => n.title === "Test Note")).to.be.false;
    });
})