import {useState} from 'react';

function PhotoForm(props){
    const uploadPhoto = props.uploadPhoto;
    const [photoPath, setPhotoPath] = useState('');
    const [photoDescription, setPhotoDescription] = useState('');

    const handleUpload = () => {
        let newPhoto = {
            path: photoPath,
            description: photoDescription
        }
        uploadPhoto(newPhoto);
        setPhotoPath('');
        setPhotoDescription('');
    }

    return(
        <div className="uploadForm">
            <form >
                <input type="text" placeholder="URL" value={photoPath} onChange={evt => setPhotoPath(evt.target.value)}/>
                <textarea rows="4" cols="30" placeholder="Description" value={photoDescription} onChange={evt => setPhotoDescription(evt.target.value)}/>
                <button onClick={handleUpload}>Upload</button>
            </form>
        </div>
    )
}

export default PhotoForm;