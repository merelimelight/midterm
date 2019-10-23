import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import PlaylistPage from "./PlaylistPage";
import PageNotFound from "./PageNotFound";
import { fetchPlaylists } from "./MusicAPI";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      playlistIDs: [],
      loading: true
    };
  }

  async componentDidMount() {
    // let playlistID = 1;

    // while (playlistID <= 18) {
    //   let playlists = await fetchPlaylists(playlistID);
    //   playlistID++;
    // }

    const mappingFunction = playlist => playlist.id;

    const playlists = await fetchPlaylists();

    const playlistIDs = playlists.map(mappingFunction);

    this.setState({ playlistIDs, loading: false });
  }

  render() {
    return (
      <Router>
        <h1>My Music App</h1>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Library</NavLink>
            </li>
            <li>
              <NavLink to="/playlists/1/tracks">Music</NavLink>
            </li>
            <li>
              <NavLink to="/playlists/2/tracks">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/playlists/3/tracks">TV Shows</NavLink>
            </li>
            <li>
              <NavLink to="/playlists/4/tracks">Audiobooks</NavLink>
            </li>
            <li>
              <NavLink to="/playlists/5/tracks">90's Music</NavLink>
            </li>
            <li>
              <NavLink to="/playlists/6/tracks">Audiobooks</NavLink>
            </li>
            <li>
              <NavLink to="/playlists/7/tracks">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/playlists/1/tracks">Music</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact={true} />

          <Route path="/playlists/:id/tracks">
            <PlaylistPage />
          </Route>

          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}
