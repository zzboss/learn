class MailBox extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.unreadMsg = props.unreadMsg
  }

  render () {
    return (
      <div>
        <h1>Hello!</h1>
        {
          this.unreadMsg.length > 0 &&
          <h2> You have {this.unreadMsg.length} unread message </h2>
        }
      </div>
    )
  }
}

const msgs = ["hello", "I'm fine", "think you"]
ReactDOM.render(<MailBox unreadMsg = {msgs}/>, document.getElementById('root'))