const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
var path = require('path');

const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
//Http logger
app.use(morgan('combined'));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// template engine
var hbs = handlebars.create({ extname: '.hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
