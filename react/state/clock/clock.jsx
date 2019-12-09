class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date().toLocaleString() 
    }
  }

  componentDidMount () {
    this.timeId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timeId)
  }

  tick () {
    this.setState({
      date: new Date().toLocaleString()
    })
  }

  render () {
    return (
      <div>
        <h1>this is a clock</h1>
        <h2>now is {this.state.date}</h2>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))