namespace InterfaceNamespace {
    interface Thing {
        name: string;
        getFullName: () => string;
    }
    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void;
    }

    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;
        constructor( name:string ) {
            this.name = name;
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Pojazd ma ${this.wheelCount} kół.`);
            
        };
        showNumberOfWheels() {
            console.log(`Liczba kół w pojeździe: ${this.wheelCount}`);
            
        }
        getFullName() {
            return "MC-" + this.name;
        }
    }

    const moto = new Motorcycle("moto-dla-początkujących")
    moto.updateWheelCount(2);
    moto.showNumberOfWheels();
    
}