import {useState} from 'react';
import PhotoForm from '../PhotoForm/PhotoForm';
import '../UploadPhoto/UploadPhoto.css'

function UploadPhoto(props){
    const uploadPhoto = props.uploadPhoto;

    return(
        <div className="upload">
            <p>Upload new photo</p>
            <PhotoForm uploadPhoto={uploadPhoto}/>
        </div>
    )
}

export default UploadPhoto;