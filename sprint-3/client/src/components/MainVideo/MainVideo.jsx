import React from 'react';
import './MainVideo.scss';
import CommentList from '../CommentList/CommentList';
import playButtonIcon from '../../assets/Icons/SVG/Icon-play.svg';
import fullScreenButtonIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';

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
            <div className = "main__video--details">
                <h1> {mainVideo.title} </h1>
                <div className="main__video--div">
                    <div className="main__video--subdiv">
                        <h2 className = "main__video--author"> By {mainVideo.channel} </h2>
                        <p className="main__video--timestamp"> {mainVideo.timestamp} </p>
                    </div>
                    <div className="main__video--subdiv">
                        <img src={viewsIcon} alt="views-icon"/>
                        <p className="main__video--figures"> {mainVideo.views} </p>
                        <img className="likes-icon" src={likesIcon} alt="likes-icon"/>
                        <p className="main__video--figures"> {mainVideo.likes} </p>
                    </div>
                </div>
                <p className="main__video--description"> {mainVideo.description} </p>
                <CommentList comments={mainVideo.comments} />
            </div>
        </section>
    );
    
}

export default MainVideo;