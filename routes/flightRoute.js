const express = require('express');

const router = express.Router();
const {getAllFlights, createFlight, getSingleFlight, deleteFlight,updateFlight, getHomePage} = require('../controllers/flightController');

router.get("/", getHomePage)
router.get('/flights', getAllFlights);
router.post('/flights/create', createFlight);
router.get('/flights/:id', getSingleFlight);
router.delete('/flights/:id', deleteFlight);
router.patch('/flights/:id', updateFlight);


module.exports = router;

