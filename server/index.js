// 开启一个服务
const express = require('express')
const app = express()

app.listen(3001, () => {
  console.log("app is listening port at 3001")
})