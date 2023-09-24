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

const Notes = mongoose.models.users || mongoose.model("Notes", notesSchema);

export default Notes;
