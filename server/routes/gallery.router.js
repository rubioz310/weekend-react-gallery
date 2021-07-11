const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route that increments likes count by 1
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    let count = req.body.like;
    let sqlText = `UPDATE "photos" 
                SET "likes" = "likes" + $1
                WHERE "id" = $2`;
    
    pool.query(sqlText, [count, galleryId])
    .then(result => {
        res.sendStatus(202);
    }).catch(error => {
        console.log("Error liking photo", error);
    })
}); // END PUT Route

// GET Route that gets all photos from the gallery
router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM "photos" ORDER BY "id" ASC'

    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log("Error getting photos.", error);
    })
}); // END GET Route


//POST Route for uploading photo
router.post('/upload', (req, res) => {
    const newPhoto = req.body;
    let sqlText = `INSERT INTO "photos" ("path", "description", likes)
                VALUES ($1, $2, 0)`;
    pool.query(sqlText, [newPhoto.path, newPhoto.description])
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log("Error uploading photo", error);
    })
}); //END POST Route

// DELETE Route that deletes photo
router.delete('/delete/:id', (req, res) => {
    const galleryId = req.params.id;
    let sqlText = `DELETE FROM "photos" 
                WHERE "id" = $1`;
    
    pool.query(sqlText, [galleryId])
    .then(result => {
        res.sendStatus(202);
    }).catch(error => {
        console.log("Error deleting photo", error);
    })
}); // END DELETE Route

module.exports = router;