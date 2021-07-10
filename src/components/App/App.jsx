import React from 'react';
import axios from 'axios';
import './App.css';

import {useState, useEffect} from 'react';

function App() {
  //On load, get Gallery
  useEffect(() => {
    getGallery()
  }, [])
  
  let [gallery, setGallery] = useState([]);

  //GET route
  const getGallery = () => {
    axios.get('/gallery').then(response => {
      setGallery(response.data);
    }).catch(error => {
      console.log('Error getting gallery', err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
