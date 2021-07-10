import '../GalleryList/GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList (props) {
    const gallery = props.gallery;
    return(
        <div>
            {gallery.map(photo => (
                <GalleryItem key={photo.id} photo={photo}/>
            ))}
        </div>
    )
}

export default GalleryList;