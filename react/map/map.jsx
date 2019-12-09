function ListItem (props) {
  return (
    <li>{props.value}</li>
  )
}

class NumberList extends React.Component {
  constructor (props) {
    super(props)
    this.nums = props.nums
  }

  render () {
    return (
      <div>
        {this.nums.map((n) => (<ListItem value = {n} />))}
      </div>
    )
  }
}
const nums = [1, 2, 3, 4, 5]
ReactDOM.render (<NumberList nums = {nums} />, document.getElementById('root')) 