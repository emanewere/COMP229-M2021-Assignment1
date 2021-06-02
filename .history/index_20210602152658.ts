import http from 'http';
import path from 'path';
import fs from 'fs';
const { Console } = require('console');


const hostname: string = '127.0.0.1';
const port: number = 3000;

fs.readFile("inde.html",(err,data)=>
{
  if(err)
  {
    console.log("Error");
  }
  console.log(data);
});
//console.log(__dirname);
const server: http.Server = http.createServer((req, res) =>
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});



server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});

function displayHome(): void
{

}