const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { body, validationResult } = require('express-validator');
router.post('/contact', [
    body('name', 'name cannot be blank').exists(),
    body('email', 'Enter valid email').isEmail(),
    body('subject', 'subject cannot be blank').exists(),
    body('message', 'message cannot be blank').exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
    }
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success:success, errors: errors.array() });
    }
    contact = await Contact.create({
        name: name,
        email: email,
        subject: subject,
        message: message
        });
        success = true;
        res.json({success, contact });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
module.exports = router;