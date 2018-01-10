interface Person {
    name: string,
    age: number
}
function foo(p: Person) {
    console.log(p.age)
    console.log(p.name)
}
let a = 10;
foo({name: "lis", age: 20})