// Object Destructuring
// const person = {
// 	name: 'Khalil',
// 	age: 24,
// 	location: {
// 		city: 'Toronto',
// 		temp: -5
// 	}
// };

// const { name = "Unknown", age } = person;


// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
// 	console.log(`It's ${temperature} C in ${city}`);
// }


//Array Destructuring
const address = [
	'8 McKee Ave',
	'Toronto',
	'ON',
	'M2N7E5'
];

const [, city, province] = address;

console.log(`You are in ${city} ${province}.`)