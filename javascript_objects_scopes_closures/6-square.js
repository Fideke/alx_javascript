#!usr/bin/node

const Rectangle = require("./4-rectangle");

class Square extends Rectangle {
    charPrint(c) {
        if (c === undefined) {
            c = "X"
        }

        for (let i = 0; i < this.height; i++) {
            console.log(c.repeat(this.width));
        }
    }
}
exports.module = Square;