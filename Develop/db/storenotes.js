const util = require('util');
const fs = require('fs');

// this is to create unique ids
const uuidv1 = require('uuid/v1');
//allow user to read notes and stringifies them

class StoreNote {
    read() {
        return readFileAsync('db/db.json')
    }
}

// adds unique id

//exports new notes that are stored
module.exports = new StoreNote();
