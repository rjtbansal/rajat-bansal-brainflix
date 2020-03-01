import React from 'react';
import axios from 'axios';
import './VideoList.scss';
import Video from '../Video/Video';
import MainVideo from '../MainVideo/MainVideo';
import MainVideoDetails from '../MainVideoDetails/MainVideoDetails';

class VideoList extends React.Component {

    getVideosUrl = 'http://localhost:8080/videos';
    defaultMainVideoId = "1af0jruup5gu";
    getDefaultMainVideoUrl = `http://localhost:8080/videos/${this.defaultMainVideoId}`;

    state = {
        videos: [
        ],
        mainVideo: {

        }
    };

    getAllVideos = () =>  axios.get(this.getVideosUrl);
    
    getMainVideoUrl = id => `http://localhost:8080/videos/${id}`;

    getMainVideo = (id) =>  axios.get(this.getMainVideoUrl(id));
   

    componentDidMount() {
        axios.all([this.getAllVideos(), this.getMainVideo(this.defaultMainVideoId)])
             .then(axios.spread((allVideosRes, mainVideoRes) => {
                this.setState({
                    videos: allVideosRes.data,
                    mainVideo: mainVideoRes.data
                })
             })
             )
             .catch(err => console.log(err));
    }

    componentDidUpdate() {
        const videoId = this.props.match.params.id;
        //ensure that previous state id for mainVideo isnt matching with current video id. Without this check componentDidUpdate gets called infinitely
        (this.state.mainVideo.id !== videoId) && videoId && this.getMainVideo(videoId)
                        .then((mainVideoRes) => {
                            this.setState({
                                mainVideo: mainVideoRes.data
                            })
                        })
                        .catch(err => console.log(err));
    }
    

    render() {          
        if(!this.state.mainVideo.length && !this.state.videos.length){
            return(
                <h2>Loading data.....Please wait</h2>
            );
        }
        return (
                <>
                    {/* <div className = "main"> */}
                    <MainVideo key={this.state.mainVideo.id} video = {this.state.mainVideo} />
                    {/* </div> */}
                    <div className="align-sidevideos-div">
                        <MainVideoDetails mainVideo = {this.state.mainVideo} />
                        <div className="side-videos">
                            <h4 className="side-videos__heading">NEXT VIDEO</h4>
                            {
                            this.state.videos
                            .filter(video => video.id !== (this.props.match.params.id || this.defaultMainVideoId)) //avoiding first video from side videos
                            .map( 
                                video => <Video key={video.id} video={video} />
                            )
                            }
                        </div>
                    </div>
                </>
        );
    }
}

export default VideoList;


