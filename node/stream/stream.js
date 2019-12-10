const fs = require('fs')
const zlib = require('zlib')

// 创建 readStream
const epReadStream = fs.createReadStream('./stream/ep.txt')
epReadStream.setEncoding('utf-8')

// 事件监听
epReadStream.on('end', () => console.log('end'))
epReadStream.on('data', d => console.log(d))

// 压缩文件
epReadStream.pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./stream/out.gz'))