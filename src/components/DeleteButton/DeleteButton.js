import {useState} from 'react';

function DeleteButton () {
    let [showDelete, setShowDelete] = useState(false);

    //Toggles appearance of delete button
    const toggleDelete = () => {
        setShowDelete(showDelete ? false:true);
    }

    return(
        <div className="delete">
            <button className="deleteBtn" onMouseOver={toggleDelete} onMouseLeave={toggleDelete}>x{showDelete&&" Delete Photo"}</button>
        </div>
    )
}

export default DeleteButton;