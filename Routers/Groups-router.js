const express = require("express");
const router = express.Router();

const GroupsCtrl = require("../controllers/Groups-controllers");

//POST METHODS
router.post("/Groups-create", GroupsCtrl.createGroups);

//GET METHODS
router.get("/Groups", GroupsCtrl.getAllGroups);
router.get("/Groups/:id", GroupsCtrl.getOneGroups);

//DELETE METHODS
router.delete("/Groups-delete/:id", GroupsCtrl.deleteGroups);

module.exports = router;