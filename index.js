const express = require("express");
const app = express();


app.use(express.json());


let rooms = [
	{
		"Room id":1,
        "Room Name": "Yakshini",
		"Number of seats available": 5,
		"amenities in room " : "AC , Water Heater, Tv, Fridge, Washing machine",
		"price for one hour": 500
       
	},
	{
		"Room id":2,
        "Room Name": "Lakshmi",
		"Number of seats available": 3,
		"amenities in room " : "AC , Water Heater, Tv, Fridge, Washing machine, Attached bathroom",
		"price for one hour": 600
       
	},
	{
		"Room id":3,
        "Room Name": "Hamsi",
		"Number of seats available": 3,
		"amenities in room " : " Water Heater, Tv, Fridge, Washing machine, Attached bathroom",
		"price for one hour": 400
       
	},
	{
		"Room id":4,
        "Room Name": "Padmini",
		"Number of seats available": 3,
		"amenities in room " : "Tv, Fridge, Washing machine, Attached bathroom",
		"price for one hour": 300
        
	},
	{
		"Room id":5,
        "Room Name": "Bhamini",
		"Number of seats available": 3,
		"amenities in room " : " Water Heater, Washing machine, Attached bathroom",
		"price for one hour": 400
    
	},
	{
		"Room id":6,
        "Room Name": "Anuragini",
		"Number of seats available": 5,
		"amenities in room " : "AC , Water Heater, Tv, Fridge, Washing machine",
		"price for one hour": 500
       
	},
	{
		"Room id":7,
        "Room Name": "vishala",
		"Number of seats available": 3,
		"amenities in room " : "AC , Water Heater, Tv, Fridge, Washing machine, Attached bathroom",
		"price for one hour": 600
       
	}
]
let customer =  [
	{
	"customer Name":"Gayathri devi",
	"Date":"28.08.2022",
	"start Time" : "1.30 PM",
	"End Time": "4.30 PM",
	"Room id":5,
	"Booked": true
},
	
	{
	"customer Name":"Sugumar",
	"Date":"27.08.2022",
	"start Time" : "4.30 PM",
	"End Time": "6.30 PM",
	"Room id":6,
	"Booked": false
},
	{
	"customer Name":"Rati priya",
	"Date":"23.08.2022",
	"start Time" : "2 PM",
	"End Time": "5 PM",
	"Room id":7,
	"Booked": true

},
	{
	"customer Name":"Malini",
	"Date":"25.08.2022",
	"start Time" : "1.30 PM",
	"End Time": "4.30 PM",
	"Room id":3,
	"Booked": false
},
	{
	"customer Name":"Rambai",
	"Date":"21.08.2022",
	"start Time" : "1.30 PM",
	"End Time": "4.30 PM",
	"Room id":9,
	"Booked": true
}
	
]



// 1) API Endpoint for Creating a Room

app.post("/room",async(req,res) => {

    try {
        rooms.push(req.body)
        res.json("Room created successfully")   
    } catch (error) {
        res.json("error in creating a room",error) 
    }

});



// 2) API Endpoint for booking a room

app.post("/book",async(req,res) => {


    try {
		customer.push(req.body)
        res.json("Room booked successfully");
    } catch (error) {
        res.json("error in booking a room",error)   

    }
});



// 3) API Endpoint to List all rooms with booked data

app.get("/listrooms",(req,res) => {
    try {
        res.json(rooms)
    } catch (error) {
        res.json("Error listing all rooms with booked data",error)
        
    }
})



// 4) API Endpoint to list all customers with booked data

app.get("/listcustomer",(req,res) => {
    try {
        res.json(customer)    
    } catch (error) {
        res.json("Error listing all customers with booked data",error)

        
    }
})



app.listen(process.env.PORT,(error) => {
    if(!error){
        console.log(`server is successfully running on the ${process.env.PORT}`)
    }
    else
        console.log("Error occurred, server can't start", error);
})




