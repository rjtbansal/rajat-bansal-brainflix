import React from 'react';
import './MainVideo.scss';
import CommentList from '../comment-list/CommentList';

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
                <img className="main__video--image" src={mainVideo.image} alt={`Video: ${mainVideo.id}`} />
                <h1> {mainVideo.title} </h1>
                <h2> By {mainVideo.channel} </h2>
                <p> {mainVideo.timestamp} </p>
                <p> {mainVideo.views} </p>
                <p> {mainVideo.likes} </p>
                <p> {mainVideo.description} </p>
                {/* add CommentList component reference here */}
                <CommentList comments={mainVideo.comments} />
            </section>
    );
}

export default MainVideo;