//安装express包，引用
const express = require('express');
const app = express();
//设置根目录
app.use(express.static(__dirname+'/public'));

//服务器后端需要设置对编码形式的解析，同样的前端设置请求头也要告诉服务器用的是何种编码形式

//用于对编码形式urlencoded的请求体做解析
// app.use(express.urlencoded({extended:true}));

//用于对json形式的请求体做解析
app.use(express.json());

app.get('/getone',(request,response)=>{
    console.log('我是第一个请求');
    response.send('hello ajax');
})

app.post('/gettwo',(request,response)=>{
    console.log('我是gettwo的请求体参数',request.body);
    response.send('我是gettwo的响应');
})

app.listen(8080,()=>{
    console.log('服务器已经开启，测试地址如下');
    console.log('http://127.0.0.1:8080/getone.html');
    console.log('http://127.0.0.1:8080/gettwo.html');
});