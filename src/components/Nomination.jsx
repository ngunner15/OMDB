import React from "react";
import MovieList from './MovieList';
import { Message } from 'semantic-ui-react';

export default function Nomination({ nomination, disableButton, removeNominations }) {
  return (
    <div>
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
          <div>Zero nominations</div>
      }
      {
        (nomination !== null && nomination.length > 4) ?
          <Message
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