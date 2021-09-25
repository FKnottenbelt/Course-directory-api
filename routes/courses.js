const express = require('express'); 
const { model } = require('mongoose');
const {
  getCourses,
  } = require('../controllers/courses');

const router = express.Router(); 

router.route('/').get(getCourses);

module.exports = router;