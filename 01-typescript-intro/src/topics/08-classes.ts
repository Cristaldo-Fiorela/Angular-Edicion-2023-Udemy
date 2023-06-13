

export class Person {
    public name?: string;
    private address: string;

    constructor() {
        this.name = 'Fiorela';
        this.address = 'Italia';
    }
}

const ironman =  new Person();

console.log(ironman);