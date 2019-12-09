function WarningBanner (props) {
  return props.warn ? (<div>Warning</div>) : null
}

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      warn: true
    }
    this.toggleToShow = this.toggleToShow.bind(this)
  }

  toggleToShow () {
    this.setState({
      warn: !this.state.warn
    })
  }

  render () {
    return (
      <div>
        <WarningBanner warn = {this.state.warn} />
        <button onClick = {this.toggleToShow}>
          {this.state.warn ? 'show' : 'hiden'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById('root'))