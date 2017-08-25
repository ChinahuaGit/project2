const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const byo_desc = require('./routes/byo_descs');
const byos = require('./routes/byos');
const classes = require('./routes/classes');
const depts = require('./routes/depts');
const sku = require('./routes/skus');
const sub_classes = require('./routes/sub_classes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/byo_descs', byo_desc);
// app.use('/byos', byos);
app.use('/classes', classes);
app.use('/depts', depts);
// app.use('/sku', sku);
// app.use('/subclasses', subclasses);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  const genError = { message: 'Oops: Something bad happened' };
  res.locals.error = process.env.NODE_ENV === 'development'
                   ? err
                   : genError;

  // render the error page
  res.status(err.status || 500);
  res.json({ message: res.locals.error.message });
});

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`👩‍💻  App listening at port ${app.get('port')} ‍💻`);
});
