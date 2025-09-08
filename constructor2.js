"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//two type to define constructor
class music {
    name;
    artist;
    thumnail;
    length;
    free;
    constructor(name, artist, thumnail = "somethumnail.jpg", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumnail = thumnail;
        this.length = length;
        this.free = free;
        if (!(thumnail)) {
            this.thumnail = "somethumnail.jpg";
        }
    }
}
//two type to define constructor
class music2 {
    name;
    artist;
    thumnail;
    length;
    free;
    constructor(name, artist, thumnail = "somethumnail.jpg", length, free) {
        this.name = name;
        this.artist = artist;
        this.thumnail = thumnail;
        this.length = length;
        this.free = free;
    }
}
let m1 = new music("any music", "ar", "", 1200, false);
let m2 = new music2("somthing music", "nothing", "", 1500, true);
//# sourceMappingURL=constructor2.js.map