class Person {
    constructor(private readonly msg: string) {}
    
    speak() {
        this.msg = "mówię: " + this.msg;
        console.log(this.msg);
        
    }
}

const tom = new Person("cześć jestem Tom");
// tom.msg = "cześć";
tom.speak();