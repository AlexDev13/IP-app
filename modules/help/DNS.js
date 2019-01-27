const DNS=require('dns');
const readLine=require('readline');
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Enter your domen: ",(answer)=>{
    DNS.lookup(answer,(err,address,family)=>{
        console.log('Address: ',address);
        console.log('family',family);
    });
    rl.close();
  });
  console.log()