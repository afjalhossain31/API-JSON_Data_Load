const loadUsers = ()=> {
    url = "https://jsonplaceholder.typicode.com/users/1/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayUsers(data);
    })
}

const displayUsers = (users) =>{
    const usersContainer = document.getElementById("users-container");
    usersContainer.innerHTML = "";

    users.forEach(user => {
        console.log(user);
        const userElement = document.createElement("div");
        userElement.innerHTML = `
            <h3>${user.title}</h3>
            <p>${user.body}</p>
        `;
        usersContainer.appendChild(userElement);
    })
}

loadUsers();