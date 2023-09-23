const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

const Notes = mongoose.models.users || mongoose.model("Notes", notesSchema);

export default Notes;
