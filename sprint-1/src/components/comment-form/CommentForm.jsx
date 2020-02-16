import React from 'react';
import profilePic from '../../assets/Images/Mohan-muruge.jpg';

const CommentForm = () => {
    return (
        <form id="comment_form" action="" className="form">
            <img className="author-image" src={profilePic} alt="mohan-muruge" />
            <div className="form__div">
                <label htmlFor="comment" className="form__field--label">Join The Conversation</label>
                <textarea name="comment" placeholder="Write comment here" className="form__field--comment" id="comment" cols="30" rows="6" required></textarea>
            </div>
            <div className="form__div">
                <button id="submit" type="submit" className="form__submit-button">Comment</button>
            </div>
        </form>
    );
}

export default CommentForm;