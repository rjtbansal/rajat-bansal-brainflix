import React from 'react';
import './MainVideo.scss';
// import MainVideoDetails from '../MainVideoDetails/MainVideoDetails';
import playButtonIcon from '../../assets/Icons/SVG/Icon-play.svg';
import fullScreenButtonIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';


const MainVideo = props => {
    
    let mainVideo = {
        id: props.video.id,
        title: props.video.title,
        description: props.video.description,
        channel: props.video.channel,
        image: props.video.image,
        views: props.video.views,
        likes: props.video.likes,
        duration: props.video.duration,
        video: props.video.video,
        timestamp: new Date(props.video.timestamp).toLocaleDateString(),
        comments: props.video.comments
    };

    return (
        <>
        <section className="main__video">
            <video className="main__video--image" poster={mainVideo.image}>
            </video>
            <div className="main__video--controls">
                <img className="main__video--icon" src={playButtonIcon}  alt="play-button"/>
                <div className="hr-background">
                    <hr className = "main__video--scroll"/>
                    <span className="hr-background__timer">0:00/0:42</span>
                </div>
                <div className="main__video--icon">
                    <img className="main__video--rightIcon" src={fullScreenButtonIcon}  alt="play-button"/>
                    <img className="main__video--rightIcon" src={volumeIcon}  alt="play-button"/>
                </div>
            </div>
        </section>
        {/* <MainVideoDetails mainVideo = {mainVideo} /> */}
        </>
    );
}

export default MainVideo;