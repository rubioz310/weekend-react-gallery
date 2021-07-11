import {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import '../DeleteButton/DeleteButton.css'

function DeleteButton (props) {
    let [showDelete, setShowDelete] = useState(false);

    const deletePhoto = props.deletePhoto;
    const photoId = props.photoId
    
    const handleDelete = () => {
        deletePhoto(photoId);
    }

    return(
        <div className="delete" onClick={handleDelete}>
            <IconButton color="primary" aria-label="upload picture" component="span" color="secondary">
                <DeleteForever />
            </IconButton>
        </div>
    )
}

export default DeleteButton;