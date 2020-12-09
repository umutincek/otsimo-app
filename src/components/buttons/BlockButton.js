import React from "react";
import {Button} from "react-bootstrap";

const BlockButton = ({handleClick, buttonName,disabled}) => {
    return (
        <Button
            className="btn-lg btn-block mt-3 shadow-none "
            onClick={handleClick}
            disabled={disabled}
            style={styles.button}>
            <p className="p-0 m-0">{buttonName}</p>
        </Button>
    )
}

const styles = {
    button: {
        backgroundColor: "#6E26AD",
        borderWidth: 2,
        borderColor: '#6E26AD',
        color: "#f2e3ff",
        fontWeight: "bold",
    },
}

export default BlockButton;