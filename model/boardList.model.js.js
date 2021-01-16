const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardListSchema = new Schema(
  {
    board_list_name: {
      type: String,
    },

    tasks: {
      type: [Schema.Types.Task],
    }
  },
);

const BoardList = mongoose.model('BoardList', BoardListSchema);
module.exports = BoardList;
