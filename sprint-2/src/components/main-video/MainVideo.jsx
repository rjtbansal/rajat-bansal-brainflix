import React from 'react';
import './MainVideo.scss';
import CommentList from '../comment-list/CommentList';
import playButtonIcon from '../../assets/Icons/SVG/Icon-play.svg';
import fullScreenButtonIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';

const MainVideo = props => {

    const mainVideo = {
        id: props.video.id,
        title: props.video.title,
        description: `On a gusty day in Southern Utah, a group of 25
        daring mountain bikers blew the doors off what is
        possible on two wheels, unleashing some of the
        biggest moments the sport has ever seen. While
        mother nature only allowed for one full run before
        the conditions made it impossible to ride, that was
        all that was needed for event veteran Kyle Strait,
        who won the event for the second time -- eight years
        after his first Red Cow Rampage title`,
        channel: props.video.channel,
        image: props.video.image,
        views: '1,001,023',
        likes: '110,985',
        duration: '10:30',
        video: 'hd',
        timestamp: '12/18/2018',
        comments: [
            {
                author: 'Micheal Lyons',
                timestamp: '12/18/2018',
                description: `They BLEW the ROOF off at their
                last show, once everyone started
                figuring out they were going. This is
                still simply the greatest opening of a
                concert I have EVER witnessed.`
            },
            {
                author: 'Gary Wong',
                timestamp: '12/18/2018',
                description: `Every time I see him shred I feel so
                motivated to get off my couch and
                hop on my board. He’s so talented! I
                wish I can ride like him one day so I
                can really enjoy myself!`
            },
            {
                author: 'Theodore Duncan',
                timestamp: '11/15/2018',
                description: `How can someone be so good!!!
                You can tell he lives for this and
                loves to do it every day. Everytime I
                see him I feel instantly happy! He’s
                definitely my favorite ever!`
            }

        ] 

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