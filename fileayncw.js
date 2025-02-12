const fs=require('fs/promises');
const write=async ()=>{
    const newdata= "this is my new work";
    await fs.writeFile("./data1.txt",newdata,"utf-8");

}
write();
