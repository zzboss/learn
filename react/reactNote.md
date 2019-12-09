# tip

- 通过state更新组件状态使用 setState(Object) , 使用 this.state.xx 的形式并不会更新页面

``` javaScript
// right
this.setState({date: new Date})

// error
this.state.date = new Date()
```

- 通过 setState 更新状态时, 会将属性合并

```javaScript

// 构造方法初始化状态
constructor () {
  super(this.props)
  this.state = {
    name: 'Anny',
    age: 18,
    dog: 'Jack'
  }
}

// 通过某个函数调用更新此状态时，name 的更新会被合并到state中，age、dog 等属性保留
doSomeThing () {
  this.setState({
    name: 'Tom'
  })
}

```
