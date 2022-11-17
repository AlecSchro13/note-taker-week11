const express = require("express");
const router = require('express').Router();
const {v4: uuidv4} = require("uuid");
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

  router.post('/notes')


module.exports = router;