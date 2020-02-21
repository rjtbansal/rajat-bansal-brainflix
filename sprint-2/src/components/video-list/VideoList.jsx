import React from 'react';
import axios from 'axios';
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

    apiKey = "05af670b-f6c4-4da8-b8a8-8346769bdabd";
    getVideosUrl = `https://project-2-api.herokuapp.com/videos?api_key=${this.apiKey}`;

    state = {
        videos: [
        ]
    };

    componentDidMount() {
        console.log('executed componentDidUpdate');
        axios.get(this.getVideosUrl).then(({data}) => {
            console.log(data);
            this.setState({
                videos: data
            });
        });
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


