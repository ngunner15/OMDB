import React from "react";
import MovieList from './MovieList';
import { Message } from 'semantic-ui-react';

export default function Nomination({ nomination, disableButton, removeNominations }) {
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      {
        nomination ?
          nomination.map((item, index) => {
            return (
              <MovieList
                key={index}
                index={index}
                item={item}
                disableButton={disableButton}
                removeNominations={removeNominations}
              />
            )
          })
          :
          <Message
            size='large'
            info
            header='Zero Nomination'
            content='please add movie nominations...'
          />
      }
      {
        (nomination !== null && nomination.length > 4) ?
          <Message
            size='large'
            warning
            header='Nomination limit is 5!'
            content='please remove nominations to add more...'
          />
          :
          null
      }
    </div>
  );
}