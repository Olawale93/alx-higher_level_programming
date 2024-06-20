#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            // If width or height is not a positive integer, create an empty object
            this.width = 0;
            this.height = 0;
        } else {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        if (this.width === 0 || this.height === 0) {
            console.log("Empty Rectangle");
        } else {
            for (let i = 0; i < this.height; i++) {
                console.log('X'.repeat(this.width));
            }
        }
    }

    rotate() {
        // Exchange width and height
        [this.width, this.height] = [this.height, this.width];
    }

    double() {
        // Double width and height
        this.width *= 2;
        this.height *= 2;
    }
}
