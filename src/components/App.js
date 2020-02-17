import React, {PureComponent} from 'react'
import CircleMenu from './CircleMenu'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

class App extends PureComponent {

  render() {
    return (
      <div className="">
        <div className="container bg-warning" style={{"margin-top": "20px"}}>
          <h1 style={{"margin-left": "50px"}}>привет я Зевс жми мне на нос</h1>
        </div>
        <CircleMenu />
      </div>
    )
  }
}

export default App
