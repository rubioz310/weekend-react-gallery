import {useState} from 'react';

function GalleryItem(props) {
    let [showDescription, setShowDescription] = useState(false);
    const photo = props.photo;
    const likePhoto = props.likePhoto

    const toggleDescription = () => {
        setShowDescription(showDescription ? false:true);
    }

    const handleLike = () =>{
        likePhoto(photo.id)
    }
    return(
        <div className="photoFrame">
            {!showDescription && <img src={photo.path} onClick={toggleDescription}/>}
            {showDescription && <p onClick={toggleDescription}>{photo.description}</p>}
            <p>Likes: {photo.likes}</p>
            <button onClick={handleLike}>Like</button>
        </div>
    )
}

export default GalleryItem;