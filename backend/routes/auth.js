const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
router.use(express.json());
const fetchUser = require('../middleware/fetchUser');
var jwt = require('jsonwebtoken');
const JWT_SECRET = "1ab6712";
//Route 1:Create a user using: POST "/api/auth/createUser". Doesn't require auth
router.post('/createUser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success:success, errors: errors.array() });
    }
    //check whether user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success,error: "Sorry!A user with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
})

//Route 2:Authenticate a user using: POST "/api/auth/login".
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password cannot be blank').exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
    }
    const email = req.body.email;
    const password = req.body.password;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success,error: "Please try to login with correct credentials" })
        }
        console.log(user.password);
        const passwordCompare = bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success,error: "Please try to login with correct credentials" });
        }
        const payload = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(payload, JWT_SECRET);
        success = true;
        res.json({ success,authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
//Route 3:Get logged in user details using: POST "/api/auth/getUser".Login Required
router.post('/getUser',fetchUser, async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
    }
    try {
        const userId = req.user.id;
        console.log(userId);
        const user = await User.findById(userId).select("-password");
        success = true;
        res.send({success,user});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }

})
module.exports = router;