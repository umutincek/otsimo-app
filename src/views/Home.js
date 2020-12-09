/*

When i made post request for CLIENT_TOKEN it have faced with CORS error
and then i tried to fetch it with Node.js Server it caused to 400 ERROR.

Then i fetch my CLIENT_TOKEN by curl. I have used my email for it
*/
import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {Container} from "react-bootstrap";

import CustomCard from "../components/cards/CustomCard";
import TabButton from "../components/buttons/TabButton";
import SearchInput from "../components/inputs/SearchInput";
import BlockButton from "../components/buttons/BlockButton";
import SvgLogo from "../components/icons/Logo";

import {BASE_URL, CLIENT_TOKEN} from "../api/api";

function Home() {
    const history = useHistory();

    const [query, setQuery] = useState("");
    const [albums, setAlbums] = useState([]);
    const [recent, setRecent] = useState([]);
    const [showRecent, setShowRecent] = useState("");

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (!query) {
            return alert("OOPS!\nPlease type music or album name!")
        } else {
            history.push(`list/${query}`);
        }
    };

    const handleAlbums = (id) => {
        history.push(`/album-detail/${id}`)
    }

    const showRecentAlbums = () => {
        return albums.map((e, index) => {
            return <CustomCard
                handleClick={() => handleAlbums(e.id)}
                image={e.images[0]}
                key={index}
                data={e}
                name={e.name}
            />
        })
    }

    const showRecentMusics = () => {
        return recent.map((e, index) => {
            return <CustomCard
                key={index}
                album={e}
                name={e.album_name}
                image={e.album_images[0]}
                artist={e.artist_name}
            />
        })
    }
    const handleRecentAlbums = () => {
        axios.get(`${BASE_URL}/api/recent/albums`, {
            headers: {
                'Authorization': `${CLIENT_TOKEN}`
            }
        })
            .then((response) => {
                setAlbums(response.data.albums)
                setShowRecent("albums")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleRecentMusics = () => {
        axios.get(`${BASE_URL}/api/recent/musics`, {
            headers: {
                'Authorization': `${CLIENT_TOKEN}`
            }
        })
            .then((response) => {
                setRecent(response.data.musics)
                setShowRecent("musics")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <Container className="d-flex align-items-center bg-transparent flex-column">
            <SvgLogo/>

            <SearchInput handleChange={handleInputChange} value={query}/>
            <BlockButton handleClick={handleSearch} buttonName="Search"/>

            <div className="row">
                <TabButton handleClick={handleRecentAlbums} tabName="Recent Albums"/>
                <TabButton handleClick={handleRecentMusics} tabName="Recent Musics"/>
            </div>


            <div className="d-flex flex-row flex-wrap justify-content-between mt-4">
                {albums && showRecent === "albums" ? showRecentAlbums() : null}
                {recent && showRecent === "musics" ? showRecentMusics() : null}
            </div>

        </Container>
    )
}


export default Home;