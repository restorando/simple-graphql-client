"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (url, _a) {
    var _b = (_a === void 0 ? {} : _a).headers, headers = _b === void 0 ? {} : _b;
    return function (query, variables) {
        if (typeof fetch !== 'function') {
            throw new Error('fetch is not defined. Perhaps you need a polyfill.');
        }
        return fetch(url, {
            method: 'POST',
            headers: __assign({ 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json;charset=utf-8' }, headers),
            body: JSON.stringify({ query: query, variables: variables })
        })
            .then(function (response) { return response.json(); })
            .then(function (_a) {
            var data = _a.data, errors = _a.errors;
            if (errors && errors.length) {
                return Promise.reject(errors[0].message);
            }
            return data;
        });
    };
};
