const app = require('./app');

console.log(process.env);

// STARTS SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
