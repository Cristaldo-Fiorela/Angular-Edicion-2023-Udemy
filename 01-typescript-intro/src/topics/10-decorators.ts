function classDecorator<T extends {new (...args:any[]): {} }>( constructor: T ) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'ASDAS';
    
    print() {
        console.log('Hola Mundo')
    }
}

console.log(SuperClass); // definicion de mi clase

const myClass =  new SuperClass(); 
console.log(myClass); // instancia de mi clase