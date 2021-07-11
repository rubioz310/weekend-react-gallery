import {useState} from 'react';
import './GalleryItem.css';
import DeleteButton from '../DeleteButton/DeleteButton'
import Button from '@material-ui/core/Button';

function GalleryItem(props) {
    let [showDescription, setShowDescription] = useState(false);
    let [showDelete, setShowDelete] = useState(false) //Change later to false

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
        <div className="photoFrame" onMouseEnter={toggleDelete} onMouseLeave={toggleDelete}>
            {showDelete && <DeleteButton deletePhoto = {deletePhoto} photoId = {photo.id}/>}
            <div className="photo" onClick={toggleDescription} >
                {!showDescription && <img src={photo.path}/>}
                {showDescription && <div className="description"><p >{photo.description}</p></div>}
            </div>
            <div className="likesSection">
                <Button variant="contained" color="primary" size="small" onClick={handleLike}>Like</Button>
                <p>{photo.likes || "No"} Likes</p>
            </div>
        </div>
    )
}

export default GalleryItem;