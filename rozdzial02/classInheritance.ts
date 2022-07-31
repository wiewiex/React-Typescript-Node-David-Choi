class Vehlice {
    constructor(protected wheelCount: number) {}

    showNumberOfWheels() {
        console.log(`Liczba kół w pojeździe: ${this.wheelCount}`);
        }
}

class Motorcycle extends Vehlice {
    constructor() {
        super(2)
    }
    updateWheelCount(newWheelCount: number) {
        this.wheelCount = newWheelCount;
    }
}


class Automobile extends Vehlice {
    constructor() {
        super(4);
    }
}

const motorCycle = new Motorcycle();

// motorCycle.updateWheelCount(1);
motorCycle.showNumberOfWheels();

const autoMobile = new Automobile();

autoMobile.showNumberOfWheels();
