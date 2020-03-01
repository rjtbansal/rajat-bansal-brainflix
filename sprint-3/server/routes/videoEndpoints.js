const express = require('express');
const mainVideoData = require('../data/MainVideos.json');
const sideVideosData = require('../data/SideVideos.json');
const uuid = require('uuid/v1');
const router = express.Router();

router.get('/videos', (req, res) => {
    res.json(sideVideosData);
});

router.post('/videos', (req, res) => {
    //seperate out variables to push relevant properties to main and side videos
    const finalResp = req.body;    
    finalResp.id = uuid();
    //hardcoding main video details not available in upload form
    finalResp.channel = "Rajat B";
    finalResp.views = "200";
    finalResp.likes = "300,000";
    finalResp.duration = "4:01";
    finalResp.timestamp = new Date().toLocaleDateString();
    //lazy way to hardcode comments since they are all same
    finalResp.comments = mainVideoData[0].comments;
    mainVideoData.push(finalResp);

    const sideVideoData = {
        id: finalResp.id,
        title: finalResp.title,
        description: finalResp.description,
        channel: finalResp.channel,
        image: finalResp.image
    }
    sideVideosData.push(sideVideoData);
    res.status(201).send('Data Added Successfully');
});

router.get('/videos/:id', (req,res) => {
    const videoId = req.params.id;
    //use find to grab the correct object by id
    res.json(mainVideoData.find(mainVideo => mainVideo.id === videoId));
});

module.exports = router;