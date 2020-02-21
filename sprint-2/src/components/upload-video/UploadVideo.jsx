import React from 'react';
import './UploadVideo.scss';
import uploadVideoImg from '../../assets/Images/upload-video-preview.jpg';

const UploadVideo = () => {

    return (
        <section className="video-upload">
            <h1 className="video-upload__title">Upload Video</h1>
            
            <label htmlFor="thumbnail">VIDEO THUMBNAIL</label>
            <img name="thumbnail" className="video-upload__thumbnail" src={uploadVideoImg}  alt="upload-video" />

            <label htmlFor="video-title">TITLE YOUR VIDEO</label>
            <input name="video-title" type="text" placeholder="Add a title to your video"/>

            <label htmlFor="video-description">ADD A VIDEO DESCRIPTION</label>
            <input type="text" name="video-description" placeholder="Add a description of your video" />

            <button>PUBLISH</button>
            <button>CANCEL</button>
        </section>
    );
}

export default UploadVideo;
