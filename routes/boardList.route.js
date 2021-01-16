const router = require('express').Router();
const BoardList = require('../model/boardList.model.js');

router.route('/').get((req, res) => {
  BoardList.find()
    .then((lists) => res.json(lists))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { board_list_name } = req.body;
  const newList = new BoardList({
    board_list_name,
  });

  newList
    .save()
    .then(() => res.json('List added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').put((req, res) => {
  BoardList.findById(req.params.id).then((taskList) => {
    taskList.title = req.body.title;
    taskList.tasks = req.body.tasks;

    taskList
      .save()
      .then(() => res.json('Task list updated'))
      .catch((err) => res.status(400).json(`Error : ${err}`));
  });
});

router.route('/:id').delete((req, res) => {
  BoardList.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task list deleted'))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

router.route('/').delete((req, res) => {
  BoardList.deleteMany()
    .then(() => res.json('All task list deleted'))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

module.exports = router;
