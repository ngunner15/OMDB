import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ls from 'local-storage';

function App() {

  const [movie, setMovie] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nomination, setNomination] = useState([]);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(function(response) {
        // handle success
        // const results = response.data.Search.filter(name =>
        //   name.toLowerCase().includes(movie.toLowerCase())
        // )
        console.log(response.data.Search);
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

  // const fetchData = async () => {
  //   let req = await axios.get(`http://www.omdbapi.com/?s=batman&apikey=${process.env.REACT_APP_API_KEY}`);
  //   console.log(req.data.Search);
  // }

  // fetchData();

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
      <h1>The Shoppies</h1>
      <input
        type="text"
        placeholder="Search..."
        value={movie}
        onChange={(e) => {
          setMovie(e.target.value);
        }}
      />
      {/* <div>{searchResults}</div> */}
      <ul>
         {
          searchResults ?
          searchResults.map(item => (
            <div>
              <li>{item.Title} {item.Year}</li>
              <button disabled={disableButton(item)} onClick={() => addToNominations(item)}>Nominate</button>
            </div>
          ))
          :
          <div>No Data</div>
        }
      </ul>
      <br></br>
      <ul>
         {
          nomination ?
          nomination.map((item, index) => (
            <div>
              <li>{item.Title} {item.Year}</li>
              <button onClick={() => removeNominations(index)}>Remove</button>
            </div>
          ))
          :
          <div>Zero nominations</div>
        }
        {
          (nomination!==null && nomination.length > 4) ?
          <div>Nomination limit is 5, please remove nominations to add more...</div>
          :
          null
        }
      </ul>
    </div>
  );
}

export default App;
