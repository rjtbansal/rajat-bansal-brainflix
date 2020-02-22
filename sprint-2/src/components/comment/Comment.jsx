import React from 'react';
import './Comment.scss';

const Comment = (props) => {
    return (
        <section className="comment">
            <div className="comment__subdiv">
                <div className="comment-author__image"></div>
                <h4 className="comment-author__name"> {props.comment.name} </h4>
                <p className="comment-timestamp"> { new Date(props.comment.timestamp).toLocaleDateString()}</p>
            </div>
            <p className="comment-text"> {props.comment.comment} </p>
        </section>
    );
}

export default Comment;