# API and JSON Data Load

A simple project demonstrating how to work with JSON data in JavaScript.

## Features

- JSON.stringify() - Convert JavaScript objects to JSON strings
- JSON.parse() - Convert JSON strings back to JavaScript objects

## Usage

Open `index.html` in a browser or run with Node.js:

```bash
node script.js
```

## Example

```javascript
const person = {
  name: "Afjal Hossain",
  age: 25,
  city: "Dhaka",
  country: "Bangladesh",
};

// Convert to JSON string
const personJSON = JSON.stringify(person);

// Parse back to object
const personObj = JSON.parse(personJSON);
```
