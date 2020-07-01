function BoilingVerdict (props) {
  return (
    <p>
      {props.celsius > 100 ? 'The water is boiling' : 'The water is not boiling'}
    </p>
  )
}

class Caculator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: '0',
      scaleName: 'Ceisius'
    }
  }

  handleChange = (temperature, scaleName) => {
    this.setState({
      temperature: temperature,
      scaleName: scaleName
    })
  }

  render () {
    const temperature = this.state.temperature
    const celsius = this.state.scaleName === 'Ceisius' ? temperature : ((temperature - 32) * 5 / 9)
    const fahrenheit = this.state.scaleName === 'Fahrenheit' ? temperature : ((temperature * 9 / 5) + 32)
    return (
      <div>
        <TemperatureInput temperature = {parseInt(celsius)} scaleName = 'Ceisius' 
          onTemperatureChange = {this.handleChange} />
        <TemperatureInput temperature = {parseInt(fahrenheit)} scaleName = 'Fahrenheit' 
          onTemperatureChange = {this.handleChange} /> 
        <BoilingVerdict celsius = {parseInt(celsius)} /> 
      </div>
    )
  } 
}

ReactDOM.render (<Caculator />, document.getElementById('root'))