const greeting: string = 'Hello, TypeScript'

console.log(greeting);

const age: number = 25;
console.log(age); 
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());