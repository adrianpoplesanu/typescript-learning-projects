"use strict";
exports.__esModule = true;
exports.moo = void 0;
var moo;
(function (moo) {
    moo.search = function (elements, element) {
        var i, counter = 0;
        for (i = 0; i < elements.length; i++) {
            if (elements[i] == element)
                counter++;
        }
        return counter;
    };
})(moo = exports.moo || (exports.moo = {}));
