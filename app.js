// packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

// middleware handlers
const { error } = require('./utils/error');
const isAuthenticated = require('./middleware/isAuthenticated');
const isAdmin = require('./middleware/isAdmin');

// routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');

// express app
const app = express();

// middlewares
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    maxAge: 10000,
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/v1/app/auth', authRouter);
app.use('/api/v1/app/users', isAuthenticated, usersRouter);
app.use('/api/v1/admin', isAdmin, adminRouter);
app.use('/', indexRouter);

// error handler
app.use(error)

module.exports = app;