import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import SearchInput from "./components/inputs/SearchInput";
import BlockButton from "./components/buttons/BlockButton";


function SearchForm() {
    const history = useHistory();

    const [query, setQuery] = useState("");

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (!query) {
            return alert("OOPS!\nPlease type music or album name!")
        } else {
            history.push(`/list/${query}`);
        }
    };

    return (
        <div>
            <SearchInput handleChange={handleInputChange} value={query}/>
            <BlockButton handleClick={handleSearch} buttonName="Search"/>
        </div>


    )
}

export default SearchForm;