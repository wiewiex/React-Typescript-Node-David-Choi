function canDrive(usr) {
    console.log("imie uzytkownika", usr.name);
    if (usr.age >= 16) {
        console.log("moze prowadzic auto");
    }
    else {
        console.log("nie ma prawa kierowac");
    }
}
var tom = {
    name: "Tomek",
    age: 15
};
canDrive(tom);
