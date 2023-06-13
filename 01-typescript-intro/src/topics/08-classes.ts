

export class Person {
    // public name?: string;
    // private address: string;

    constructor( 
        public fisrtName: string, 
        public lastName: string, 
        private address: string = 'No Address'
    ) {}
}


export class Hero {

    //public person: Person;
    
    constructor(
        public alerEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        //this.person = new Person(realName)
    }
}

const tony =  new Person('Tony','Stark','NY');
const ironman =  new Hero('Iron Man', 45, 'Tony', tony);

console.log(ironman);