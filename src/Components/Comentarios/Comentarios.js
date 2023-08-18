import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

import "./Comentarios.css";

const Comentarios = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="container">
      <div className="title-comentarios">
        <span>Comentarios</span>
      </div>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </div>
      <div className="comment-container">
        <CommentForm addComment={addComment} />
      </div>
    </div>
  );
};

export default Comentarios;
