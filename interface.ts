

function fullName (person:{firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Prem',
    lastName: 'Rohan'
};

fullName(p);
//can modify the

interface Person { 
    firstName: string,
    lastName:string, 
    middleName?:string
}
function fullName1 (person:Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

fullName1(p);