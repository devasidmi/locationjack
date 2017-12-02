#!/usr/bin/env node

const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;
app.use('/', express.static(`${__dirname}/public`));

app.set('views', path.join(__dirname, '/public/pages'));
app.engine('html', require('pug').renderFile);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('main.pug');
  });

app.listen(port);