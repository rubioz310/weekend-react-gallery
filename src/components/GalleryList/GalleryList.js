import '../GalleryList/GalleryList.css'

function GalleryList (props) {
    const gallery = props.gallery;
    return(
        <div>
            {gallery.map(photo => (
                <div key={photo.id} className="photoFrame">
                    <img src={photo.path}/>
                    <p>{photo.description}</p>
                </div>
            ))}
        </div>
    )
}

export default GalleryList;