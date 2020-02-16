import React from 'react';
import './Video.scss';

const Video = (props) => {
    return (
        <section className="video">
            <h2>{props.video.title}</h2>
            <h3>{props.video.channel}</h3>
            <img className="video__image" src={props.video.image} alt={`Video: ${props.video.id}`}/>
        </section>
    )
}

export default Video;
