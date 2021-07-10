const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    let sqlText = `UPDATE "photos" 
                SET "likes" = "likes" + 1
                WHERE "id" = $1`;
    
    pool.query(sqlText, [galleryId])
    .then(result => {
        res.sendStatus(202);
    }).catch(error => {
        console.log("Error liking photo", error);
    })
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