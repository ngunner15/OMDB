import React from "react";
import { Card, Image, Button } from 'semantic-ui-react';
import '../App.css';

export default function MovieList({ item, index, disableButton, addToNominations, removeNominations }) {
  return (
    <div className="App">
      <Card centered color='yellow'>
        <Image src={item.Poster} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{item.Title}</Card.Header>
          <Card.Meta>Released in {item.Year}</Card.Meta>
        </Card.Content>
        {/* logic for which button to show */}
        {
          addToNominations ?
            <Button attached='bottom' inverted color='blue' disabled={disableButton(item)} onClick={() => addToNominations(item)}>Nominate</Button>
            :
            <Button attached='bottom' inverted color='red' onClick={() => removeNominations(index)}>Remove</Button>
        }
      </Card>
    </div>
  );
}