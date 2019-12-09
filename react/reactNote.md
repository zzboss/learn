# tip

- 通过state更新组件状态使用 setState(Object) , 使用 this.state.xx 的形式并不会更新页面

``` JavaScript
// right
this.setState({date: new Date})

// error
this.state.date = new Date()
```

- 通过 setState 更新状态时, 会将属性合并

```JavaScript

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

- 回调函数中的 this: 为了保证组件中声明事件时的 this 可用, 可通过两种方式处理(还有一种不推荐, 不做记录)

  - 在构造函数中绑定 this
  
  ```JavaScript
    this.handleClick = this.handleClick.bind(this)
  ```

  - public class field 语法(文档上说是实验性语法，现在不知道转正没有), 通过 create-react-app 工具创建的 react 项目默认启动此语法

  ```JavaScript

    handleClick = () => {
      console.log('this is' + this)
    }

  ```
