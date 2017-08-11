var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.json()) //use专门使用中间件的方法
app.use(bodyParser.urlencoded({ //使用url编码来处理form表单提交的post请求
   extended: true
}))


app.get("/index",function(req,res){
  console.log(req.body)
   res.json({
        		
   });
})


app.listen(8090,function(){
   console.log("启动成功！")
});