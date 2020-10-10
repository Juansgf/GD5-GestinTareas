const db = require("../models");
const Task = db.tutorials;
const Op = db.Sequelize.Op;

// Crear
exports.create = (req, res) => {

    if (!req.body.description) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
      // Crea
      const task = {
        description: req.body.description
         };
    
      // Salva
      Task.create(task)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Task."
          });
        });
};

// Checa todas.
exports.findAll = (req, res) => {
    const description = req.query.description;
    var condition = description ? { description: { [Op.like]: `%${description}%` } } : null;

  Task.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// ID especifica
exports.findOne = (req, res) => {
    const id = req.params.id;

  Task.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Task with id=" + id
      });
    });
};


// Borra especifica
exports.delete = (req, res) => {
    const id = req.params.id;

  Task.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Task with id=" + id
      });
    });
};
