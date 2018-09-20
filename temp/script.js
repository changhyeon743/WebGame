class Monster {
    constructor(name) {
        this.name = name;
        this.level = 1;
    }

    attack() {
        console.log("attack!");
    }

    print() {
        console.log("Monster "+this.name+",lv:"+this.level);
    }
}

class Orc extends Monster {
    constructor(name,finger) {
        super(name);
        this.finger = finger;
    }

    attack() {
        console.log("orc attack");
    }
}

var mob1 = new Orc("mob5",3);
mob1.attack();
mob1.print();
