import './App.css';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className="App-header">
        <h1>Unspam Yourself!</h1>
      </header>

      {/* BODY */}
      <body>
        <div>
          <SearchBar/>
        </div>
      </body>

      {/* FOOTER */}
      <footer>
        <h5>Copyright 2023 by Ada peeps</h5>
      </footer>
    </div>
  );
}

export default App;
