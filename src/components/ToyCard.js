import React from "react";

function ToyCard({ toy, onDeleteToy, onLikedToy }) {
  const { id, name, image, likes} = toy

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })

    onDeleteToy(id)
  }

  function handleLikeButton(e) {
    e.preventDefault()
    const updatedLikes = {
      likes: toy.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedLikes)
    })
    .then((res) => res.json())
    .then(onLikedToy)
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"onClick={handleLikeButton}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
