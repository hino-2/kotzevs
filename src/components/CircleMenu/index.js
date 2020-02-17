import React, {Component} from 'react'
import './style.css'

export default class CircleMenu extends Component {
  constructor() {
    super();
    this.updatePosition = this.updatePosition.bind(this);
  }

  calcX = () => { return 410 * window.innerWidth / 1200 }
  calcY = () => { return 335 * window.innerWidth / 1200 }

  state = {
    isOpen: false,
    xTog: this.calcX(),
    yTog: this.calcY(),
    xMenu: this.calcX() - 28,
    yMenu: this.calcY() - 28,
    width: window.innerWidth
  }

  toggleExpand = () => {
    if(!this.state.isOpen){
      document.getElementById("menu").style.transform="scale(2)";
      document.getElementById("plus").style.transform="rotate(45deg)";
      this.setState({ isOpen: true })
    } else {
      document.getElementById("menu").style.transform="scale(0)";
      document.getElementById("plus").style.transform="rotate(0deg)";
      this.setState({ isOpen: false })
    }
  }

  updatePosition = () => {
    if(window.innerWidth != this.state.width) {
      this.setState({
        xTog: this.calcX(),
        yTog: this.calcY(),
        xMenu: this.calcX() - 28,
        yMenu: this.calcY() - 28,
        width: window.innerWidth
      });
    }
  }

  componentDidMount() {
    this.updatePosition();
    window.addEventListener("resize", this.updatePosition.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePosition.bind(this));
  }

  render () {
    return (
      <div>
        <div className="toggle" id="toggle"
             onClick={this.toggleExpand}
             style={{"--x": this.state.xTog + "px", "--y": this.state.yTog + "px"}}>
          <i className="fa fa-plus" id="plus"></i>
        </div>
        <div className="menu" id="menu"
             style={{"--x": this.state.xMenu + "px", "--y": this.state.yMenu + "px"}}>
          <a href="http://localhost:3000/" title="Песни">
            <i className="fa fa-microphone"></i>
          </a>
          <a href="tg://resolve?domain=Zeus_catbot" title="Я в телеграме">
            <i className="fa fa-telegram"></i>
          </a>
          <a href="http://localhost:3000/">
            <i></i>
          </a>
          <a href="http://localhost:3000/" title="Мой хозяин">
            <i className="fa fa-user"></i>
          </a>
          <a href="http://localhost:3000/">
            <i></i>
          </a>
          <a href="http://localhost:3000/" title="Фото">
            <i className="fa fa-camera-retro"></i>
          </a>
        </div>
      </div>
    )
  }
}
