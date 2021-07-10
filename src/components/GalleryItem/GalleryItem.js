import {useState} from 'react';

function GalleryItem(props) {
    let [showDescription, setShowDescription] = useState(false);
    const photo = props.photo;
    const likePhoto = props.likePhoto

    console.log(photo);

    //Toggles between showing photo and description
    const toggleDescription = () => {
        setShowDescription(showDescription ? false:true);
    }
    //Updates likes count with API in App.jsx
    const handleLike = () =>{
        likePhoto(photo.id)
    }
    return(
        <div className="photoFrame">
            <div className="photo" onClick={toggleDescription}>
                {!showDescription && <img src={photo.path}/>}
                {showDescription && <p >{photo.description}</p>}
            </div>
            <p>Likes: {photo.likes}</p>
            <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default GalleryItem;