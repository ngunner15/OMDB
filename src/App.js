import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';
import ls from 'local-storage';

import NavBar from './components/NavBar';
import Search from './components/Search';
import Nomination from './components/Nomination';
import './App.css';

function App() {

  const [movie, setMovie] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nomination, setNomination] = useState([]);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(function (response) {
        // console.log(response.data.Search);
        setSearchResults(response.data.Search);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [movie]);

  useEffect(() => {
    let myNominations = ls.get('nominations');
    setNomination(myNominations);
  }, []);

  // handle logic

  const searchQuery = (e) => {
    setMovie(e.target.value);
  }

  // button logic

  const addToNominations = (item) => {
    let nominationArray = [...nomination, item];

    setNomination(nominationArray);
    // adding to localStorage
    ls.set('nominations', nominationArray);
  }

  const removeNominations = (index) => {
    let newArray = [...nomination];

    if (index !== -1) {
      newArray.splice(index, 1);
      setNomination(newArray);
      // remove from localStorage
      ls.set('nominations', newArray);
    }
  }

  const disableButton = (item) => {
    return nomination && (nomination.includes(item) || nomination.length > 4);
  }

  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route path="/nomination">
              <Nomination nomination={nomination} disableButton={disableButton} removeNominations={removeNominations} />
            </Route>
            <Route path="/">
              <Search movie={movie} searchQuery={searchQuery} searchResults={searchResults} disableButton={disableButton} addToNominations={addToNominations} nomination={nomination} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
