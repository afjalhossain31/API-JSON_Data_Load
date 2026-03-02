console.log("Explore API with JavaScript");

const person = {
    name : "Afjal Hossain",
    age : 25,
    city : "Dhaka",
    country : "Bangladesh"
}
console.log(person);
// JSON ->js object with Notation
// JSON.stringify() -> js object to JSON string
// JSON.parse() -> JSON string to js object

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personObj = JSON.parse(personJSON);
console.log(personObj);