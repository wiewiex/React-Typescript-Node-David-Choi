interface User {
    name:string;
    age:number;
}

function canDrive(usr:User) {
    console.log("imie uzytkownika", usr.name);

    if (usr.age >= 16) {
        console.log("moze prowadzic auto");
    }

    else {
        console.log("nie ma prawa kierowac");        
    }  
    
}

const tom:User = {
    name: "Tomek",
    age: 15
}

canDrive(tom);