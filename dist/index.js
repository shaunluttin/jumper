"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = require("pluralize");
// import * as legacy from 'Legacy'
function getPlural(str) {
    // let oldObj = new legacy.OldOldClass();
    // oldObj.runSuperOldLogic('anything');
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
