import React from 'react';
import CommentForm from '../CommentForm/CommentForm';
import Comment from '../Comment/Comment';
import './CommentList.scss'

const CommentList = (props) => {
    return(
        <section>
            <h2 className="comments__count">{props.comments.length} Comments </h2>
            <CommentForm />
            <div className="comments__displayed">
            {
               props.comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
            </div>
        </section>
    );
}

export default CommentList;