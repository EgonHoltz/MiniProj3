const express = require('express');
let router = express.Router();
const SpecialistController = require('../controllers/specialist.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get(AuthController.checkAuth, SpecialistController.get)
    .post(AuthController.checkAuth, [
        body('name').isString(),
        body('contact').isString(),
        body('group').isString(),
        body('yearSpecializationStart').isInt()
    ], SpecialistController.create);

router.route('/:id')
    .get(AuthController.checkAuth, [param("id").isMongoId()], SpecialistController.getOne)
    .put(AuthController.checkAuth, [param("id").isMongoId()], SpecialistController.update)
    .delete(AuthController.checkAuth, [param("id").isMongoId()], SpecialistController.delete);

module.exports = router;