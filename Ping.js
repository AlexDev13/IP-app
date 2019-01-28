const ping=require('net-ping');
const IP=require("ip");
var tcpp = require('tcp-ping');
const DNS=require('dns');
// console.log(IP.address());
const readLine=require('readline');
// var IPAddress="192.168.137.1";
var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });


var session = ping.createSession ();




rl.question("Enter your DNS(IP): ",(answer)=>{
    DNS.lookup(answer,(err,address,family)=>{
        console.log('Address: ',address);
        console.log('family',family);
        session.pingHost (address, function (error, target) {
            if (error)
                if (error instanceof ping.RequestTimedOutError)
                    console.log (target + ": Not alive");
                else
                    console.log (target + ": " + error.toString ());
            else{
                tcpp.probe(answer, 80, function(err, available) {
                    console.log(available);
                });
                
                tcpp.ping({ address: answer }, function(err, data) {
                    console.log(data);
                });
                console.log (target + ": Alive");
            }
        });
        
    });
    rl.close();
   });


//   -------------Test-----------------------------------Test-----------------------------------
