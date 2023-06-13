

export class Person {
    // public name?: string;
    // private address: string;

    constructor( 
        public name: string, 
        private address: string = 'No Address'
    ) {}
}


export class Hero extends Person {
    
    constructor(
        public alerEgo: string,
        public age: number,
        public realName: string,
    ) {
        super( realName, 'New York')
    }
}

const ironman =  new Hero('Iron Man', 45, 'Tony');

console.log(ironman);