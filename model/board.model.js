const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema(
  {
    board_name: {
      type: String
    },

    board_list: {
      type: [Schema.Types.BoardList]
    }
  },
);

const Board = mongoose.model('Board', BoardSchema);
module.exports = Board;
