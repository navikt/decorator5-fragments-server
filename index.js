
const app = require('express')();
const getDecorator = require('./decorator.js');
const cors = require('cors');

const corz = cors({origin: process.env.ORIGIN, credentials: true});

app.use(corz);

getDecorator()
.then((fragments) => {

  app.get('/header', (req, res) => {
    res.send(fragments.header);
  });
  app.get('/footer', (req, res) => {
    res.send(fragments.footer);
  });
  app.get('/styles', (req, res) => {
    res.send(fragments.styles);
  });
  app.get('/scripts', (req, res) => {
    res.send(fragments.scripts);
  });
  app.get('/megamenu', (req, res) => {
    res.send(fragments.megamenu);
  });
  app.get('/skiplinks', (req, res) => {
    res.send(fragments.skiplinks);
  });
  
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`); // eslint-disable-line
  });
  
}, error => console.log(`Failed to render app ${error}`));
