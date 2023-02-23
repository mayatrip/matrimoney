var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var incomeRouter = require('./routes/income');
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
app.use('/income', incomeRouter);
app.use('/budget', budgetRouter);
app.use('/budget/costs', costsRouter);

module.exports = app;
