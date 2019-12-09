function LoginButton (props) {
  return (
    <button onClick = {props.onClick}>
      login
    </button>
  )
}

function LogoutButton (props) {
  return (
    <button onClick = {props.onClick}>
      logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loginState: false
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }


  handleLogin () {
    this.setState({
      loginState: true
    })
  }

  handleLogout () {
    this.setState({
      loginState: false
    })
  }

  render () {
    let loginState = this.state.loginState
    let button = loginState ? <LogoutButton onClick = {this.handleLogout}/>
      : <LoginButton onClick = {this.handleLogin}/>
    
    return (
      <div>
        <Greeting isLogin = {loginState}/>
        {button}
      </div>
    )
  }
}

ReactDOM.render (<LoginControl />, document.getElementById('root'))