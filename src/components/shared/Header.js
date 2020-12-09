import React from "react";
import {Navbar} from "react-bootstrap";


const Header = () => {
    return (
        <Navbar style={styles.header}></Navbar>
    )
}

const styles = {
    header: {
        backgroundColor: "#6E26AD"
    },
    button: {
        backgroundColor: "#f2e3ff",

    }


}

export default Header;