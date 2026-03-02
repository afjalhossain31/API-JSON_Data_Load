const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((Data) => {
      //console.log(Data);
      displayPost(Data);
    });
};

//create displayPost Function
//  for (let i=0; i<posts.length; i++){
//     const post = posts[i];
//     console.log(post);
//  }

// for (let post of posts){
//     console.log(post);
//     }

//array of objects -> forEach method

const displayPost = (posts) => {
  // 1. get the container
  const postContainer = document.getElementById("post-container");
  // console.log(postContainer);

  posts.forEach((post) => {
    // console.log(post.title);
    //2. create HTML element for each post
    const li = document.createElement("li");
    li.innerText = post.title;
    console.log(li);
    //3.add li into the container
    postContainer.appendChild(li);
  });
};
