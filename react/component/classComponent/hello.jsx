class Hello extends React.Component {
    render () {
      return (
        <div>
          <h1>hello,{this.props.name}. </h1>
          <h1>Where are you going?</h1>
          <h1>I'm going to {this.props.address}</h1>
        </div>
      )
    }
}

ReactDOM.render (<Hello name = 'Davis' address = 'America'/>,document.getElementById('root'))