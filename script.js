//zadanie 1
let zad1 = () => {
    let hello = 'Hello';
    let world = 'World';

    return `${hello} ${world}`;
}

//zadanie 2
let multiply = (a=1,b=1) =>{ return a*b; }

//zadanie 3
let average = (...args) => {
    let sum = 0;
    args.forEach(val => { sum += val });
    return sum/args.length;
};

//zadanie 4
let zad4 = () => {
    const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
    return `Average grade: ${average(...grades)}`;
}

//zadanie 5
let zad5 = () => {
    const struct = [1, 4, 'Iwona', false, 'Nowak'];
    let firstName;
    let lastName;
    [,,firstName,,lastName] = struct;
    return `First Name: ${firstName}\nLast Name: ${lastName}`;
}

console.log(`Zadanie 1: ${zad1()}`);
console.log(`Zadanie 2: ${multiply(4)}`);
console.log(`Zadanie 3: ${average(4,5,4,5)}`);
console.log(`Zadanie 4: ${zad4()}`);
console.log(`Zadanie 5: ${zad5()}`);