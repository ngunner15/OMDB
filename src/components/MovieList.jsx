import React from "react";
import { Button } from 'semantic-ui-react';

export default function MovieList({ item, index, disableButton, addToNominations, removeNominations }) {
  return (
    <div>
      <p>{item.Title} ({item.Year})</p>
      {/* logic for which button to show */}
      {
        addToNominations ?
          <Button inverted color='blue' disabled={disableButton(item)} onClick={() => addToNominations(item)}>Nominate</Button>
          :
          <Button inverted color='red' onClick={() => removeNominations(index)}>Remove</Button>
      }
    </div>
  );
}