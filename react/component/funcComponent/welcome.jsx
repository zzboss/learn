function Welcome (prop) {
	return (
		<div>
			<h1>Welcom,{prop.name}</h1>
			<h2>I'm {prop.age} years old</h2>
		</div>
	)
}

const welcome = <Welcome name = 'Alex' age = '25' />

ReactDOM.render(welcome, document.getElementById('root'))