import '../GalleryList/GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList (props) {
    const gallery = props.gallery;
    const likePhoto=props.likePhoto;
    const deletePhoto = props.deletePhoto;
    return(
        <div>
            {gallery.map(photo => (
                <GalleryItem key={photo.id} photo={photo} likePhoto={likePhoto} deletePhoto = {deletePhoto}/>
            ))}
        </div>
    )
}

export default GalleryList;