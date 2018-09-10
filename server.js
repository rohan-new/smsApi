var express = require('express');
var http = require('http');
var Request = require("request");
var bodyParser = require('body-parser');
const path = require('path');

  var app = express();

  const port = process.env.PORT ||3000 ;
  var server =  http.createServer(app);
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const pathjoin = path.join(__dirname,'/public');

  app.get('/Users/SendSms',(req,res)=>{
    res.sendFile('public/index.html' , { root : __dirname});
  });

  app.post('/Users/SendSms',(req,res)=>{
     
    var name = req.body.key;
    var value = req.body.value;
    name = name.slice(0,-1);
    value = value.slice(0,-1);
    console.log(req.body);
    var filter = req.body.filter;
    var filter_value = req.body.filter_value; 
    
    
    var i = 0;
    while (i < name.length && filter != name[i]) {
       i++;
    }
    if(i<name.length){
        var original_value = value[i];
    }
    var j=0;
    while (j < name.length && 'number' != name[j]) {
        j++;
     }
     if(j<name.length){
         var  number = value[j];
         console.log(number);
     }
     if(number == null){
         res.send('Please specify mobile number in the incoming data');
         res.end();
     }
      var condition = req.body.operators;
      var sms_text = req.body.text;
      
      switch (condition) 
    {
       case 'Equals':
        if(original_value === filter_value ){
           Request(
               {
                url:'https://leado-mini-project-api.herokuapp.com/sendSms',
                method: 'POST',
                "headers": { "content-type": "application/json",
                "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiU2h5YW0ifQ.a9R1PRhBuYObDt3nSrkqO58emrv4-HLbVKqfz56tf5U"
                },
                body: JSON.stringify({
                    "toNumber": number,
                     "smsText": sms_text
                })
               },(error,response,body)=>{   
               }
           )
           .on('data', function(data) {
            // decompressed data as it is received
            console.log('decoded chunk: ' + data)
          })
           .on('response', function(response) {
            // unmodified http.IncomingMessage object
            response.on('data', function(data) {
              // compressed data as it is received
              console.log('received ' + data.length + ' bytes of compressed data')
            })
          })
    }else{
        res.send('Cart Value does not match with the filtered value' );
    }
       
       break;

       case 'Greater Than':
       if(original_value > filter_value ){
        Request(
            {
             url:'https://leado-mini-project-api.herokuapp.com/sendSms',
             method: 'POST',
             "headers": { "content-type": "application/json",
             "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiU2h5YW0ifQ.a9R1PRhBuYObDt3nSrkqO58emrv4-HLbVKqfz56tf5U"
             },
             body: JSON.stringify({
                 "toNumber": number,
                  "smsText": sms_text
             })
            },(error,response,body)=>{   
            }
        )
        .on('data', function(data) {
         // decompressed data as it is received
         console.log('decoded chunk: ' + data)
       })
        .on('response', function(response) {
         // unmodified http.IncomingMessage object
         response.on('data', function(data) {
           // compressed data as it is received
           console.log('received ' + data.length + ' bytes of compressed data')
         })
       })
            }else{
                res.send('Cart Value does not match with the filtered value' );
            }
           break;

       case 'Less Than':
       if(original_value < filter_value ){
        Request(
            {
             url:'https://leado-mini-project-api.herokuapp.com/sendSms',
             method: 'POST',
             "headers": { "content-type": "application/json",
             "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiU2h5YW0ifQ.a9R1PRhBuYObDt3nSrkqO58emrv4-HLbVKqfz56tf5U"
             },
             body: JSON.stringify({
                 "toNumber": number,
                  "smsText": sms_text
             })
            },(error,response,body)=>{   
            }
        )
        .on('data', function(data) {
         // decompressed data as it is received
         console.log('decoded chunk: ' + data)
       })
        .on('response', function(response) {
         // unmodified http.IncomingMessage object
         response.on('data', function(data) {
           // compressed data as it is received
           console.log('received ' + data.length + ' bytes of compressed data')
         })
       })
    }else{
        res.send('Filtered value doesnt match');
    }
        
    
       break;

       case 'Not Equals':
       if(original_value != filter_value ){
        Request(
            {
             url:'https://leado-mini-project-api.herokuapp.com/sendSms',
             method: 'POST',
             "headers": { "content-type": "application/json",
             "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiU2h5YW0ifQ.a9R1PRhBuYObDt3nSrkqO58emrv4-HLbVKqfz56tf5U"
             },
             body: JSON.stringify({
                 "toNumber": number,
                  "smsText": sms_text
             })
            },(error,response,body)=>{   
            }
        )
        .on('data', function(data) {
         // decompressed data as it is received
         console.log('decoded chunk: ' + data)
       })
        .on('response', function(response) {
         // unmodified http.IncomingMessage object
         response.on('data', function(data) {
           // compressed data as it is received
           console.log('received ' + data.length + ' bytes of compressed data')
         })
       })
    }else{
        res.send('Cart Value does not match with the filtered value' );
    }  
       
       break;

       case 'Contains':
       if(original_value === filter_value ){
        Request(
            {
             url:'https://leado-mini-project-api.herokuapp.com/sendSms',
             method: 'POST',
             "headers": { "content-type": "application/json",
             "x-access-token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiU2h5YW0ifQ.a9R1PRhBuYObDt3nSrkqO58emrv4-HLbVKqfz56tf5U"
             },
             body: JSON.stringify({
                 "toNumber": number,
                  "smsText": sms_text
             })
            },(error,response,body)=>{   
            }
        )
        .on('data', function(data) {
         // decompressed data as it is received
         console.log('decoded chunk: ' + data)
       })
        .on('response', function(response) {
         // unmodified http.IncomingMessage object
         response.on('data', function(data) {
           // compressed data as it is received
           console.log('received ' + data.length + ' bytes of compressed data')
         })
       })
    }else{
        res.send('Cart Value does not match with the filtered value' );
    }  

        break;    
       default:
           res.send('done');
    }

      
  })


  server.listen(port,()=>{
    console.log('server started');
});

  