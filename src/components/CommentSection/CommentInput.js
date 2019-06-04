import React from './node_modules/react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;