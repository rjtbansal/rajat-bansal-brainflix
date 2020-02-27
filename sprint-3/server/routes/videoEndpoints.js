const express = require('express');
const mainVideoData = require('../data/MainVideos.json');
const sideVideosData = require('../data/SideVideos.json');
const uuid = require('uuid/v1');
const router = express.Router();

router.get('/videos', (req, res) => {
    res.json(sideVideosData);
});

router.post('/videos', (req, res) => {
    let finalResp = req.body;
    finalResp.id = uuid();
    res.json(finalResp);
});

router.get('/videos/:id', (req,res) => {
    const videoId = req.params.id;
    //use find to grab the correct object by id
    res.json(mainVideoData.find(mainVideo => mainVideo.id === videoId));
});

module.exports = router;