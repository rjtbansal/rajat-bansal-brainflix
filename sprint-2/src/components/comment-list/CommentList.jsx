import React from 'react';
import CommentForm from '../comment-form/CommentForm';
import Comment from '../comment/Comment';
import './CommentList.scss'

const CommentList = (props) => {
    return(
        <section>
            <h2 className="comments__count">{props.comments.length} Comments </h2>
            <CommentForm />
            <div className="comments__displayed">
            {
               props.comments.map(comment => <Comment comment={comment} />)
            }
            </div>
        </section>
    );
}

export default CommentList;