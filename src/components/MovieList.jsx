import React from "react";
import { Grid, Segment, Card, Image, Button } from 'semantic-ui-react';

export default function MovieList({ item, index, disableButton, addToNominations, removeNominations }) {
  return (
    <div>
      <Grid container columns='equal'>
        <Grid.Column>
          <Segment>
            <Card>
              <Image src={item.Poster} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{item.Title}</Card.Header>
                <Card.Meta>Released in {item.Year}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                {/* logic for which button to show */}
                {
                  addToNominations ?
                    <Button inverted color='blue' disabled={disableButton(item)} onClick={() => addToNominations(item)}>Nominate</Button>
                    :
                    <Button inverted color='red' onClick={() => removeNominations(index)}>Remove</Button>
                }
              </Card.Content>
            </Card>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}