const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const tag_routes = require('./api/tag-routes');

router.use('/api', apiRoutes);
router.use('/api/tags', tag_routes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;