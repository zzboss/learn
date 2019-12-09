function UserGreeting (props) {
  return (
    <h1>Welcome back</h1>
  )
}

function GuestGreeting (props) {
  return (
    <h1>Please sign up</h1>
  )
}

function Greeting (props) {
  const isLogin = props.isLogin
  return isLogin ? <UserGreeting /> : <GuestGreeting />
}
