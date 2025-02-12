const { promises } = require('dns');
const http=require('http'); 
const fs=require('fs/promises');
const server =http.createServer(async (req,res)=>
{
    const data= await fs.readFile("./home.html","utf-8");
    console.log(req.url);
    res.statusCode= 200;
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello,world</h1>');
    res.end(data);
});
PORT= 3003;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})