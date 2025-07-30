const express = require('express');
/*const Playersdata = require('../models/Playersdata');*/
const { updateMany, db } = require('../models/Playersdata');
const router = express.Router();
const Players = require('../models/Playersdata');
const mongoose = require('mongoose');
const moment = require('moment');


//GET BACK ALL THE PLAYERS
router.get('/', async (req, res) => {   
    try {
        const players = await Players.find();
        res.json(players);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMITS A PLAYER 
router.post('/', async (req, res) => {
    const newPlayer = new Players({
        name: req.body.name,
        secondName: req.body.secondName,
        jerseyNumber: req.body.jerseyNumber,
        date: req.body.date

    })
    try {
        const savedPlayer = await newPlayer.save();
        
        res.json(savedPlayer);
    } catch (err) {
        res.json({ message: err });
    }
});



// Send attendance
router.post('/:postId', async (req, res) =>{
    const {postId} = req.params;
    console.log('postId :>> ', postId);
    const players = await Players.findById(req.params.postId);
    console.log('players :>> ', players);
    players.attendance.push(req.body);
    console.log('players :>> ', players);
    players.save();
    res.json(players);
   
});

//catches

const attendance = moment();

console.log(attendance);

//specific post
router.get('/:postId', async (req,res)=>{
    try{
    const players = await Players.findById(req.params.postId);
    res.json(players)
    }catch(err){
        res.json({message:Error});
    }
    });

// Update a PLAYER make a funtional app is the only thing tha we have until we finisht th app  
router.patch('/:postId', (req, res) => {

    Players.findOneAndUpdate({_id:req.body._id }, {
        name: req.body.name,
        secondName: req.body.secondName,
        jerseyNumber: req.body.jerseyNumber
    }, (err) => {
        if (!err) {
            res.send('Update player')
        } else {
            res.send(err)
        }
    });
});
 


//delete

 router.delete("/:postId", async (req, res) => {
    try {
      const removePlayer = await Players.deleteOne({ _id: req.params.postId });
      console.log(removePlayer);
      res.json({ message: "Player removed successfully" });
    } catch (err) {
      res.json({ message: err });
    }
  });
  //delete attendance
 router.delete("/:postId/attendance/:attendanceId", async (req, res) => {
  try {
    const playerId = req.params.postId;
    let attendanceId = req.params.attendanceId;

    const player = await Players.findById(playerId);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    let attendanceIndex = player.attendance.findIndex(
      (attendance) => attendance._id == attendanceId
    );

    if (attendanceIndex === -1) {
      return res.status(404).json({ message: "Attendance not found" });
    }

    player.attendance.splice(attendanceIndex, 1);
    await player.save();

    res.json({ message: "Attendance removed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
