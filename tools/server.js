/* eslint-disable no-console*/
/*global process*/
import express from 'express';
import open from 'open';
import http from 'http';

console.log('Starting app in dev mode...'.green);

const app = express();
const port = 4000;

app.use(express.static('build'));
app.use(express.static('src'));
app.use('/scripts', express.static('src'));

app.set('port', port);
http.createServer(app).listen(app.get('port'), function() {
	open(`http://localhost:${port}/index.html`);
});
