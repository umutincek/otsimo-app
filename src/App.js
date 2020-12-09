import React from "react";
import List from "./views/List";
import Home from "./views/Home";
import AlbumDetail from "./views/AlbumDetail";
import ArtistDetail from "./views/ArtistDetail";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/list/:query" component={List}/>
                    <Route path="/album-detail/:albumId" component={AlbumDetail}/>
                    <Route path="/artist-detail/:artistId" component={ArtistDetail}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;