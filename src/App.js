import './App.css';
import axios from 'axios';

function App() {

  const fetchData = async () => {
    let req = await axios.get(`http://www.omdbapi.com/?s=batman&apikey=${process.env.REACT_APP_API_KEY}`);
    console.log(req.data.Search);
  }

  fetchData();

  return (
    <div className="App">
      <h1>The Shoppies</h1>

    </div>
  );
}

export default App;
