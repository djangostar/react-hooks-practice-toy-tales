import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, onDeleteToy, onLikedToy }) {
  return (
    <div id="toy-collection">{toys.map((toy) => {
      return <ToyCard key={toy.id}
                toy={toy} 
                onDeleteToy={onDeleteToy}
                onLikedToy={onLikedToy} 
              />
    })}</div>
  );
}

export default ToyContainer;
