const express = require('express'),
      app = express();

function r3(req,res,next){
  console.log('r3');
  next();
}

function r4(req,res,next){
  console.log('r4');
  next();
}

app.get('/',[r3,r4],function(req,res,next){
  console.log('r1');
  next();
},function(req,res,next){
  console.log('r2')
  res.end('OK!');
});


app.get('/json',function(req,res){
  res.json({'username':'wanding','password':'123'});
  res.end();
});

app.get('/download',function(req,res){
  res.download('./package.json');
});

app.get('/course/:id',function(req,res){
  console.log('id:',req.params.id);
  res.send('OK!');
});

app.get('/posts/:year/:month',function(req,res){
  console.log('year:',req.params.year);
  console.log('month:',req.params.month);
  res.send('OK!');
});

app.listen(8080);
