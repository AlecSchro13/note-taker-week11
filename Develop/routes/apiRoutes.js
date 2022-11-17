const express = require("express");
const router = require('express').Router();
const {v4: uniqueID} = require("uuid");
const fs = require("fs")
const store = require('../utils/fsUtils');

router.get('/notes', (req, res) => {
    store
    
      .readFromFile('./db/db.json')
      .then((data) => res.json(JSON.parse(data)));
})  
  router.get('/notes:id', (req, res) => {
     const Id = req.params.id; 

     const notes = JSON.parse(fs.readFileSync('./db/db.json'));

     for (note of notes) {
        if(Id === note.id) {
            return res.json(note);
        }
     }

     return res.json("note not found");
  });

  router.post('/notes', (req,res) => {
    if (req.body) {
        const {title, text} = req.body;

        const newNotes = {
            id: uniqueID(),
            title,
            text,
        };
        store.readAndAppend(newNotes, "./db/db.json");
        res.json('Notes are added');
    }else{
        res.errored('error');
    }
  });


module.exports = router;