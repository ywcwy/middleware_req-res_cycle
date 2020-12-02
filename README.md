# middleware_req-res_cycle

在路由中加入 middleware，讓伺服器接到瀏覽器傳來的 HTTP request時，會自動把資訊記錄到 server log 中。
當回應伺服器後馬上存入回應的時間並印出req-res cycle之間的時間差。

![Image](https://raw.githubusercontent.com/ywcwy/middleware_req-res_cycle/master/middleware_req-res_cycle.png)


## Features
* server log會記錄以下：
1. 時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
2. HTTP request Method
3. URL
4. 中間req-res cycle的時間差

## Environment
* Node.js

## Packages
* express


## Install (for Mac OS user)
### 1. Open Terminal

### 2. Project Download
```
$git clone https://github.com/ywcwy/middleware_req-res_cycle.git
```
After download, 
```
$cd middleware_req-res_cycle     // to install the following Packages under this directory
```
### 3. npm Installation
```
$npm init -y     // create and initialize package.json directory
```
### 4. Package Installation
```
$npm install     // install all the Packages
```
### 5. Project Implement
```
$npm run dev   
```
### 6. Project Start 
```
App running on port 3000     // if start working, termianl will show this message
```
### 7. Go to the page "localhost:3000"
