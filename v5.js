const fragments = {
  'header': "<h2>Header</h2>",
  'footer': "<i>Footer</i>",
};
const v5 = () => {
  return (req, res) => {
    res.send(fragments[req.path.replace('/', '')]);
  }
};
module.exports = v5;