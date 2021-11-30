const express = require('express');
const Turn = require('../models/Turn');
const router = express.Router();

router.get("/", async (req, res) => {
    const turns = await Turn.find();
    try {
        return res.status(200).json(turns);
    } catch (error) {
        return res.status(500).json({message: "Couldn't get turns"});
    }
});

router.post("/turn", async (req, res) => {
    const turn = await Turn.create(req.body);
    try {
        return res.status(201).json(turn);
    } catch (error) {
        return res.status(500).json({message: "Couldn't create the turn"});
    }
})

router.delete("/turn/:id", async (req, res) => {
    const { id } = req.params;
    const turnToDelete = await  Turn.findOneAndDelete(id);
    try {
        return res.status(203).json({message: "Turn succesfully deleted"});
    } catch (error) {
        return res.status(500).json({message: "Couldn't delete turn"});
    }
})

module.exports = router;