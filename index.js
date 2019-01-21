
const app = require('express')();
const getDecorator = require('./decorator.js');
const legeacyAdapter = require('./legacy-adapter.js');
const v5 = require('./v5.js');
const cors = require('cors');

const corz = cors({origin: process.env.ORIGIN, credentials: true});

app.use(corz);

getDecorator()
.then((fragments) => {

  const legacyRenderer = legeacyAdapter(fragments);
  const v5Renderer = v5();

  // serving legacy v4 content
  app.get('/legacy/*', (req, res) => {
    legacyRenderer(req, res);
  });

  // serving v5 content
  app.get('/*', (req, res) => {
    v5Renderer(req, res);
  });

  app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`); // eslint-disable-line
  });
  
}, error => console.log(`Failed to render app ${error}`));
