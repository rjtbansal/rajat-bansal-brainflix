import React from 'react';
import './Video.scss';

const Video = (props) => {
    return (
        <section className="video">
            <img className="video__image" src={props.video.image} alt={`Video: ${props.video.id}`}/>
            <div className= "video__info">
                <h4 className="video__info--title">{props.video.title}</h4>
                <p className="video__info--channel">{props.video.channel}</p>
            </div>
        </section>
    )
}

export default Video;
