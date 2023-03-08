const express = require('express');
const apiRouter = express.Router();
const serverApplications = require('../controllers/serverApplications.controller');

apiRouter.post('/applications/create', serverApplications.create);

apiRouter.get('/applications', serverApplications.getAll);

apiRouter.post('/applications/update/:serverId', serverApplications.updateOne);

apiRouter.post('/applications/delete/:serverId', serverApplications.deleteOne);

apiRouter.all('*', function (req, res) {
  res.send('ERROR');
});

module.exports = apiRouter;
