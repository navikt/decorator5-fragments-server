const legacyAdapter = (fragments) => {
  return (req, res) => {
    res.send(fragments[req.path.replace('/legacy/', '')]);
  }
};
module.exports = legacyAdapter;