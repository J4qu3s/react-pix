import React from "react";
import './imageList.css';

const ImageList = (props) => {

    // Destructive on image to object instead of using "image" from props.
    const images =  props.images.map(({description, id, urls}) => {
        return <img key={id} src={urls.regular} alt={description}/>
    });

    return (
        <div className="image-list">{images}</div>
    );
    
};

export default ImageList;