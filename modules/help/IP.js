const IP=require("ip");
var tcpp = require('tcp-ping');
console.log(IP.address());
const readLine=require('readline');
var IPAddress="192.168.137.1";
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("Enter your IP: ",(answer)=>{
   if(answer==IPAddress){
       console.log("Your IP is correctly!",IPAddress);
   }
   else{
       console.log("Error!!!");
       
   }
    rl.close();
  });