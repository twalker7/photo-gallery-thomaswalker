import './App.css';
import Gallery from '../src/Gallery/index';
import {Button} from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Thomas Walker </h1>

          <a className="component-header" target="_blank" rel="noreferrer" href="mailto: twalker@onetechadvanced.com" id="email-link"> Email Me </a>
       
      </header>

      <Gallery> </Gallery>
    </div>
  );
}

export default App;
