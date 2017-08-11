require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
app.get("/index",function(req,res){

   res.json({
        laaa:[
            {id:"1",url:"http://i3.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/99525cf795e4477287d62b5849e40c54_0.jpg"},
            {id:"1",url:"http://i4.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/99525cf795e4477287d62b5849e40c54_128.jpg"},
            {id:"1",url:"http://i5.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/99525cf795e4477287d62b5849e40c54_256.jpg"},
             {id:"2",url1:"http://i7.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/acfae5a5479147a48499a26a5a459331_0.jpg"},
             {id:"2",url1:"http://i0.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/acfae5a5479147a48499a26a5a459331_128.jpg"},
             {id:"2",url1:"http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/acfae5a5479147a48499a26a5a459331_256.jpg"},
             {id:"2",url1:"http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/acfae5a5479147a48499a26a5a459331_384.jpg"},
             {id:"3",url2:"http://i6.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170718/cut/586a945e0ec447dfaf894a72599d2b40_0.jpg"},
             {id:"3",url2:"http://i7.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170718/cut/586a945e0ec447dfaf894a72599d2b40_128.jpg"},
             {id:"3",url2:"http://i0.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170718/cut/586a945e0ec447dfaf894a72599d2b40_256.jpg"},
             {id:"4",url3:"http://i1.mbscss.com/img/decorate/10/97a112115b3a49afbf58659535327258/20170711/cut/e71f552a34c042cbb84488b038788fd2_0.jpg"},
             {id:"4",url3:"http://i2.mbscss.com/img/decorate/10/97a112115b3a49afbf58659535327258/20170711/cut/e71f552a34c042cbb84488b038788fd2_128.jpg"},
             {id:"4",url3:"http://i3.mbscss.com/img/decorate/10/97a112115b3a49afbf58659535327258/20170711/cut/e71f552a34c042cbb84488b038788fd2_256.jpg"},
             {id:"4",url3:"http://i3.mbscss.com/img/decorate/10/97a112115b3a49afbf58659535327258/20170711/cut/e71f552a34c042cbb84488b038788fd2_256.jpg"},
             {id:"top5",url5:"http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/7fe77f32fb114510b1e53bdb488048f7_0.jpg"},
             {id:"top5",url5:"http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/7fe77f32fb114510b1e53bdb488048f7_128.jpg"},
             {id:"top5",url5:"http://i3.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/7fe77f32fb114510b1e53bdb488048f7_256.jpg"},

             {id:"top6",url6:"http://i4.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170413/cut/67af53304e314f69a908743d9a32adc9_0.jpg"},
             {id:"top6",url6:"http://i5.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170413/cut/67af53304e314f69a908743d9a32adc9_128.jpg"},
             {id:"top7",url7:"http://i7.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170704/cut/43649e15442f42089eb790c28afddac2_0.jpg"},
             {id:"top7",url7:"http://i0.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170704/cut/43649e15442f42089eb790c28afddac2_128.jpg"},
             {id:"top8",url8:"http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170704/cut/7eaed991fd7c4edabe5f5410202211de_0.jpg"},
             {id:"top8",url8:"http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170704/cut/7eaed991fd7c4edabe5f5410202211de_128.jpg"}

        ]       
   });
})
 
app.get("/api/index",function(req,res){

   res.json({
        ls:[
         {url1:"http://i4.mbscss.com/img/decorate/10/15569b3d43d34ee4ae9ce6f58ec612e4/20170801/cut/676cafc42cc04b8fbd7c21eaa04c5947_0.png"},
        {url1:"http://i5.mbscss.com/img/decorate/10/15569b3d43d34ee4ae9ce6f58ec612e4/20170801/cut/676cafc42cc04b8fbd7c21eaa04c5947_128.png"},
         {url1:"http://i6.mbscss.com/img/decorate/10/15569b3d43d34ee4ae9ce6f58ec612e4/20170801/cut/676cafc42cc04b8fbd7c21eaa04c5947_256.png"},
         {url2:"http://i0.mbscss.com/img/decorate/10/97a112115b3a49afbf58659535327258/20160531/4deaa50b332b4283acfe39719f9754d8_source.jpg"},
         {url2:"http://i1.mbscss.com/img/decorate/10/15569b3d43d34ee4ae9ce6f58ec612e4/20170801/cut/158980cd45034168841225a970428a8f_0.jpg"},
         {url2:"http://i2.mbscss.com/img/decorate/10/15569b3d43d34ee4ae9ce6f58ec612e4/20170801/cut/158980cd45034168841225a970428a8f_128.jpg"},
         {url2:"http://i3.mbscss.com/img/decorate/10/15569b3d43d34ee4ae9ce6f58ec612e4/20170801/cut/158980cd45034168841225a970428a8f_256.jpg"},
         {url2:"http://i4.mbscss.com/img/decorate/10/15569b3d43d34ee4ae9ce6f58ec612e4/20170801/cut/158980cd45034168841225a970428a8f_384.jpg"},
         {url3:"http://i6.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/4befef98bde64d49a20c19b7b4428aac_0.jpg"},
         {url3:"http://i7.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/4befef98bde64d49a20c19b7b4428aac_128.jpg"},
         {url4:"http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/7fe77f32fb114510b1e53bdb488048f7_0.jpg"},
         {url4:"http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/7fe77f32fb114510b1e53bdb488048f7_128.jpg"},
         {url4:"http://i3.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/cut/7fe77f32fb114510b1e53bdb488048f7_256.jpg"},
         {url5:"http://i4.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_0.jpg"},
         {url5:"http://i5.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_128.jpg"},
         {url5:"http://i6.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_256.jpg"},
         {url5:"http://i7.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_384.jpg"},
         {url6:"http://i0.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_512.jpg"},
         {url6:"http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_640.jpg"},
         {url6:"http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_768.jpg"},
         {url6:"http://i3.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_896.jpg"},
         {url6:"http://i4.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_1024.jpg"},
         {url7:"http://i5.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_1152.jpg"},
         {url7:"http://i6.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_1280.jpg"},
         {url7:"http://i7.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_1408.jpg"},
         {url7:"http://i0.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_1536.jpg"},
         {url7:"http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/bfa5a2325d5d4fd89d637f8592450b52_1664.jpg"}
        ]       
   });
})
app.get("/api",function(req,res){

   res.json({
        lsl:[
        {id:"1",url1:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117203-010-03-LL.jpg",
        url2:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117203-009-04-LL.jpg"
        ,url3:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117203-010-01-LL.jpg"
        ,url4:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117203-010-02-LL.jpg"
        ,url5:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117203-009-01-LL.jpg"
        ,url6:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117203-010-02-LL.jpg"},
        
        {id:"2",url1:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117209-802-01-LL.jpg",
          url2:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117209-009-01-LL.jpg"
        ,url3:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117209-802-02-LL.jpg"
        ,url4:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117209-009-03-LL.jpg"
        ,url5:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117209-802-03-LL.jpg"
        ,url6:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117209-009-04-LL.jpg"},
        
        {id:"3",
        url1:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117221-151-01-LL.jpg"
        ,url2:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117221-151-02-LL.jpg"
        ,url3:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117221-151-03-LL.jpg"
        ,url4:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117221-151-04-LL.jpg"
        ,url5:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117221-151-05-LL.jpg"
        ,url6:"http://images.moonbasa.com/ProductImg/1/1702/llarge/467117221-151-06-LL.jpg"},
        
        {id:"4",
        url1:"http://images.suorang.com/ProductImg/9/1702/llarge/187117220-SSL-01-LL.jpg"
        ,url2:"http://images.suorang.com/ProductImg/9/1702/llarge/187117220-SSL-02-LL.jpg"
        ,url3:"http://images.suorang.com/ProductImg/9/1702/llarge/187117220-SSL-03-LL.jpg"
        ,url4:"http://images.suorang.com/ProductImg/9/1702/llarge/187117220-SSL-04-LL.jpg"
        ,url5:"http://images.suorang.com/ProductImg/9/1702/llarge/187117220-SSL-05-LL.jpg"
        ,url6:"http://images.suorang.com/ProductImg/9/1702/llarge/187117220-SSL-03-LL.jpg"}
        ]      
   });
})
app.get('/cart',function(req,res){
  res.json({
        list:[
          {id:"1",url:"http://images.moonbasa.com/ProductImg/1/1702/middle/467117203-009-01-M.jpg"
          ,dl:"199",kl:"圆领荷叶边中袖收腰A摆蕾丝连衣裙",ul:["黑色","白色"],cm:["XL","L","M"]},
          {id:"2",url:"http://vp1.mbsimg.com/ProductImg/97/1702/middle/970138828-CL01-01-M.jpg"
          ,dl:"299",kl:"夏装欧美风印花烫钻雪纺连衣裙",ul:["黄色","黑色","粉色"],cm:["XL"]},
          {id:"3",url:"http://images.moonbasa.com/ProductImg/1/1702/middle/467117221-151-01-M.jpg"
          ,dl:"599",kl:"原创文艺丝麻水墨印花改良式旗袍连衣裙",ul:["松树绿","墨竹绿"],cm:["L","M"]},
          {id:"4",url:"http://images.suorang.com/ProductImg/9/1702/middle/187117220-SSL-01-M.jpg"
          ,dl:"399",kl:"圆领章仔刺绣经典黑白条纹后背镂空休闲连衣裙",ul:["黑白条纹","虹彩黑底纹"],cm:["XL","M"]}
        ]
  })
})
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
