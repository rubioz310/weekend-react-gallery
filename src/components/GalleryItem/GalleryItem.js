import {useState} from 'react';

function GalleryItem(props) {
    let [showDescription, setShowDescription] = useState(false);
    const photo = props.photo;

    const toggleDescription = () => {
        setShowDescription(showDescription ? false:true);
    }
    return(
        <div key={photo.id} className="photoFrame">
            {!showDescription && <img src={photo.path} onClick={toggleDescription}/>}
            {showDescription && <p onClick={toggleDescription}>{photo.description}</p>}
        </div>
    )
}

export default GalleryItem;