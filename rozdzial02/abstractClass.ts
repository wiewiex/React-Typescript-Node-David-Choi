namespace AbstractNamespace {

    abstract class Vehlice {
        constructor(protected wheelCount: number) {}

        abstract updateWheelCount(newWheelCount: number): void;
    
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
            console.log(`Motocykl ma ${this.wheelCount} koła`);        
        }
    }
    
    
    class Automobile extends Vehlice {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Samochód ma ${this.wheelCount} koła`);        
        }
        showNumberOfWheels() {
            console.log(`Liczba kół w pojeździe: ${this.wheelCount}`);
        }
    }
    
    const motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    
    const autoMobile = new Automobile();
    autoMobile.updateWheelCount(3);

}




