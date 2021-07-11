import {useState} from 'react';

//CSS import
import '../DeleteButton/DeleteButton.css'

//Imports for delete button icon
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';

//Imports for delete alert
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DeleteButton (props) {
    const deletePhoto = props.deletePhoto;
    const photoId = props.photoId

    //Handles opening and closing the alert
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    //Handles deleting the photo
    const handleDelete = () => {
        deletePhoto(photoId);
    }

    return(
        <div className="delete" >
            {/* Delete button */}
            <IconButton color="secondary" onClick={handleClickOpen}>
                <DeleteForever />
            </IconButton>

            {/* Delete alert */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Delete photo?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Delete photo permanently?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="secondary">
                        Delete <DeleteForever/>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeleteButton;