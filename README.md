# API & JSON Data Load Project

A JavaScript project demonstrating how to fetch and display data from APIs using the Fetch API and DOM manipulation.

## 📋 Project Overview

This project contains multiple HTML pages that fetch and display different types of data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) - a free fake REST API for testing and prototyping.

### Learning 
- How Internet Work
- HTTP ,HTTPS
- DNS
- IP , IPV4 , IPV6
- API (Application programming Interface)
- JSON , Fetch , 
- Conditional Rendering 
- Network Debugger / Async Await 

## 🛠️ Technologies Used

- **HTML5** - Page structure
- **CSS3** - Styling and responsive grid layouts
- **JavaScript (ES6+)** - Fetch API, arrow functions, template literals
- **JSONPlaceholder API** - Mock REST API
- **Picsum Photos API** - Random placeholder images
- **Font Awesome** - Icons for todo completion status

## 📂 File Structure

```
API-JSON_Data_Load/
│
├── index.html          # Main posts page
├── posts.js            # Posts fetching and display logic
│
├── albums.html         # Photo gallery page
├── albums.js           # Photos fetching and display logic
│
├── Users.html          # User posts page
├── users.js            # User posts logic
│
├── todo.html           # Todo list page
├── todo.js             # Todo fetching and display logic
│
├── script.js           # Additional utility scripts
├── json.js             # JSON handling utilities
│
└── README.md           # Project documentation
```

## 🔧 Key JavaScript Concepts Used

1. **Fetch API** - Making HTTP requests to REST APIs
2. **Promises** - `.then()` chaining for async operations
3. **Arrow Functions** - Modern ES6 syntax
4. **Template Literals** - Dynamic HTML generation with `${}` 
5. **DOM Manipulation** - `createElement()`, `appendChild()`, `innerHTML`
6. **forEach Loop** - Iterating through arrays of data
7. **CSS Grid** - Responsive layouts with `grid-template-columns`

## 💻 How to Run

1. Clone or download this repository
2. Open any HTML file in a web browser:
   - `index.html` - View all posts
   - `albums.html` - View photo gallery
   - `Users.html` - View user posts
   - `todo.html` - View todo list
3. No server or build process required!

## 🌐 API Endpoints Used

| Feature | API Endpoint |
|---------|--------------|
| Posts | `https://jsonplaceholder.typicode.com/posts` |
| Photos | `https://jsonplaceholder.typicode.com/albums/1/photos` |
| User Posts | `https://jsonplaceholder.typicode.com/users/1/posts` |
| Todos | `https://jsonplaceholder.typicode.com/users/1/todos` |
| Images | `https://picsum.photos/150/150?random={id}` |

## 🔐 HTTP Methods (REST API Operations)

REST APIs use different HTTP methods to perform CRUD operations (Create, Read, Update, Delete). Here's how they work:

### **GET** - Read/Retrieve Data
- **Purpose:** Fetch data from the server
- **Used in this project:** All pages use GET to fetch posts, photos, todos
- **Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
```
- **Safe:** Yes (doesn't modify data)
- **Idempotent:** Yes (same result every time)

### **POST** - Create New Data
- **Purpose:** Send data to create a new resource
- **Usage:** Creating a new post, user, or todo item
- **Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'New Post',
        body: 'This is the content',
        userId: 1
    })
})
    .then(res => res.json())
    .then(data => console.log(data));
```
- **Safe:** No (creates new data)
- **Idempotent:** No (creates multiple resources if called multiple times)

### **PUT** - Update/Replace Data
- **Purpose:** Update an entire resource or replace it
- **Usage:** Updating all fields of a post or user
- **Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 1,
        title: 'Updated Title',
        body: 'Updated content',
        userId: 1
    })
})
    .then(res => res.json())
    .then(data => console.log(data));
```
- **Safe:** No (modifies data)
- **Idempotent:** Yes (same result if called multiple times)

### **DELETE** - Remove Data
- **Purpose:** Delete a resource from the server
- **Usage:** Removing a post, user, or todo item
- **Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(res => res.json())
    .then(data => console.log('Deleted:', data));
```
- **Safe:** No (removes data)
- **Idempotent:** Yes (same result if called multiple times)

### **PATCH** - Partial Update (Bonus)
- **Purpose:** Update only specific fields of a resource
- **Difference from PUT:** PATCH updates some fields, PUT replaces entire resource
- **Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Only updating title'
    })
})
    .then(res => res.json())
    .then(data => console.log(data));
```

### 📊 HTTP Methods Summary Table

| Method | Purpose | Current Project Usage | Modifies Data | Idempotent |
|--------|---------|----------------------|---------------|------------|
| **GET** | Read/Retrieve | ✅ Used extensively | No | Yes |
| **POST** | Create New | ❌ Not yet implemented | Yes | No |
| **PUT** | Update/Replace | ❌ Not yet implemented | Yes | Yes |
| **DELETE** | Remove | ❌ Not yet implemented | Yes | Yes |
| **PATCH** | Partial Update | ❌ Not yet implemented | Yes | Yes |

> **Note:** This project currently uses only GET requests to fetch and display data. POST, PUT, and DELETE can be implemented for full CRUD functionality.

## 📡 HTTP Status Codes

Status codes indicate the result of an API request. They are grouped into five categories:

### 📊 Main Categories

| Range | Type | Meaning |
|-------|------|---------|
| **2xx** | ✅ Success | Request succeeded |
| **4xx** | ⚠️ Client Error | Problem with your request |
| **5xx** | ❌ Server Error | Problem with the server |

### 🔑 Most Common Status Codes

| Code | Name | When It Happens |
|------|------|-----------------|
| **200** | OK | Successful GET, PUT, PATCH |
| **201** | Created | Successful POST (new resource created) |
| **204** | No Content | Successful DELETE (no data returned) |
| **400** | Bad Request | Invalid data sent to server |
| **401** | Unauthorized | Authentication required or failed |
| **404** | Not Found | Resource doesn't exist |
| **500** | Server Error | Something went wrong on server |

### 💡 Simple Example

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        console.log(res.status); // Check status: 200, 404, etc.
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

## 🎨 Styling Features

- Responsive grid layouts using CSS Grid
- Card-based design with shadows and hover effects
- Clean, modern UI with proper spacing
- Mobile-friendly responsive design
- Custom styling for completed/incomplete todo items

## 📝 Code Example

```javascript
// Basic fetch pattern used throughout the project
const loadData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayData(data);
        })
}
```

## 🔄 Recent Improvements

- ✅ Fixed missing closing `</div>` tag in albums.js
- ✅ Replaced `via.placeholder.com` with `picsum.photos` for working images
- ✅ Improved grid layout for better responsiveness
- ✅ Added title above images in photo gallery
- ✅ Enhanced styling with better spacing and shadows

## 📚 Learning Outcomes

This project demonstrates understanding of:
- Working with REST APIs
- Asynchronous JavaScript
- DOM manipulation
- Responsive web design
- Modern ES6+ JavaScript features
- Grid layouts and flexbox
- Handling API data and displaying dynamically
