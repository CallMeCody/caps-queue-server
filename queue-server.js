'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);
const host = 'http://localhost:3000'

const socket = io.connect(host)
const caps = io.connect(`${host}/caps`);

const messageQueue = {

};
