import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import PlaylistPage from "./PlaylistPage";
import PageNotFound from "./PageNotFound";
import Loading from "./Loading";
import { fetchPlaylists, fetchMusic } from "./MusicAPI";
// import { fetchPlaylists, fetchMusic, fetchNumPages } from "./MusicAPI";
import "./App.css";
import SongCard from "./SongCard";
import SearchForm from "./SearchForm";

// I'm genuinely sorry

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      playlists: [],
      music: [],
      page: 1,
      loading: true
    };
  }

  handleSearch = async searchValue => {
    this.setState({ loading: true });

    if (this.state.searchValue <= 18 && this.state.searchValue > 0) {
      let [music] = await Promise.all([fetchMusic(searchValue)]);
      this.setState({ music, loading: false });
    } else {
      // <p>No tracks found</p>;
    }
  };

  async componentDidMount() {
    // let playlistID = 1;

    // while (playlistID <= 18) {
    //   let playlists = await fetchPlaylists(playlistID);
    //   playlistID++;
    // }

    // const mappingFunction = playlist => playlist.id;

    // const playlists = await fetchPlaylists();

    // const playlistIDs = playlists.map(mappingFunction);

    // this.setState({ playlistIDs, loading: false });

    let [playlists, music] = await Promise.all([
      fetchPlaylists(),
      fetchMusic(this.state.page)
      // fetchNumPages()
    ]);

    this.setState({ playlists, music, loading: false });
  }

  render() {
    return (
      <Router>
        <h1>My Music App</h1>

        <p>Total Pages: {this.state.music.meta.pages}</p>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Library</NavLink>
            </li>
            <p>-----------------</p>
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
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact={true} />

          <Route path="/playlists/:id/tracks">
            <PlaylistPage />
          </Route>

          <Route component={PageNotFound} />
        </Switch>

        <SearchForm className="search" onSearch={this.handleSearch} />

        <div className="info">
          <h3>Name</h3>
          <h3>Minutes</h3>
          {this.state.loading ? (
            <Loading />
          ) : (
            this.state.music.map(song => {
              return <SongCard song={this.state.music} key={song.id} />;
            })
          )}
        </div>
      </Router>
    );
  }
}
