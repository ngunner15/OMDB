import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [movie, setMovie] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  // const fetchData = async () => {
  //   let req = await axios.get(`http://www.omdbapi.com/?s=batman&apikey=${process.env.REACT_APP_API_KEY}`);
  //   console.log(req.data.Search);
  // }

  // fetchData();

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
            <li>{item.Title}</li>
          ))
          :
          <div>No Data</div>
        }
      </ul>
    </div>
  );
}

export default App;
