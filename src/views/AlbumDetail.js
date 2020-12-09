import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {useParams} from 'react-router-dom';
import {BASE_URL, CLIENT_TOKEN} from "../api/api";
import {Container} from "react-bootstrap";
import AlbumItem from "../components/cards/AlbumItem";
import AlbumCard from "../components/cards/AlbumCard";
import SearchForm from "../SearchForm";


function List() {
    const {albumId} = useParams();
    const [albums, setAlbums] = useState();
    const [albumItem, setAlbumItem] = useState([]);
    const [artistId, setArtistId] = useState();
    const [artistName, setArtistName] = useState();

    const history = useHistory();

    const handleArtist = (id) => {
        history.push(`/artist-detail/${id}`)
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/api/album/${albumId}`, {
            headers: {
                'Authorization': `${CLIENT_TOKEN}`
            }
        })
            .then((response) => {
                console.log(response.data)
                setAlbums(response.data.album)
                setAlbumItem(response.data.musics)
                console.log(response.data.musics)
                setArtistId(response.data.album.artist_id)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [albumId])

    useEffect(() => {
        if (artistId) {
            axios.get(`${BASE_URL}/api/artist/${artistId}`, {
                headers: {'Authorization': `${CLIENT_TOKEN}`}
            })
                .then((response) => {
                    console.log(response.data)
                    setArtistName(response.data.artist.name)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [artistId])

    const showAlbumDetails = () => {
        return albumItem.map((e, index) => {
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
    const printAlbum = () => {
        return (
            <AlbumCard
                name={albums.name}
                artist={artistName}
                src={albums.images[0]}
                length={albumItem.length}
                handleClick={() => handleArtist(artistId)}
            />
        )
    }
    return (
        <Container className="pt-5 pb-5">
            <SearchForm/>
            <h1 className="mt-4 mb-4">Album Detail</h1>

            {albums && printAlbum()}
            {showAlbumDetails()}
        </Container>

    )
};

export default List;