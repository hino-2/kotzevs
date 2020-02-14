import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../features'
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
  state = {
    reverted: false
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">
            Я приложенье
            <button className="btn btn-primary btn-lg float-right" onClick={this.revert}>
              Revert
            </button>
          </h1>
        </div>
          <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles} />
      </div>
    )
  }

  revert = () => {
    this.setState({
      reverted: this.state.reverted ? false : true
    })
    //console.log(this.state.reverted);
  }

}

export default App
