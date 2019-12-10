// 引入 events 模块
const events = require('events')
  // 创建 eventEmmitter 对象
const emt = new events.EventEmitter()
  // 创建 connect 事件处理程序
const connect = () => {
    console.log('client is connected')
      // 触发 receive 事件
    emt.emit('receive')
  }
  // 创建 receive 事件处理程序
const receive = () => {
    console.log('start receive data')
  }
  // 监听 connect 事件
emt.on('connect', connect)
  // 监听 reveive 事件
emt.on('receive', receive)
  // 初始化结束
console.log('finish init')
  // 触发 connect 事件
emt.emit('connect')