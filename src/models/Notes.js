const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  notesTitle: {
    type: String,
    required: true,
  },
  notesDescription: {
    type: String,
    required: true,
  },
  selectedFileName: {
    type: String,
  },
});

const Notes = mongoose.models.notes || mongoose.model("notes", notesSchema);

export default Notes;
