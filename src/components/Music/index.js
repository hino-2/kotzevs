import React, {Component} from 'react'
import './style.css'
import musicList from './list'
import Player from './player1'

export default class Music extends Component {
  calcX = () => { return (410 * window.innerWidth / 1200) - 285 }
  calcY = () => { return (335 * window.innerWidth / 1200) - 305 }

  state = {
    xMenu: this.calcX(),
    yMenu: this.calcY()
  }

  updatePosition = () => {
    if(window.innerWidth !== this.state.width) {
      this.setState({
        xMenu: this.calcX(),
        yMenu: this.calcY()
      });
    }
  }

  componentDidMount() {
    Player.init(musicList[0]);
    document.getElementById('header').innerHTML = musicList[0].name;
    this.updatePosition();
    window.addEventListener("resize", this.updatePosition.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePosition.bind(this));
  }

  loadTrack = id => {
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'inline-block';
    document.getElementById('header').innerHTML = musicList[id].name;
    Player.pause();
    Player.init(musicList[id]);
  }

  render () {
    const songs = musicList.map((song, index) =>
      <li key={song.id} className="song-list-item" onClick={this.loadTrack.bind(this, song.id)}>
        <div className="songID">{song.id + 1}</div>
        <div className="songName">{song.name}</div>
        <div className="songDuration">{song.duration}</div>
        <br />
        <div className="songDesc">{song.desc}</div>
        <audio id={"song" + song.id} src={song.url} />
      </li>
    )

    return (
      <div>
        <link href='https://fonts.googleapis.com/css?family=Roboto:100' rel='stylesheet' type='text/css' />
        <div className="player" style={{"--x": this.state.xMenu + "px", "--y": this.state.yMenu + "px"}}>
            <canvas></canvas>
          <div className="song">
            <div className="name" id="songName"></div>
          </div>
          <div className="playarea">
            <div className="prevSong"></div>
            <div className="play"></div>
            <div className="pause"></div>
            <div className="nextSong"></div>
          </div>
          <div className="soundControl"></div>
          <div className="time">00:00</div>
        </div>
        <div>
          <ul className="songList">
            {songs}
          </ul>
        </div>
      </div>
    )
  }
}
