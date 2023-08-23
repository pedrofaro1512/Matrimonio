import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "" && name.trim() !== "") {
      addComment({ name, comment: newComment });
      setName("");
      setNewComment("");
    }
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="Escribe un comentario para lo novios..."
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button type="submit">Agregar comentario</button>
      </form>
    </div>
  );
};

export default CommentForm;
