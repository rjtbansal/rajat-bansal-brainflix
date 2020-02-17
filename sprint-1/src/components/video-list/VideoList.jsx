import React from 'react';
import './VideoList.scss';

import videoImage0 from '../../assets/Images/video-list-0.jpg';
import videoImage1 from '../../assets/Images/video-list-1.jpg';
import videoImage2 from '../../assets/Images/video-list-2.jpg';
import videoImage3 from '../../assets/Images/video-list-3.jpg';
import videoImage4 from '../../assets/Images/video-list-4.jpg';
import videoImage5 from '../../assets/Images/video-list-5.jpg';
import videoImage6 from '../../assets/Images/video-list-6.jpg';
import videoImage7 from '../../assets/Images/video-list-7.jpg';
import videoImage8 from '../../assets/Images/video-list-8.jpg';

import Video from '../video/Video';
import MainVideo from '../main-video/MainVideo';

class VideoList extends React.Component {

    constructor() {
        super();
        this.state = {
            videos: [
                {
                    id: '0', 
                    title: 'BMX Rampage: 2018 Highlights', 
                    channel: 'Red Cow', 
                    image: videoImage0
                },
                {
                    id: '1', 
                    title: 'Become A Travel Pro In One Easy Lesson...', 
                    channel: 'Scotty Cranmer', 
                    image: videoImage1
                },
                {
                    id: '2', 
                    title: 'Les Houches The Hidden Gem Of The…', 
                    channel: 'Scotty Cranmer', 
                    image: videoImage2
                },
                {
                    id: '3', 
                    title: 'Travel Health Useful Medical Information…', 
                    channel: 'Scotty Cranmer', 
                    image: videoImage3
                },
                {
                    id: '4', 
                    title: 'Cheap Airline Tickets Great Ways To Save', 
                    channel: 'Emily Harper', 
                    image: videoImage4 
                },
                {
                    id: '5', 
                    title: 'Take A Romantic Break In A Boutique Hotel', 
                    channel: 'Ethan Owen', 
                    image: videoImage5 
                },
                {
                    id: '6', 
                    title: 'Choose The Perfect Accommodations', 
                    channel: 'Lydia Perez', 
                    image: videoImage6
                },
                {
                    id: '7', 
                    title: 'Cruising Destination Ideas', 
                    channel: 'Timothy Austin', 
                    image: videoImage7 
                },
                {
                    id: '8', 
                    title: 'Train Travel On Track For Safety', 
                    channel: 'Scotty Cranmer', 
                    image: videoImage8
                }          
            ]
        };
    }
    render() {
        return (
                <>
                    <div className = "main">
                        {
                            this.state.videos
                                       .filter(video => video.id === '0')
                                       .map( video => <MainVideo video= {video} /> ) 
                        }
                    </div>
                    <div className="side-videos">
                     <h4 className="side-videos__heading">NEXT VIDEO</h4>
                    {
                    this.state.videos
                    .filter(video => video.id !== '0') //avoiding first video from side videos
                    .map( 
                        video => <Video video={video} />
                    )
                    }
                    </div>
                </>
        );
    }
}

export default VideoList;


