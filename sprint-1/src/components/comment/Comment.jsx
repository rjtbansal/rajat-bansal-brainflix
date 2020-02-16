import React from 'react';
import './Comment.scss';

const Comment = (props) => {

    return (
        <section className="comment">
            <div className="comment__subdiv">
                <div className="comment-author__image"></div>
                <h4 className="comment-author__name"> {props.comment.author} </h4>
                <p className="comment-timestamp"> {props.comment.timestamp}</p>
            </div>
            <p className="comment-text"> {props.comment.description} </p>
        </section>
    );
}

export default Comment;