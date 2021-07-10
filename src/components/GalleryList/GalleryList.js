import '../GalleryList/GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList (props) {
    const gallery = props.gallery;
    const likePhoto=props.likePhoto;
    return(
        <div>
            {gallery.map(photo => (
                <GalleryItem key={photo.id} photo={photo} likePhoto={likePhoto}/>
            ))}
        </div>
    )
}

export default GalleryList;