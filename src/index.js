import express from 'express';
import path from 'path';
import request from 'request';

let app = express();

app.set('view engine', 'jade');

request('http://google.com', (err, res, body) => {
  console.log(body);
});

app.listen(3000, () => {
  console.log(`App listening on 3000`);
});