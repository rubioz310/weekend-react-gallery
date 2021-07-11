import {useState} from 'react';

//Styles and components imports
import './GalleryItem.css';
import DeleteButton from '../DeleteButton/DeleteButton'
import LikeSection from '../LikeSection/LikeSection';



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
    
    return(
        // onMouseOver={toggleDelete} onMouseLeave={toggleDelete}
        <div className="photoFrame" onMouseEnter={toggleDelete} onMouseLeave={toggleDelete}>
            {showDelete && <DeleteButton deletePhoto = {deletePhoto} photoId = {photo.id}/>}
            <div className="photo" onClick={toggleDescription} >
                {!showDescription && <img src={photo.path}/>}
                {showDescription && <div className="description"><p >{photo.description}</p></div>}
            </div>
            <LikeSection likes={photo.likes} likePhoto={likePhoto} id={photo.id}/>
        </div>
    )
}

export default GalleryItem;