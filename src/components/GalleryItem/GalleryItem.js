import {useState} from 'react';
import './GalleryItem.css';
import DeleteButton from '../DeleteButton/DeleteButton'

function GalleryItem(props) {
    let [showDescription, setShowDescription] = useState(false);
    let [showDelete, setShowDelete] = useState(true) //Change later to false

    const photo = props.photo;
    const likePhoto = props.likePhoto
    const deletePhoto = props.deletePhoto;

    //Toggles between showing photo and description
    const toggleDescription = () => {
        setShowDescription(showDescription ? false:true);
    }
    const toggleDelete = () => {
        setShowDelete(showDelete ? false:true);
    }
    
    //Updates likes count with API in App.jsx
    const handleLike = () =>{
        likePhoto(photo.id)
    }
    return(
        // onMouseOver={toggleDelete} onMouseLeave={toggleDelete}
        <div className="photoFrame" >
            {showDelete && <DeleteButton deletePhoto = {deletePhoto} photoId = {photo.id}/>}
            <div className="photo" onClick={toggleDescription} >
                {!showDescription && <img src={photo.path}/>}
                {showDescription && <p >{photo.description}</p>}
            </div>
            <p>Likes: {photo.likes}</p>
            <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default GalleryItem;