// Object.keys(Buffer).forEach(key => console.log(key))

const hexBuf = Buffer.from([1, 16, 20])
console.log(hexBuf.toString('hex'))

const strBuf = Buffer.from('Hello World')
console.log(strBuf.toString('ascii'))

// 默认填充 0
const allocBuf = Buffer.alloc(10)
console.log(allocBuf.toString('hex'))

// 空间大小为 10, 多余部分不会写入缓存,这里存储汉字使用 utf-8, 一个汉字 3 个字节，多余部分不存储
const writableBuf = Buffer.alloc(10)
const len = writableBuf.write('你好-世界')
console.log(writableBuf.toString() + ' -len:' + len)

// 可以直接转Json, 数据以字节形式展示
console.log(writableBuf.toJSON())