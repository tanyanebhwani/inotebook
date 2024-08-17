const express = require('express');
const router = express.Router();
const Faq = require('../models/Faq');
const { body, validationResult } = require('express-validator');
router.post('/faq', [
    body('email', 'Enter valid email').isEmail(),
    body('question', 'Question cannot be blank').exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
    }
    console.log("inside faq");
    const email = req.body.email;
    console.log(email);
    const question = req.body.question;
    console.log(question);
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success:success, errors: errors.array() });
    }
    faq = await Faq.create({
        email: email,
        question: question,
        });
        success = true;
        res.json({success, faq });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
module.exports = router;