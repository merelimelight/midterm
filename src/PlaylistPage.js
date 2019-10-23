import React from "react";
import { fetchMusic } from "./MusicAPI";
import Loading from "./Loading";
import { Route, NavLink, Switch } from "react-router-dom";
import Loading from "./Loading";

export default class PlaylistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      loading: true
    };
  }

  async componentDidMount() {
    let songs = await fetchMusic();

    this.setState({ songs, loading: false });
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
