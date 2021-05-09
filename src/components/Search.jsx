import React from "react";
import MovieList from './MovieList';
import { Message, Input } from 'semantic-ui-react';

export default function Search({ disableButton, addToNominations, movie, searchQuery, searchResults, nomination }) {

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <Input
        icon='search'
        type="text"
        placeholder='Search...'
        value={movie}
        onChange={searchQuery}
      />
      {
        searchResults ?
          searchResults.map((item, index) => {
            return (
              <MovieList
                key={index}
                index={index}
                item={item}
                disableButton={disableButton}
                addToNominations={addToNominations}
              />
            )
          })
          :
          <Message
            size='large'
            info
            header='Type a movie name in the Search bar!'
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