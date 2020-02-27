import React, {Component} from 'react'
import './style.css'
import Photos from '../Photos'
import Music from '../Music'
import Player from '../Music/player'     // чтобы тормозить музон при показе меню
import Master from '../Master'

export default class CircleMenu extends Component {
  constructor() {
    super();
    this.updateMenuPosition = this.updateMenuPosition.bind(this);
    this.getMusicList();
  }

  async getMusicList() {
    let response = await fetch('/music/list.json');
    await response.json()
    .then(data => { this.setState({ musicList: data }) });
  }

  calcX = () => { return (410 * window.innerWidth / 1200) - 5 }
  calcY = () => { return (335 * window.innerWidth / 1200) - 10 }

  // mode:
  // 0 - menu
  // 1 - photos
  // 2 - music
  // 3 - master

  state = {
    width: window.innerWidth,
    mode: 0,
    header: "привет я Зевс плз нажми на нос",
    xMenu: this.calcX(),
    yMenu: this.calcY()
  }

  updateMenuPosition = () => {
    if(window.innerWidth !== this.state.width) {
      this.setState({
        xMenu: this.calcX(),
        yMenu: this.calcY(),
        width: window.innerWidth
      });
    }
  }

  showMenu = () => {
    this.setState({ mode: 0 });
    document.getElementById('header').innerHTML = this.state.header;
    if(this.state.mode === 2) Player.pause();
  }

  showPhotos = () => {
    this.setState({ mode: 1 });
  }

  showMusic = () => {
    this.setState({ mode: 2 });
  }

  showMaster = () => {
    this.setState({ mode: 3 });
  }

  UNSAFE_componentWillMount() {
    document.getElementById('header').innerHTML = this.state.header;
  }

  componentDidMount() {
    this.updateMenuPosition();
    window.addEventListener("resize", this.updateMenuPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMenuPosition);
  }

  render () {
    if(this.state.mode === 0) {
      return (
        <div>
            <nav className="menu" style={{"--x": this.state.xMenu + "px", "--y": this.state.yMenu + "px"}}>
              <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
              <label className="menu-open-button" htmlFor="menu-open">
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
              </label>

              <button onClick={this.showMusic} className="menu-item"> <i className="fa fa-microphone"></i> </button>
              <button onClick={() => window.location = 'tg://resolve?domain=Zeus_catbot'} className="menu-item"> <i className="fa fa-telegram"></i> </button>
              <button className="menu-item" style={{"display": "none"}}></button>
              <button onClick={this.showMaster} className="menu-item"> <i className="fa fa-user"></i> </button>
              <button className="menu-item" style={{"display": "none"}}></button>
              <button onClick={this.showPhotos} className="menu-item"> <i className="fa fa-camera-retro"></i> </button>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="shadowed-goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                  <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                  <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                  <feComposite in2="shadow" in="goo" result="goo" />
                  <feComposite in2="goo" in="SourceGraphic" result="mix" />
                </filter>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feComposite in2="goo" in="SourceGraphic" result="mix" />
                </filter>
              </defs>
            </svg>
        </div>
      )
    }
    if(this.state.mode === 1) {
      return (
        <div>
          <div className="close-button">
            <button onClick={this.showMenu}><i className="fa fa-times"></i></button>
          </div>
          <div>
            <Photos />
          </div>
        </div>
      )
    }
    if(this.state.mode === 2) {
      return (
        <div>
          <div className="close-button">
            <button onClick={this.showMenu}><i className="fa fa-times"></i></button>
          </div>
          <div>
            <Music musicList={this.state.musicList}/>
          </div>
        </div>
      )
    }
    if(this.state.mode === 3) {
      return (
        <div>
          <div className="close-button">
            <button onClick={this.showMenu}><i className="fa fa-times"></i></button>
          </div>
          <div>
            <Master />
          </div>
        </div>
      );
    }
  }
}
