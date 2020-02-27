import React, {Component} from 'react'
import './style.css'
import Player from './player'

export default class Music extends Component {
  constructor(props) {
    super(props);
    this.updateMusicPosition = this.updateMusicPosition.bind(this);
    this.state = {
      width: window.innerWidth,
      xMenu: this.calcX(),
      yMenu: this.calcY(),
      currentSongIndex: 0,
      musicList: props.musicList
    };
  }

  calcX = () => { return (410 * window.innerWidth / 1200) - 285 }
  calcY = () => { return (335 * window.innerWidth / 1200) - 335 }

  updateMusicPosition = () => {
    if(window.innerWidth !== this.state.width) {
      this.setState({
        xMenu: this.calcX(),
        yMenu: this.calcY(),
        width: window.innerWidth
      });
    }
  }

  componentDidMount() {
    Player.init(this.state.musicList[0]);
    document.getElementById('header').innerHTML = this.state.musicList[0].name;
    window.addEventListener("resize", this.updateMusicPosition);
    this.updateMusicPosition();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMusicPosition);
  }

  loadTrack = id => {
    if(id >= 0 && id < this.state.musicList.length && document.getElementById(`loading${this.state.currentSongIndex}`).innerHTML === '' && this.state.currentSongIndex !== id) {
      this.setState({ currentSongIndex: id });
      document.querySelector('.pause').style.display = 'none';
      document.querySelector('.play').style.display = 'inline-block';
      document.getElementById('header').innerHTML = this.state.musicList[id].name;
      Player.pause();
      Player.init(this.state.musicList[id]);
    }
  }

  render () {
    const songs = this.state.musicList.map((song, index) =>
      <li key={song.id} className="song-list-item" onClick={this.loadTrack.bind(this, song.id)}>
        <div className="songID">{song.id + 1}</div>
        <div className="songName">{song.name}</div>
        <div className="songDuration">{song.duration}</div>
        <div className="songDuration" id={`loading${song.id}`}></div>
        <div className="songDesc">{song.desc}</div>
        <div />
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
          <div className="time">00:00</div>
          <div className="playarea">
            <div className="prevSong"
              onClick={this.loadTrack.bind(this, (this.state.currentSongIndex - 1))}>
            </div>
            <div className="play"></div>
            <div className="pause"></div>
            <div className="nextSong"
              onClick={this.loadTrack.bind(this, (this.state.currentSongIndex + 1))}>
            </div>
          </div>
          <div className="soundControl"></div>
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
