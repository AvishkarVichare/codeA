const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.post('/add',async(req,res)=>{
    const {name,email,phone} = req.body;
    const user =  new User({
        name:name,
        email:email,
        phone:phone
    })

    const savedUser = await user.save();
    console.log("saved")
    res.json(savedUser);

})

router.get('/get',async(req,res)=>{
    const users = await User.find();
    res.json(users);
})

module.exports = router;