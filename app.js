const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// 1) Middleware
app.use(morgan('dev'));

app.use(express.json());

// Our own Middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// 2) ROUTE HANDLERS

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) STARTS SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
