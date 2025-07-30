const mongoose = require('mongoose');
const {Schema, model} = mongoose   

//scheema  
const Attendance = new Schema ({
    
    
    timeOfAttendance:  Date,
    gymAttendance:  String,
    numberOfCatches : Number

 })

 /*const catches = new Schema({
     
    numberOfCatches : Number

})*/

const PlayerSchema = new Schema({
    name:String,
    secondName: String,
    jerseyNumber:Number,
    date:  Date,
    attendance:[Attendance],
    /*catches:[catches]*/
     }
 )
// arreglar todo para enviar el jugador con una imagen 
 module.exports = mongoose.model('Player', PlayerSchema);
     

    





