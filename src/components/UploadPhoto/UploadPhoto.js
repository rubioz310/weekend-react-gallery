import {useState} from 'react';
import PhotoForm from '../PhotoForm/PhotoForm';
import '../UploadPhoto/UploadPhoto.css'

function UploadPhoto(props){
    const uploadPhoto = props.uploadPhoto;
    let [showForm,setShowForm] = useState(false);

    const toggleUploadForm = () => {
        setShowForm(showForm ? false:true);
    }

    return(
        <div className="upload">
            <button onClick={toggleUploadForm}>New photo</button>
            {showForm && <PhotoForm uploadPhoto={uploadPhoto}/>}
        </div>
    )
}

export default UploadPhoto;