import React from "react";

export default function MovieList({ item, index, disableButton, addToNominations, removeNominations }) {
  return (
    <div>
      <p>{item.Title} ({item.Year})</p>
      {
        addToNominations ?
          <button disabled={disableButton(item)} onClick={() => addToNominations(item)}>Nominate</button>
          :
          <button onClick={() => removeNominations(index)}>Remove</button>
      }
    </div>
  );
}