import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { fetchPlaylists } from "./MusicAPI";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      playlists: [],
      loading: true
    };
  }

  async componentDidMount() {
    let playlistID = 1;

    while (playlistID <= 18) {
      let playlists = await fetchPlaylists(playlistID);
      playlistID++;
    }

    this.setState({ playlists, loading: false });
  }

  render() {
    const playlists = this.return(
      <Router>
        <h1>My Music App</h1>

        <nav>
          <ul>
            <li>
              <NavLink to="/playlists/:id/tracks">Repos</NavLink>
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
