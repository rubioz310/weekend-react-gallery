function GalleryItem(props) {
    const photo = props.photo;
    return(
        <div key={photo.id} className="photoFrame">
            <img src={photo.path}/>
            <p>{photo.description}</p>
        </div>
    )
}

export default GalleryItem;