const express = require('express'); 
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius,
    bootcampPhotoUpload
  } = require('../controllers/bootcamps');

const router = express.Router(); 

router.route('/')  
       .get(getBootcamps)  //wants callback function...oeps?
    // .post(createBootcamp);

// router.route('/:id')
//     .get(getBootcamp)
//     .put(updateBootcamp)
//     .delete(deleteBootcamp);

module.exports = router;