"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('hello world');
    res.end();
});
exports["default"] = router;
//# sourceMappingURL=test.js.map