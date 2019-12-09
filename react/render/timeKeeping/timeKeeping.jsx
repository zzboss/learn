function tick() {
  const ellement = (
    <div>
      <h1>Hello,World!</h1>
      <h2>{new Date().toLocaleString()}</h2>
    </div>
  )
  ReactDOM.render(ellement, document.getElementById('root'))
}

setInterval(tick, 1000)