class TemperatureInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onTemperatureChange(e.target.value, this.props.scaleName)
  }

  render () {
    const temperature = this.props.temperature
    const scaleName = this.props.scaleName
    return (
      <fieldset>
        <legend>Please input temperature in {scaleName}</legend>
        <input type="number" value = {temperature} onChange = {this.handleChange}/>
      </fieldset>
    )
  }
}