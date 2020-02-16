import React, {PureComponent} from 'react'
// import ArticleList from './ArticleList'
// import articles from '../features'
import CircleMenu from './CircleMenu'
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
  state = {
    reverted: false
  }

  render() {
    return (
      <div className="container text-center">
        <CircleMenu />
      </div>
    )
  }
}

export default App
