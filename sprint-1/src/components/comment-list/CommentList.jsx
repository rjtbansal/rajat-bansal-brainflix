import React from 'react';
import CommentForm from '../comment-form/CommentForm';
import Comment from '../comment/Comment';

const CommentList = (props) => {
    return(
        <section>
            <h2>{props.comments.length} Comments </h2>
            {/* <CommentForm /> */}
            {
               props.comments.map(comment => <Comment comment={comment} />)
            }
        </section>
    );
}

export default CommentList;