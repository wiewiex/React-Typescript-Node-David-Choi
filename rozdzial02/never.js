function oldEnough(age) {
    if (age > 59) {
        throw Error("Jesteś za stary!");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}
console.log(oldEnough(12));
