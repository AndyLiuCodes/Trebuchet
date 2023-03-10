const db = require('../db');
const ServerApplication = db.serverApplication;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send('ERROR: No fields were provided');
  }

  const name = req.body.name;
  const description = req.body.description;
  const isTracked = req.body.isTracked;
  const syncFrequency = req.body.syncFrequency;
  const applicationType = req.body.applicationType;
  const customImage = req.body.customImage;
  const url = req.body.url;
  const isFavourite = req.body.isFavourite;
  const position = req.body.position;
  const isCustomImage = req.body.isCustomImage;
  const imagePath = req.body.imagePath;

  if (!name) {
    res.status(422).send('ERROR: name field is empty or invalid');
  }

  if (!url) {
    res.status(422).send('ERROR: url field is empty or invalid');
  }

  if (position < 0) {
    res.status(422).send('ERROR: Position cannot be less than 0.');
  }

  const serverApplication = {
    name: name,
    description: description,
    isTracked: isTracked,
    syncFrequency: syncFrequency,
    applicationType: applicationType,
    customImage: customImage,
    url: url,
    isFavourite: isFavourite,
    position: position,
    isCustomImage: isCustomImage,
    imagePath: imagePath,
  };

  ServerApplication.create(serverApplication)
    .then((dbRes) => res.status(200).send({ id: dbRes.id }))
    .catch((err) => {
      console.error(
        new Date(),
        '- Failed to create a new Server Application',
        err
      );
      res.status(500).send({
        message:
          err.message ||
          'Some error occured while creating a ServerApplication',
      });
    });
};

exports.getAll = (req, res) => {
  ServerApplication.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(new Date(), '- ERROR: Cannot retrieve data from DB', err);
      res.status(500).send({
        message: 'Failed to retrieve all Server Applications',
      });
    });
};

exports.updateOne = (req, res) => {
  const idToUpdate = req.params.serverId;
  if (isNaN(idToUpdate)) {
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

  ServerApplication.update(req.body, {
    where: { id: idToUpdate },
  })
    .then((dbRes) => {
      if (dbRes == 1) {
        res.status(200).send({
          message: `Server Application with ID=${idToUpdate} was successfully updated.`,
        });
      } else {
        res.send({
          message: `Cannot update Server Application with ID=${idToUpdate} for some reason.`,
        });
      }
    })
    .catch((err) => {
      console.error(
        new Date(),
        '- ERROR: Failed to update Server Application - ',
        err
      );
      res.status(500).send({
        message: `ERROR: Failed to update the Application Server with ID=${idToUpdate}`,
      });
    });
};

exports.deleteOne = (req, res) => {
  const idToDelete = req.params.serverId;
  if (isNaN(idToDelete)) {
    res.status(422).send('Wrong data type for server Id');
    return;
  }

  ServerApplication.destroy({
    where: { id: idToDelete },
  })
    .then((dbRes) => {
      if (dbRes == 1) {
        res.status(200).send({
          message: `Server Application with ID=${idToDelete} was successfully deleted.`,
        });
      } else {
        res.send({
          message: `Cannot delete Server Application with ID=${idToDelete} for some reason`,
        });
      }
    })
    .catch((err) => {
      console.error(
        new Date(),
        '- ERROR: Failed to delete Server Application - ',
        err
      );
      res.status(500).send({
        message: `ERROR: Failed to delete the Application Server with ID=${idToDelete}`,
      });
    });
};
