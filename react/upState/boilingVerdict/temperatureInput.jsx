class TemperatureInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    let val = e.target.value
    val = parseInt(val)
    val = Number.isNaN(val) ? 0 : val
    this.props.onTemperatureChange(val, this.props.scaleName)
  }

  render () {
    const temperature = this.props.temperature
    const scaleName = this.props.scaleName
    return (
      <fieldset>
        <legend>Please input temperature in {scaleName}</legend>
        <input value = {temperature} onChange = {this.handleChange}/>
      </fieldset>
    )
  }
}