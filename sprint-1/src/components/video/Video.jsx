import React from 'react';
import './Video.scss';

class Video extends React.Component {
    render() {
        return (
            <section className="video">
                <h2>{this.props.video.title}</h2>
                <h3>{this.props.video.channel}</h3>
                <img className="video__image" src={this.props.video.image} alt={`Video: ${this.props.video.id}`}/>
            </section>
        )
    }
}

export default Video;
