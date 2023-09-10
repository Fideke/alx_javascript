#!usr/bin/node

const Rectangle = require("./4-rectangle");

class Square extends Rectangle {
    charPrint(c) {
        if (c === undefined) {
            c = "X"
        }
    }
}
exports.module = Square;