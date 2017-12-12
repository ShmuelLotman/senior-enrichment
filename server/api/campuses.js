const apiRouter = require('express').Router();
const {Campus} = require('../db/models');

apiRouter.get('/', (req, res, next) => {
	Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
});

apiRouter.get('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

apiRouter.post('/', (req, res, next) => {
    Campus.create(req.body)
    .then(createdCampus => res.json(createdCampus))
    .catch(next);
});

apiRouter.put('/:campusId', (req,res) => {
    const campusId = req.params.campusId;
    Campus.update(req.body, {where: {id: campusId},returning: true})
    .then(data => res.json(data[1]))
})
apiRouter.delete('/:campusId', (req, res, next) => {
    Campus.destroy({where: {id: req.params.campusId}})
    .then(data => data)
    .then(dat => res.json(dat))
    .catch(next);
})


module.exports = apiRouter;