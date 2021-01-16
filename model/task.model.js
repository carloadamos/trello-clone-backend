const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    description: {
      type: String,
    },

    board_list_id: {
      type: Number
    }
  },
);

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
