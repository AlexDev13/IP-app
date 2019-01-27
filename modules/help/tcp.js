var tcpp = require('tcp-ping');

tcpp.probe('192.168.137.1', 80, function(err, available) {
    console.log(available);
});

tcpp.ping({ address: '192.168.137.1' }, function(err, data) {
    console.log(data);
});