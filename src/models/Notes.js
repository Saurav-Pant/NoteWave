const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  notesTitle: {
    type: String,
    required: true,
  },
  notesDescription: {
    type: String,
    required: true,
  },
  fileLink: {
    type: String,
    required: true,
  },
});

const Notes = mongoose.models.Notes || mongoose.model("Notes", notesSchema);

export default Notes;
