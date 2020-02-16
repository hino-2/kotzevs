import React, {Component} from 'react'

export default class CircleMenu extends Component {
  state = {
    isOpen: false
  }

  toggleExpand = () => {
    console.log(this.state.isOpen);
    if(!this.state.isOpen){
      document.getElementById("menu").style.transform="scale(3)";
      document.getElementById("plus").style.transform="rotate(45deg)";
      this.setState({ isOpen: true })
      console.log('open');
    } else {
      document.getElementById("menu").style.transform="scale(0)";
      document.getElementById("plus").style.transform="rotate(0deg)";
      this.setState({ isOpen: false })
      console.log('close');
    }
  }

  render () {
    return (
      <div>
        <div className="toggle" id="toggle" onClick={this.toggleExpand}>
          <i className="fa fa-plus" id="plus"></i>
        </div>
        <div className="menu" id="menu">
          <a href="#">
            <i className="fa fa-microphone"></i>
          </a>
           <a href="#">
            <i className="fa fa-user"></i>
          </a>
          <a href="#">
            <i className="fa fa-video-camera"></i>
          </a>
          <a href="#">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="#">
            <i className="fa fa-camera"></i>
          </a>
          <a href="#">
            <i className="fa fa-bell"></i>
          </a>
        </div>
      </div>
    )
  }
}
