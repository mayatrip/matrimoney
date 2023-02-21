var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var fundsRouter = require('./routes/funds');
var budgetRouter = require('./routes/budget');
var costsRouter = require('./routes/costs');

const cors = require('cors');

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/funds', fundsRouter);
app.use('/budget', budgetRouter);
app.use('/costs', costsRouter);

module.exports = app;
