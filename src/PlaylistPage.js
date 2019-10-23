import React from "react";
import { fetchMusic } from "./MusicAPI";
import Loading from "./Loading";
import SongCard from "./SongCard";

// Realized that this doesn't appropriately handle the props from App.js,
// but I don't have the time to go back and restructure it before time's up :'(

export default class PlaylistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      page: 1,
      loading: true
    };
  }

  async componentDidMount() {
    let songs = await fetchMusic();

    this.setState({ songs, page, loading: false });
  }

  render() {
    return (
      <div className="music">
        {this.state.loading ? (
          <Loading />
        ) : (
          this.state.music.map(song => {
            return <SongCard song={song} key={song.id} />;
          })
        )}
      </div>
    );
  }
}
