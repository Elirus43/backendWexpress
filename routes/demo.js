let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {req
res.send('Server response demo handler checking for nodemon');
});

module.exports = router;