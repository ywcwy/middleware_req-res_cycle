const express = require('express')
const app = express()
const port = 3000
const dateDisplayed = function () {
  let date = new Date() // 建立時間
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (date.getFullYear() + ' - ' + (date.getMonth() + 1) + ' - ' + date.getDate() + ' ' + day[date.getDay()] + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
}
let req_time = '' // 接到請求的時間
let res_time = '' // 回覆的時間



app.use('/', function (req, res, next) {
  // 接到request後，
  // console.log出接到任務的時間
  req_time = Date.now()
  console.log(dateDisplayed(req_time) + ' | ' + req.method + ' from ' + req.originalUrl)


  // 當回應後，馬上將回應的時間(Date.now())印出
  // 並與req_time相減計算出時間差
  res.on('finish', () => {
    res_time = Date.now()
    let duration = res_time - req_time
    console.log(dateDisplayed(res_time) + ' | ' + req.method + ' from ' + req.originalUrl + ' | ' + ' total time: ' + duration + 'ms')
  })

  //middleware把任務傳給下一位
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/save', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})



