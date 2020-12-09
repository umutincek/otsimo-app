import React from "react";
import {Button} from "react-bootstrap";


const TabButton = ({handleClick, tabName}) => {
    return (
        <div className="mt-3 ml-2">
            <Button
                className="btn-lg btn-block shadow-none  "
                style={styles.tabs}
                onClick={handleClick}>
                {tabName}
            </Button>
        </div>
    )
}

const styles = {
    tabs: {
        backgroundColor: "#FFF9CF",
        color:"#6E26AD",
        borderWidth:3,
        borderColor:"#6E26AD",
        fontWeight:"bold",
    },
}

export default TabButton;