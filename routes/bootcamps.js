const express = require('express'); // koppel aan express
const router = express.Router(); 

router.get('/', (req, res) => {
    res.status(200).json({ succes: true, msg: 'Show all bootcamps' });
  });
  
router.get('/:id', (req, res) => {
    res.status(200).json({ succes: true, msg: `Show single bootcamp ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(200).json({ succes: true, msg: 'Create new bootcamp' });
});

router.put('/:id', (req, res) => {
res.status(200).json({ succes: true, msg: `Update bootcamp ${req.params.id}` });
});  

router.delete('/:id', (req, res) => {
    res.status(200).json({ succes: true, msg: `Delete bootcamp ${req.params.id}` });
});
  
module.exports = router;