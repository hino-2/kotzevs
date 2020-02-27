import React, {Component} from 'react'
import './style.css'
import photoList from './list'

export default class Photos extends Component {


  UNSAFE_componentWillMount() {
    setTimeout(function() { document.getElementById('header').innerHTML = photoList[0].header; }, 100);
  }

  photosBtnClick = id => {
    if(photoList[id-1])
      setTimeout(function() { document.getElementById('header').innerHTML = photoList[id-1].header; }, 500);
  }
  // <button className="carousel__prev btn1" onClick={this.photosBtnClick.bind(this, parseInt(photo.id - 1))}>
  // <i className="fa fa-user"></i>
  // </button>
  // <button className="carousel__next btn1" onClick={this.photosBtnClick.bind(this, parseInt(photo.id + 1))}>
  // <i className="fa fa-user"></i>
  // </button>

  render() {
    const photos = photoList.map((photo, index) =>
      <li key={photo.id} id={"carousel__slide" + parseInt(photo.id)} tabIndex="0" className="carousel__slide">
        <div className="carousel__snapper">
          <img src={photo.url} className="photo" alt="" />
          <a href={"#carousel__slide" + (photo.id - 1 < 1 ? photoList.length : photo.id - 1)}
            className="carousel__prev"
            onClick={this.photosBtnClick.bind(this, (photo.id - 1 < 1 ? photoList.length : photo.id - 1))}><font style={{"color": "transparent"}}>a</font></a>
          <a href={"#carousel__slide" + (photo.id + 1 > photoList.length ? "1" : photo.id + 1)}
            className="carousel__next"
            onClick={this.photosBtnClick.bind(this, (photo.id + 1 > photoList.length ? "1" : photo.id + 1))}><font style={{"color": "transparent"}}>a</font></a>
        </div>
      </li>
    )
    return (
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          {photos}
        </ol>
      </section>
    );
  }
}
