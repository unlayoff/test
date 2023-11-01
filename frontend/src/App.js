import './App.css';
import axios from "axios";

const baseURL = "http://localhost:3000/";

function App() {
  /*Load the response from express*/
  axios.get(baseURL).then((response) => {
    console.log(JSON.stringify(response.data.message));
  });

  return (
    <div className="App">
      <header className="App-header">
        Unlayoff, get found.... Always !!!
      </header>

    </div>
  );
}

export default App;
