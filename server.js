const http = require('http');

let users = [
    {id:1,name:'bory1'},
    {id:2,name:'bory2'},
    {id:3,name:'bory3'}
]
const server =http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    if(req.url == '/api/users'){
        res.end(JSON.stringify(users));
    }else{
        res.end('Not found')
    }
})

server.listen('3000',()=>{
    console.log('后端API接口服务器已经启动在3000端口上')
})