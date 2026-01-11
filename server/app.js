import createError from 'http-errors';
import express from 'express';
// import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import authRouter from './routes/auth.route.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views')); // IGNORE ---
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public'))); // IGNORE ---

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//  Module exports
export default app;