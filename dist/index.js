"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = require("pluralize");
var legacy_1 = require("./legacy");
function getPlural(str) {
    var oldObj = new legacy_1.default();
    oldObj.runSuperOldLogic('anything');
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
