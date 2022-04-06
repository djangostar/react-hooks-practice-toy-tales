import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(toysArray => setToys(toysArray))
  })

  function handleAddToy(newToy) {
    const newToys = [...toys, newToy]
    setToys(newToys)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDeleteToy(id) {
    const updatedToys = toys.filter((toy => toy.id !== id))
    setToys(updatedToys)
  }

  function handleLikesButton(likedToy) {
    const updatedToys = toys.map((toy) => 
      toy.id === likedToy.id ? likedToy : toy
    );
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys} 
        onDeleteToy={handleDeleteToy}
        onLikedToy={handleLikesButton}
      />
    </>
  );
}

export default App;
