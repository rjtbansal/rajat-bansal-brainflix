import React from 'react';
import './MainVideoDetails.scss';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';
import CommentList from '../CommentList/CommentList';

const MainVideoDetails = ({mainVideo}) => {
    return (
        <section className = "main__video--details">
                <h1 className="main__video--title"> {mainVideo.title} </h1>
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
            </section>
    );
}

export default MainVideoDetails;