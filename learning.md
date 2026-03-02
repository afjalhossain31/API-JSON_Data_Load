# API and JSON Data Load

An API allows one application to communicate with another application or server to request and receive data

## Features

- `fetch()` - Promise based API data fetching
- `.then()` - Promise handling
- `res.json()` - JSON data parsing

## Usage

Open `index.html` in a browser and call the functions:

- `loadData()` - Fetch a single todo item
- `loadposts()` - Fetch all posts

## Example

```javascript
// fetch() -> Promise of response / JSON data fetching
// json is a method

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    // promise of response
    .then((res) => res.json())
    // promise of json data
    .then((data) => console.log(data));
};

const loadposts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};
```

## API Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com) - Fake REST API for testing
  - `/todos/1` - Single todo item
  - `/posts` - All posts
