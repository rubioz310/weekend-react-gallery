
//Styles and components imports
import '../LikeSection/LikeSection.css';

//Material-ui buttons and icons
import IconButton from '@material-ui/core/IconButton';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

function LikeSection (props){
    const likePhoto = props.likePhoto;
    const likes = props.likes;
    const id = props.id;

    //Updates likes count with API in App.jsx
    const handleLike = () =>{
        likePhoto(id, 1)
    }
    const handleDislike = () =>{
        if(likes){
            likePhoto(id, -1)
        }
    }

    return(
        <div className="likesSection">
            <IconButton color="primary" onClick={handleLike}><ThumbUp /></IconButton>
            <p>{likes && `${likes} Likes` || "No likes :("} </p>
            <IconButton color="primary" onClick={handleDislike}><ThumbDown /></IconButton>
        </div>
    )
}

export default LikeSection;