const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const url = require('url');
const querystring = require('querystring');
const fileServer = new(require('node-static')).Server('.');

if (cluster.isMaster) {
  masterProcess();
} else {
  childProcess();  
};

function masterProcess() {
  console.log(`Master ${process.pid} is running`);
  var workers = [];
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    console.log(`Forking process number ${i}...`);

    const worker = cluster.fork();
    workers.push(worker);

    // Listen for messages from worker
    worker.on('message', function(message) {
      console.log(`Master ${process.pid} recevies message '${JSON.stringify(message)}' from worker ${worker.process.pid}`);
    });
  }
function onDigits(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache'
    });
    var timer = setInterval(write, 60000);
    write();
    function write() {
        let value = Math.floor(Math.random() * 1000);
        res.write('data: ' + value + '\n\n');
        workers.forEach(function(worker) {
    console.log(`Master ${process.pid} sends message to worker ${worker.process.pid}...`);
    worker.send({ msg: 'N' + value });    
  }, this);
    }
}
function accept(req, res) {
    if (req.url == '/digits') {
        onDigits(req, res);
        return;
    }    
    fileServer.serve(req, res);
}  

if (!module.parent) {
    http.createServer(accept).listen(8080);
} else {
    exports.accept = accept;
}
}

function childProcess() {
  console.log(`Worker ${process.pid} started`); 

  process.on('message', function(message) {
    console.log(`Worker ${process.pid} recevies message '${JSON.stringify(message)}'`);
  });

  console.log(`Worker ${process.pid} sends message to master...`);
  process.send({ msg: `Message from worker ${process.pid}` });

  console.log(`Worker ${process.pid} finished`);
};    