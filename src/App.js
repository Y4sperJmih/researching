import React from "react";
import Spotify from "./components/Media/Spotify";
import Social from "./components/Social";
import "./styles/App.css";

function App() {

  return (

    <div className="body">
        <div className="App">      

          <Spotify/>

          <div className="info">
            <p className="yasper">YASPER</p>
            <Social/>
          </div>

        </div>
    </div>
    
  );
}

export default App;
