const express = require("express");
const router = express.Router();

const GroupsCtrl = require("../controllers/Groups-controllers");



router.post("/Groups-create", GroupsCtrl.createGroups);
router.get("/Groups", GroupsCtrl.getAllGroups);
router.get("/Groups/:id", GroupsCtrl.getOneGroups);

module.exports = router;