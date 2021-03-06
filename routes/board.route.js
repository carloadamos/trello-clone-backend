const router = require('express').Router();
const Board = require('../model/board.model');

router.route('/').get((req, res) => {
  Board.find()
    .then((boards) => res.json(boards))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { board_name } = req.body;
  const board = new Board({
    board_name,
  });

  board
    .save()
    .then(() => res.json('New board added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').put((req, res) => {
  Board.findById(req.params.id).then((board) => {
    board.title = req.body.title;
    board.list = req.body.list;

    board
      .save()
      .then(() => res.json('Board updated'))
      .catch((err) => res.status(400).json(`Error : ${err}`));
  });
});

router.route('/:id').delete((req, res) => {
  Board.findByIdAndDelete(req.params.id)
    .then(() => res.json('Board deleted'))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

router.route('/').delete((req, res) => {
  Board.deleteMany()
    .then(() => res.json('All board deleted'))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

module.exports = router;
