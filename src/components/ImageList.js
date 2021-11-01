import React from "react";
import ImageCard from "./ImageCard";
import './imageList.css';

const ImageList = (props) => {

    // Destructive on image to object instead of using "image" from props.
    const images =  props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });

    return (
        <div className="image-list">{images}</div>
    );
    
};

export default ImageList;