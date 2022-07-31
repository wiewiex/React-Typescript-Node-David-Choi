const callerObj = {
    name: 'Janek'
}

function checkMyThis(age) {
    console.log("czym jest this: ", this);
    console.log(`czy mam imie? ${this.name}`);
    this.age = age;
    console.log(`Ile mam lat? ${this.age}`);
}

// checkMyThis();
checkMyThis.call(callerObj, 25);
checkMyThis.apply(callerObj, [25]);