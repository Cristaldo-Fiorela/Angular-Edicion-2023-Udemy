

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fiorela',
}

const passenger2: Passenger = {
    name: 'Melissa',    
    children: ['Bobby', 'Geeg'],
}

const printChildren = ( passenger: Passenger) => {
    
    if(!passenger.children) return 0

    //const howManyChildren = passenger.children?.length || 0; // * optional chaining
    const howManyChildren = passenger.children!.length; // ! node null assertion operator = 'ts confia en que siempre va a existir la propiedad'

    console.log(passenger.name, howManyChildren)
    return howManyChildren;
}

printChildren(passenger1); // Fiorela 0
printChildren(passenger2); // Melissa 2
