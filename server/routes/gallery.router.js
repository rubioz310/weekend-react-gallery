const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// Get all photos from the gallery
router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM "photos" ORDER BY "id" ASC'

    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log("Error getting photos.", error);
    })
}); // END GET Route

module.exports = router;