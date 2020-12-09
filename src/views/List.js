import React, {useEffect, useState} from "react";
import MusicCard from "../components/cards/MusicCard";
import {useParams} from 'react-router-dom';
import axios from "axios";
import SearchInput from "../components/inputs/SearchInput";
import BlockButton from "../components/buttons/BlockButton";
import {Container} from "react-bootstrap";
import SvgLogo from "../components/icons/Logo";
import {BASE_URL, CLIENT_TOKEN} from "../api/api";

function List() {
    const [musicItem, setMusics] = useState([]);
    let {query} = useParams();

    useEffect(() => {
            axios.get(`${BASE_URL}/api/music/search?q=${query}`, {
                headers: {
                    'Authorization': `${CLIENT_TOKEN}`
                }
            })
                .then((response) => {
                    setMusics(response.data.musics)
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        []
    )


    const printItems = () => {
        return musicItem.map((e, index) => {
            return <MusicCard
                licence={e.license_ccurl}
                name={e.album_name}
                image={e.album_images[0]}
                src={e.url}
                key={index} data={e}
                alt={e.album_name}/>
        })
    }


    return (
        <div className="pt-4 d-flex">
            <Container className="d-flex align-items-center justify-content-center flex-column">
                <SvgLogo/>
                <SearchInput/>
                <BlockButton buttonName="Search"/>
                <div className="d-flex flex-row flex-wrap mt-5 ">
                    {musicItem ? printItems() : null}
                </div>
            </Container>

        </div>

    )
};


export default List;