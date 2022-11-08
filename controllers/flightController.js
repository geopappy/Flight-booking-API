let flightList = require("../models/Flight.js")
const { v4: uuidv4 } = require('uuid');


exports.getHomePage = (req, res) =>{
    res.send(<h1>Zuri flight REST api</h1>)
}

exports.getAllFlights = (req, res) => {

    try{
        res.status(200).json({
            "success" : true,
            "message" : "All Flights",
            "data" : flightList
        })
    }
    catch(err){
        throw( res.json(500).json({
            "success": false,
            "message" : err
        }))
    }
}
exports.createFlight = (req, res) => {
    try{
        const flightID = uuidv4();
        const flight = req.body
        console.log({...flight,id: flightID})
        flightList.push({...flight, id :flightID})
        
        res.status(201).json({
            "success" : true,
            "message" : "Flight created",
            "data" : {...flight, id : flightID}
        })
    }
    catch(err){
         res.status(500).json({
            "success" : false,
            "message" : err.message
        })
      
    }
    
}
exports.getSingleFlight = async (req, res) => {
    try{
        const {id} = req.params;
        const flight = flightList.find((flight) => flight.id === id)
        console.log("i got the single flight" + flight)

        res.status(200).json({
            "sucess" : "true",
            "message" : "flight fetched",
            "data" : flight
        })
    }
    catch(err){
        res.status(500).json({
            "success" : false,
            "message" : err.message
        })
        throw(err)
    }
    
}

exports.deleteFlight = (req, res) => {
   try {
    const {id} = req.params
    flightList = flightList.filter((flight) => flight.id !== id )
    res.status(200).json({
        "sucsess" : true,
        "message" : `flight with id ${id} deleted`,
        
    })
   } catch (err) {
    res.status(500).json({
        "success" : false,
        "message" : err.message
    })
    throw(err)
}
   
}
exports.updateFlight = (req, res) => {
    

    try {
        const {id} = req.params;
    const payload = req.body
    const flight = flightList.find((flight) => flight.id === id)
    if (payload){
        flight.title = payload.title;
        flight.time = payload.time;
        flight.price = payload.price;
        flight.date = payload.date
    }
    res.status(200).json({
        "success" : "true",
        "message" : "flight upadated !!!"
    })
    } catch (err) {
        res.status(500).json({
            "success" : false,
            "message" : err.message
        })
        throw(err)
    }
    
}
// 

