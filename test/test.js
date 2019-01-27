var PingApp=require('../modules/Ping');
const ping=require('net-ping');
const IP=require("ip");
var tcpp = require('tcp-ping');
const DNS=require('dns');
const readLine=require('readline');var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
// console.log(IP.address());
describe("Определить IP адрес по имени сайта : ",function(){
     it("Должен вернуть адрес сайта и Семейство записей: ",function(){
        rl.question("Enter your domen: ",(answer)=>{
            DNS.lookup(answer,(err,address,family)=>{
                console.log('Address: ',address);
                console.log('family',family);
            });
            rl.close();
          });
     })
});

describe("IP",function(){
    it("Проверяет на истинность введенного IP(по умолчанию-192.168.137.1): ",function(){
        rl.question("Enter your IP: ",(answer)=>{
            if(answer==IPAddress){
                console.log("Your IP is correctly!",IPAddress);
            }
            else{
                console.log("Error!!!");
                
            }
             rl.close();
           });
    });
});

describe("TCP/IP",function(){
    it("Должен вернуть некоторые данные об адресе: ",function(){

        tcpp.probe('64.233.165.101', 80, function(err, available) {
            console.log(available);
        });
        
        tcpp.ping({ address: '64.233.165.101' }, function(err, data) {
            console.log(data);
        });
    });

});
