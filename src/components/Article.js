import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
  constructor (props) {
    super (props)

    this.state = {
      // isOpen: props.defaultOpen,
      count: 0
    }
  }

  // state = {
  //   isOpen: true
  // }

  componentWillMount() {
    console.log('mounting');
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
  //     isOpen: nextProps.defaultOpen
  //   })
  // }

  componentWillUpdate(nextProps, nextState) {

  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isOpen !== nextState.isOpen
  // }

  render () {
    const {article, isOpen, onButtonClick} = this.props
    const body = isOpen && <section className="card-text">{article.text}</section>
    return (
      <div className="card mx-auto" style={{width: '50%'}}>
        <div className="card-header">
          <h2 onClick={this.incrementCounter}>
            {article.title}&nbsp;
            clicked {this.state.count}
            <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
              {isOpen ? 'close' : 'open'}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            {(new Date(article.date).toDateString())}
          </h6>
          {body}
        </div>
      </div>
    )
  }

  handleClick = () => {
    // this.setState({
    //   isOpen: !this.state.isOpen
    // })
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default Article
