import React from 'react';
import './UploadVideo.scss';
import uploadVideoImg from '../../assets/Images/upload-video-preview.jpg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const UploadVideo = (props) => {

    const handleVideoUpload = (e) => {
        e.preventDefault();

        const videoUploadDetails = {

            title: e.target.videoTitle.value,
            description: e.target.videoDescription.value,
            image: uploadVideoImg
        };

        axios.post('http://localhost:8080/videos', videoUploadDetails)
             .then(res => {
                 //redirect to / page
                 //note it will appear in side videos. Please click on it on the main video
                props.history.push('/');
             })
             .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleVideoUpload} className="video-upload">
            <h1 className="video-upload__title">Upload Video</h1>
            
            <div className="video-upload__mainDiv"> 
                <div className="video-upload__thumbnailDiv">
                    <label htmlFor="thumbnail" className="video-upload__label">VIDEO THUMBNAIL</label>
                    <img name="thumbnail" className="video-upload__thumbnail" src={uploadVideoImg}  alt="upload-video" />
                </div>

                <div className="video-upload__detailsDiv">
                    <label htmlFor="videoTitle" className="video-upload__label">TITLE YOUR VIDEO</label>
                    <input name="videoTitle" className="video-upload__videoTitle video-upload__textInput" type="text" placeholder="Add a title to your video"/>

                    <label htmlFor="videoDescription" className="video-upload__label">ADD A VIDEO DESCRIPTION</label>
                    <textarea cols="30" rows="6" type="text" className="video-upload__videoDescription video-upload__textInput" name="videoDescription" placeholder="Add a description of your video" />
                </div>

            </div>
            <div className="video-upload__borderDiv"></div>
            
            <div className = "video-upload__buttons">
                <button className="video-upload__publishBtn">PUBLISH</button>
                <button className="video-upload__cancelBtn">CANCEL</button>
            </div>
        </form>
    );
}

export default UploadVideo;
