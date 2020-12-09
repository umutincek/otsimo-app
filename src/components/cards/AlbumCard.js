import React from "react";


const AlbumCard = ({name,artist,src,length,licence, handleClick}) => {    
    return (
        <div className="card mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img style={styles.image} src={src}
                         alt=""/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <a href="" onClick={handleClick} className="card-text">{artist}</a>
                        <p className="card-text"><small className="text-muted">{length} song listed</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    image: {
        height: 200,
    },
}
export default AlbumCard;