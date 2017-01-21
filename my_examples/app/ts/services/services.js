"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var UserService_1 = require('./UserService');
__export(require('./UserService'));
exports.servicesInjectables = [
    UserService_1.userServiceInjectables
];
