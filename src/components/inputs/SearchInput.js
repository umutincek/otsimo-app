import React from "react";
import {Form} from "react-bootstrap";

function SearchInput({handleChange, value}) {
    return (
        <Form.Control
            size="lg" type="text" value={value}
            onChange={handleChange} className="shadow-none"
            placeholder="Search song, album  or  artist..."
            style={styles.search}>
        </Form.Control>
    )
}

const styles = {
    search: {
        borderWidth: 3,
        borderColor: "#6E26AD",
        backgroundColor: "#f2e3ff",
        width: 1110
    }
}

export default SearchInput;