const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((Data) => {
      //console.log(Data);
      displayPost(Data);
    });
};

//array of objects -> forEach method
// const displayPost = (posts) => {
// 1. get the container
// const postContainer = document.getElementById("post-container-list");
// postContainer.innerHTML = "";
// console.log(postContainer);
//   posts.forEach((post) => {
// console.log(post.title);
//2. create HTML element for each post
// const li = document.createElement("li");
// li.innerText = post.title;
// console.log(li);
//3.add li into the container
// postContainer.appendChild(li);
//   });
// };

// {
//     "userId": 10,
//     "id": 96,
//     "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
//     "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
// }

const displayPost = (posts) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    console.log(post);
    const postCard = document.createElement("div");
    postCard.innerHTML = `
        <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </div>
        `;
    postContainer.appendChild(postCard);
  });
};
loadPosts();

//create displayPost Function
//  for (let i=0; i<posts.length; i++){
//     const post = posts[i];
//     console.log(post);
//  }

// for (let post of posts){
//     console.log(post);
//     }
