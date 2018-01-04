const router = require("express").Router();
const phrasesController = require("../../controllers/phrasesController");

// Matches with "/api/reviews"
router.route("/")
    .get(phrasesController.findAll)
    .post(phrasesController.create);

// Matches with "/api/reviews/:id"
router
    .route("/:id")
    .get(phrasesController.findById)
    .put(phrasesController.update)
    .delete(phrasesController.remove);


module.exports = router;
