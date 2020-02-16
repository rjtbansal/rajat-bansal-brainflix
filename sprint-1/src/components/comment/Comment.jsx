import React from 'react';

const Comment = (props) => {

    return (
        <section>
            <div>Random Image</div>
            <h3> {props.comment.author} </h3>
            <p> {props.comment.timestamp}</p>
            <p> {props.comment.description} </p>
        </section>
    );
}

export default Comment;