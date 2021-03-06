import React from 'react';
import './UploadVideo.scss';
import uploadVideoImg from '../../assets/Images/upload-video-preview.jpg';

const UploadVideo = () => {

    return (
        <section className="video-upload">
            <h1 className="video-upload__title">Upload Video</h1>
            
            <div className="video-upload__mainDiv"> 
                <div className="video-upload__thumbnailDiv">
                    <label htmlFor="thumbnail" className="video-upload__label">VIDEO THUMBNAIL</label>
                    <img name="thumbnail" className="video-upload__thumbnail" src={uploadVideoImg}  alt="upload-video" />
                </div>

                <div className="video-upload__detailsDiv">
                    <label htmlFor="video-title" className="video-upload__label">TITLE YOUR VIDEO</label>
                    <input name="video-title" className="video-upload__videoTitle video-upload__textInput" type="text" placeholder="Add a title to your video"/>

                    <label htmlFor="video-description" className="video-upload__label">ADD A VIDEO DESCRIPTION</label>
                    <textarea cols="30" rows="6" type="text" className="video-upload__videoDescription video-upload__textInput" name="video-description" placeholder="Add a description of your video" />
                </div>

            </div>
            <div className="video-upload__borderDiv"></div>
            
            <div className = "video-upload__buttons">
                <button className="video-upload__publishBtn">PUBLISH</button>
                <button className="video-upload__cancelBtn">CANCEL</button>
            </div>
        </section>
    );
}

export default UploadVideo;
