//fetch () -> promies of response/Json data fetching
//json ekta method

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    //promise of response
    .then((res) => res.json())
    //promise of json data
  .then((data) => console.log(data));
}


const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    // .then(json => console.log(json));
    .then((json) => {
      console.log(json);
      displayPost(json);
    });
}

const displayPost = (posts) => {
  posts.forEach(post => {
    console.log(post);
  });
}

  







// console.log("Explore API with JavaScript");

// const person = {
//     name : "Afjal Hossain",
//     age : 25,
//     city : "Dhaka",
//     country : "Bangladesh"
// }
// console.log(person);
// // JSON ->js object with Notation
// // JSON.stringify() -> js object to JSON string
// // JSON.parse() -> JSON string to js object

// const personJSON = JSON.stringify(person);
// console.log(personJSON);
// console.log(personJSON ,typeof personJSON);

// const personObj = JSON.parse(personJSON);
// console.log(personObj);
// console.log(personObj, typeof personObj);
