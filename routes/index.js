const router = require("express").Router();
const dataController = require("../controllers/dataController.js");

router
  .route("/")
  .get(dataController.findAll)
  .post(dataController.create);

router
  .route("/:id")
  .get(dataController.findById)
  .put(dataController.update)
  .delete(dataController.remove);

module.exports = router;
