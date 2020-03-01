import React from 'react';
import profilePic from '../../assets/Images/Mohan-muruge.jpg';
import './CommentForm.scss';

const CommentForm = () => {
    return (
        <div className="comment-form-div">
            <img className="author-image" src={profilePic} alt="mohan-muruge" />
            <form className="form">
                <div className="form__div">
                    <label htmlFor="comment" className="form__label">JOIN THE CONVERSATION</label>
                    <textarea className="form__textarea" name="comment" placeholder="Write comment here" id="comment" cols="30" rows="6" required></textarea>
                </div>
                <div className="form__div">
                    <button id="submit" type="submit" className="form__submit-button">Comment</button>
                </div>
            </form>
        </div>
    );
    
}

export default CommentForm;