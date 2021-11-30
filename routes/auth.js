const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { generateJwt } = require('../helpers/generateJwt');

const User = require('../models/User');

router.post("/signup", async (req, res) => {
    const { email } = req.body;
    const testEmail = await User.findOne({email});
    if (testEmail) return res.status(500).json({message: "User already exists"});

    const user = new User(req.body);
    try {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(req.body.password, salt);
        user.save();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({message: "Couldn't signup user"});
    }
});


router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(500).json({message: "Please check credentials"});
    
    validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(500).json({message: "Please check credentials"});
    const token = await generateJwt(user._id);
    return res.status(200).json({user, token});
})

module.exports = router;