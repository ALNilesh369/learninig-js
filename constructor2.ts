
//two type to define constructor
class music{
    constructor(public name: string, public artist: string, public thumnail: string = "somethumnail.jpg", public length: number, public free: boolean){
        if(!(thumnail)){
            this.thumnail = "somethumnail.jpg";
        }

    }
}

//two type to define constructor
class music2{
    public name;
    public artist;
    public thumnail;
    public length;
    public free;
    constructor(name: string, artist: string, thumnail: string = "somethumnail.jpg", length: number, free: boolean){
        this.name = name;
        this.artist = artist;
        this.thumnail = thumnail;
        this.length = length;
        this.free = free;
    }
}

let m1 = new music("any music", "ar", "", 1200, false);
let m2 = new music2("somthing music", "nothing", "", 1500, true);