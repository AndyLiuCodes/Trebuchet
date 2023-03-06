import express from 'express';
import { executeQuery, executeQueryWithValues } from '../utils/db.js';
const apiRouter = express.Router();

apiRouter.post('/applications/create', function (req, res) {
  const name = req.body.name;
  const description = req.body.description;
  const isTracked = req.body.is_tracked;
  const syncFrequency = req.body.sync_frequency;
  const applicationType = req.body.application_type;
  const serverImage = req.body.server_image;
  const url = req.body.url;
  const isFavourite = req.body.is_favourite;
  const position = req.body.position;
  const databaseFields = Object.keys(req.body).join(', ');
  const databaseValues = [
    name,
    description,
    isTracked,
    syncFrequency,
    applicationType,
    serverImage,
    url,
    isFavourite,
    position,
  ];

  if (!req.body) {
    res.status(400).send('ERROR: No fields were provided');
  }
  if (!name) {
    res.status(422).send('ERROR: name field is empty or invalid');
  }

  if (!url) {
    res.status(422).send('ERROR: url field is empty or invalid');
  }

  if (position < 0) {
    res.status(422).send('ERROR: Position cannot be less than 0.');
  }

  const query = `INSERT INTO Servers (${databaseFields}) VALUES (?)`;
  executeQueryWithValues(query, [databaseValues], function (err, dbRes) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    res.status(200).send({ id: dbRes.data.insertId });
  });
});

apiRouter.get('/applications', function (req, res) {
  executeQuery('SELECT * from Servers', function (err, data) {
    if (err) {
      console.error(new Date(), 'ERROR: Cannot retrieve data from DB', err);
      throw err;
    }

    res.status(200).send(data);
  });
});

apiRouter.post('/applications/update/:serverId', function (req, res) {
  const idToDelete = req.params.serverId;
  if (isNaN(idToDelete)) {
    res.status(422).send('Wrong data type for server Id');
  }

  const name = req.body.name;
  const url = req.body.url;
  const position = req.body.position;

  if (!req.body) {
    res.status(400).send('ERROR: No fields were provided.');
    return;
  }
  if (!name) {
    res.status(422).send('ERROR: Name field is empty or invalid.');
    return;
  }

  if (!url) {
    res.status(422).send('ERROR: URL field is empty or invalid.');
    return;
  }

  if (position < 0) {
    res.status(422).send('ERROR: Position cannot be less than 0.');
  }

  const query = 'UPDATE Servers SET ? WHERE id=?';
  executeQueryWithValues(query, [req.body, idToDelete], function (err, _) {
    if (err) {
      res.status(400).send(err);
      throw err;
    }
    res.status(200).send('Application updated!');
  });
});

apiRouter.post('/applications/delete/:serverId', function (req, res) {
  const idToDelete = req.params.serverId;
  if (isNaN(idToDelete)) {
    res.status(422).send('Wrong data type for server Id');
    return;
  }

  const query = `DELETE FROM Servers WHERE id=${idToDelete}`;
  executeQuery(query, function (err, data) {
    if (err) {
      console.error(err);
      res.status(400).send('Failed to delete the application');
      throw err;
    }
    res.status(200).send('Application was successfully deleted.');
  });
});

apiRouter.all('*', function (req, res) {
  res.send('ERROR');
});

export default apiRouter;
