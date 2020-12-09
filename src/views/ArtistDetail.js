import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import {BASE_URL, CLIENT_TOKEN} from "../api/api";
import {Container} from "react-bootstrap";
import CustomCard from "../components/cards/CustomCard";
import AlbumItem from "../components/cards/AlbumItem";
import SearchForm from "../SearchForm";

function ArtistDetail() {
    const {artistId} = useParams();
    const [albums, setAlbums] = useState([]);
    const [musics, setMusics] = useState([]);
    const [artistName, setArtistName] = useState("");

    const printAlbums = () => {
        return albums.map((e, index) => {
            return <CustomCard
                image={e.images[0]}
                key={index}
                data={e}
                name={e.name}
                artist={artistName}
            />
        })
    }

    const printMusics = () => {
        return musics.map((e, index) => {
            return <AlbumItem
                key={index}
                name={e.name}
                src={e.url}
                duration={e.duration}
                artist={e.artist_name}
                licence={e.license_ccurl}
            />
        })
    }

    

    useEffect(() => {
        axios.get(`${BASE_URL}/api/artist/${artistId}`, {
            headers: {'Authorization': `${CLIENT_TOKEN}`}
        })
            .then((response) => {
                setAlbums(response.data.albums)
                setMusics(response.data.musics)
                setArtistName(response.data.artist.name)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <Container>
            <div class="mt-5">
                <SearchForm/>
            </div>
            <h1 className="mt-4 mb-4">Albums</h1>
            <div className="d-flex flex-wrap justify-content-between mt-4">
                    {albums && printAlbums()}
            </div>
            <h1 className="mt-4 mb-4">Musics</h1>
            {musics && printMusics()}

        </Container>
    )
};

export default ArtistDetail;