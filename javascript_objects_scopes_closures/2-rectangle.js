#!usr/bin/node
// a class rectangle that defines a rectangle
// use class notation for defining your class
// constructor must take two arguements
class Rectangle {
    constructor (w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
}
module.exports = Rectangle;