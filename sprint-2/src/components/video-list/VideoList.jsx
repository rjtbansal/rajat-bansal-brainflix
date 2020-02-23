import React from 'react';
import axios from 'axios';
import './VideoList.scss';
import Video from '../video/Video';
import MainVideo from '../main-video/MainVideo';

class VideoList extends React.Component {

    apiKey = "05af670b-f6c4-4da8-b8a8-8346769bdabd";
    getVideosUrl = `https://project-2-api.herokuapp.com/videos?api_key=${this.apiKey}`;
    defaultMainVideoId = "1af0jruup5gu";
    getDefaultMainVideoUrl = `https://project-2-api.herokuapp.com/videos/${this.defaultMainVideoId}?api_key=${this.apiKey}`;

    state = {
        videos: [
        ],
        mainVideo: {

        }
    };

    getAllVideos = () => {
        return axios.get(this.getVideosUrl);
    }

    getMainVideoUrl = id => `https://project-2-api.herokuapp.com/videos/${id}?api_key=${this.apiKey}`

    getMainVideo = (id) => {
        return axios.get(this.getMainVideoUrl(id));
    }

    componentDidMount() {
        axios.all([this.getAllVideos(), this.getMainVideo(this.defaultMainVideoId)])
             .then(axios.spread((allVideosRes, mainVideoRes) => {
                this.setState({
                    videos: allVideosRes.data,
                    mainVideo: mainVideoRes.data
                })
             }));
    }

    componentDidUpdate() {
        const videoId = this.props.match.params.id;
        videoId && this.getMainVideo(videoId)
                        .then((mainVideoRes) => {
                            this.setState({
                                mainVideo: mainVideoRes.data
                            })
                        });
        
    }


    render() {           
        if(!this.state.mainVideo.length && !this.state.videos.length){
            return(
                <h2>Loading data.....Please wait</h2>
            );
        }
        return (
                <>
                    <div className = "main">
                        <MainVideo video = {this.state.mainVideo} />
                    </div>
                    <div className="side-videos">
                     <h4 className="side-videos__heading">NEXT VIDEO</h4>
                    {
                    this.state.videos
                    .filter(video => video.id !== (this.props.match.params.id || this.defaultMainVideoId)) //avoiding first video from side videos
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


