class ShowEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 'you can input a value'
    }
    this.changeInput.bind(this);
  }

  changeInput () {
    const val = ReactDOM.findDOMNode(this.refs.input).value;
    this.setState({
      value: val
    });
  }
  render () {
    return (
      <div>
        <h3>输入</h3>
        <textarea type="text" ref="input" onChange={this.changeInput.bind(this)}
          defaultValue = {this.state.value}/>
        <h3>输出</h3>
        <div>
          {this.state.value}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<ShowEditor/>,document.getElementById('root'))