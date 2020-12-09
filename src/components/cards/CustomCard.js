import React from "react";

const CustomCard = ({name, image, handleClick, artist}) => {
    return (
        <div onClick={handleClick} className="card col-sm-4 col-lg-2 col-md-2 p-2 m-2" style={{cursor:"pointer"}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-title">{artist}</h6>
            </div>
        </div>
    )
}


export default CustomCard;