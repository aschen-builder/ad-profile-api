const 
    express = require('express'),
    cors = require('cors'),
    helmet = require('helmet'),
    morgan = require('morgan');

const server = express();

const 
    indexRouter = require('./routes/index'),
    customersRouter = require('./routes/customers');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('combined'));

server.use('/', indexRouter);
server.use('/customers', customersRouter);

module.exports = server;