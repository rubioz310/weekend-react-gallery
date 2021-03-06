import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';

//Components imports
import GalleryList from '../GalleryList/GalleryList';
import UploadPhoto from '../UploadPhoto/UploadPhoto';

function App() {
  //On load, get Gallery
  useEffect(() => {
    getGallery()
  }, [])
  //For showing data from server
  let [gallery, setGallery] = useState([]);

  //GET route
  const getGallery = () => {
    axios.get('/gallery').then(response => {
      setGallery(response.data);
    }).catch(error => {
      console.log('Error getting gallery', error);
    })
  }
  //PUT route that increments number of likes on a photo
  const likePhoto = (id, count) => {
    axios.put(`/gallery/like/${id}`, {like:count}).then(response => {
      getGallery();
    }).catch(error => {
      console.log('Error liking photo', error);
    })
  }
  // POST route that uploads new photo
  const uploadPhoto = (newPhoto) => {
    axios.post(`/gallery/upload`, newPhoto).then(response => {
      getGallery();
    }).catch(error => {
      console.log('Error uploading photo', error);
    })
  }
  // DELETE route that deletes photo
  const deletePhoto = (id) => {
    axios.delete(`/gallery/delete/${id}`).then(response => {
      getGallery();
    }).catch(error => {
      console.log('Error deleting photo', error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList gallery={gallery} likePhoto={likePhoto} deletePhoto = {deletePhoto}/>
        <UploadPhoto uploadPhoto = {uploadPhoto} />
      </div>
    );
}

export default App;
