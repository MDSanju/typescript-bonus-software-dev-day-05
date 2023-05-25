// Pick type example

interface Person {
    name: string;
    email: string;
    contactNo: string;
}

type Email = Pick<Person, 'email'>;
type Contact = Pick<Person, 'name' | 'contactNo'>;


// Omit type example

type Name = Omit<Person, 'email' | 'contactNo'>;



// Partial (to make all the properties be optional type)

type Optional = Partial<Person>;


// Required

type RequiredProps = Required<Person>;


// Readonly utility type

const person: Readonly<Person> = {
    name: 'John',
    email: 'example@gmail.com',
    contactNo: '121212',
};



// type myObj = {
//     a: string;
//     b: string;
//     c: string;
// }

// Using index signature instead of the 'myObj' type above

type myObj = {
    [key: string]: string;
}

// Record utility type

type myObjRecord = Record<'a'|'b'|'c', string>;

const obj: myObjRecord = {
    a: 'John',
    b: 'Bob',
    c: 'Styfen',
};
