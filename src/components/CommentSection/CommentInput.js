import React from 'react';

const CommentInput = props => {
  return (
    <form className="input"onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
      <button className="post-button" onSubmit={props.submitComment}>Post</button>
    </form>
  );
};

export default CommentInput;