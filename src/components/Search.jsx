import React from "react";
import MovieList from './MovieList';
import { Input } from 'semantic-ui-react';

export default function Search({ disableButton, addToNominations, movie, searchQuery, searchResults }) {
  return (
    <div>
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
          <div>No Data</div>
      }
    </div>
  );
}