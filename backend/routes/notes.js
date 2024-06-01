const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
//Route 1:Get logged in user details using: POST "/api/notes/fetchallnotes".Login Required
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    let success = false;
   try {
      const notes = await Notes.find({ user: req.user.id });
      success = true;
      res.json(success,notes);
   } catch (error) {
      res.status(500).send("Internal server error");
   }
})
// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchUser, [
   body('title', 'Enter a valid title').isLength({ min: 3 }),
   body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
   body('tag')], async (req, res) => {
    let success = false;
       try {
           const { title, description, tag } = req.body;
           // If there are errors, return Bad request and the errors
           const errors = validationResult(req);
           if (!errors.isEmpty()) {
               return res.status(400).json({success,errors: errors.array() });
           }
           const note = new Notes({
               title, description, tag, user: req.user.id
           })
           const savedNote = await note.save()
           success = true;
           res.json({success,savedNote});
       } catch (error) {
           console.error(error.message);
           res.status(500).send("Internal Server Error");
       }
   })
   // ROUTE 3: Update Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    let success = false;
        try {
            const { title, description, tag } = req.body;
            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({success, errors: errors.array() });
            }
            const newNote = {};
            if(title)
                {
                    newNote.title = title;
                }
            if(description)
                {
                    newNote.description = description;
                }
            if(tag)
                {
                    newNote.tag = tag;
                }
            //check the note to be updated and update it
            let note = await Notes.findById(req.params.id);
            if(!note)
                {
                    return res.status(404).send("Not Found");
                }
            if(note.user.toString()!==req.user.id)
                {
                    return res.status(401).send("Not Allowed");
                }
                note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
                success = true;
                res.json({success,note});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
// ROUTE 4: Delete Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    let success = false;
    try {
        const { title, description, tag } = req.body;
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array() });
        }
        //find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if(!note)
            {
                return res.status(404).send("Not Found");
            }
        //allow deletion only of user owns this note.
        if(note.user.toString()!==req.user.id)
            {
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndDelete(req.params.id);
            success = true;
            res.json({success,note:note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
