const apiRouter = require('express').Router();
const {Student} = require('../db/models');

apiRouter.get('/', (req, res, next) => {
	Student.findAll()
    .then(students => res.json(students))
    .catch(next)
});

apiRouter.get('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});

apiRouter.post('/', (req, res, next) => {
    Student.create(req.body)
    .then(createdStudent => res.json(createdStudent))
    .catch(next);
});
apiRouter.put('/:studentId', (req,res, next) => {
    const studentId = req.params.studentId;
    console.log('BODY', req.body)
    Student.update(req.body, {where: {id: studentId},returning: true})
    .then(data => res.json(data[1]))

    .catch(next)
})
apiRouter.delete('/:studentId', (req, res, next) => {
    console.log(req.body)
    Student.destroy({where: {id: req.params.studentId}})
    .then(numRows => res.json(numRows))
    .catch(next)
})

module.exports = apiRouter;