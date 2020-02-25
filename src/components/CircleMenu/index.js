import React, {Component} from 'react'
import './style.css'
import Photos from '../Photos'
import Music from '../Music'
import Player from '../Music/player'     // чтобы тормозить музон при показе меню

export default class CircleMenu extends Component {
  constructor() {
    super();
    this.updatePosition = this.updatePosition.bind(this);
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

  updatePosition = () => {
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
    Player.pause();
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
    this.updatePosition();
    window.addEventListener("resize", this.updatePosition.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePosition.bind(this));
  }

  render () {
    if(this.state.mode == 0) {
      return (
        <div>
            <nav className="menu" style={{"--x": this.state.xMenu + "px", "--y": this.state.yMenu + "px"}}>
              <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
              <label className="menu-open-button" htmlFor="menu-open">
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
              </label>

              <a href="#" onClick={this.showMusic} className="menu-item"> <i className="fa fa-microphone"></i> </a>
              <a href="tg://resolve?domain=Zeus_catbot" className="menu-item"> <i className="fa fa-telegram"></i> </a>
              <a href="#" className="menu-item" style={{"width": "0"}}></a>
              <a href="http://localhost:3000/" className="menu-item"> <i className="fa fa-user"></i> </a>
              <a href="#" className="menu-item" style={{"width": "0"}}></a>
              <a href="#" onClick={this.showPhotos} className="menu-item"> <i className="fa fa-camera-retro"></i> </a>
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
    if(this.state.mode == 1) {
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
    if(this.state.mode == 2) {
      return (
        <div>
          <div className="close-button">
            <button onClick={this.showMenu}><i className="fa fa-times"></i></button>
          </div>
          <div>
            <Music />
          </div>
        </div>
      )
    }
  }
}
