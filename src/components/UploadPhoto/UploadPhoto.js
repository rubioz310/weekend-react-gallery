import {useState} from 'react';
import PhotoForm from '../PhotoForm/PhotoForm';

function UploadPhoto(){

    let [showForm,setShowForm] = useState(true);

    const toggleUploadForm = () => {
        setShowForm(showForm ? false:true);
    }

    return(
        <div>
            <button onClick={toggleUploadForm}>New photo</button>
            {showForm && <PhotoForm />}
        </div>
    )
}

export default UploadPhoto;