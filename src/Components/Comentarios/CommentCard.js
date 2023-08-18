// CommentCard.js
import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <h3>{comment.name}</h3>
      <p>{comment.comment}</p>
    </div>
  );
};

export default CommentCard;
