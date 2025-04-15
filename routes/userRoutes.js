const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');
const { authorizeAdmin } = require('../middleware/roleMiddleware');

router.use(authenticate);

router.get('/', authorizeAdmin, userController.getAllUsers); // admin only
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', authorizeAdmin, userController.deleteUser); // admin only

module.exports = router;
