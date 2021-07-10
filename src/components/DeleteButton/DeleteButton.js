import {useState} from 'react';

function DeleteButton (props) {
    let [showDelete, setShowDelete] = useState(false);

    const deletePhoto = props.deletePhoto;
    const photoId = props.photoId

    //Toggles appearance of delete button
    const toggleDelete = () => {
        setShowDelete(showDelete ? false:true);
    }
    
    const handleDelete = () => {
        deletePhoto(photoId);
    }

    return(
        <div className="delete">
            <button className="deleteBtn" 
            onMouseOver={toggleDelete} onMouseLeave={toggleDelete}
            onClick={handleDelete}>
                x{showDelete && " Delete Photo"}
            </button>
        </div>
    )
}

export default DeleteButton;