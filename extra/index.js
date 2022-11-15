/* eslint-disable */
const e = require("./ceil/index.js"), r = require("./floor/index.js"), i = require("./random/index.js"), d = require("./round/index.js");

require("../ecma/pow/index.js"), require("../_includes/dester-inject-Math.js"), 
require("../ecma/ceil/index.js"), require("../ecma/floor/index.js"), require("../ecma/random/index.js"), 
require("../ecma/round/index.js"), exports.ceilExtra = e.default, exports.floorExtra = r.default, 
exports.randomExtra = i.default, exports.roundExtra = d.default;
