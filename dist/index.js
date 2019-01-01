"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = require("pluralize");
var legacy = require("Legacy");
function getPlural(str) {
    var oldObj = new legacy.OldOldClass();
    oldObj.runSuperOldLogic('anything');
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
