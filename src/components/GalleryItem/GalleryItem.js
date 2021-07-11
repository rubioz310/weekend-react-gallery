import {useState} from 'react';

//Styles and components imports
import './GalleryItem.css';
import DeleteButton from '../DeleteButton/DeleteButton'

//Material-ui buttons and icons
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';


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
        likePhoto(photo.id, 1)
    }
    const handleDislike = () =>{
        likePhoto(photo.id, -1)
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
                <IconButton color="primary" onClick={handleLike}><ThumbUp /></IconButton>
                <p>{photo.likes && `${photo.likes} Likes` || "No likes :("} </p>
                <IconButton color="primary" onClick={handleDislike}><ThumbDown /></IconButton>
            </div>
        </div>
    )
}

export default GalleryItem;