const http=require('http');
const axios=require('axios');
const port=3001;
const server=http.createServer(async(req,res)=>{
    console.log('New request received');
    res.writeHead(200,{'content-type':'text/html'});
    const response=await axios.get('https://api.github.com/search/users',{
        params:{
            q:"location:ghaziabad"
        }
    });
    const productsdata=response.data.items;
    let frontdata=`<html><head></head><body>`
    productsdata.forEach((product)=>{
        frontdata+=`<div><img src="${product.avatar_url}"</div>`
    });
    frontdata+=`</body></html>`
    res.end(frontdata);
});
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});