# API & JSON Data Load Project

A JavaScript project demonstrating how to fetch and display data from APIs using the Fetch API and DOM manipulation.

## 📋 Project Overview

This project contains multiple HTML pages that fetch and display different types of data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) - a free fake REST API for testing and prototyping.

## 🚀 Features

### 1. **Posts Display** (`index.html` + `posts.js`)
- Fetches all posts from the API
- Displays posts in a responsive 3-column grid layout
- Shows post title and body content
- Styled cards with shadows and borders

### 2. **Photo Albums** (`albums.html` + `albums.js`)
- Fetches photos from album 1
- Displays 50 photos in a responsive grid layout
- Uses **picsum.photos** for reliable placeholder images
- Auto-adjusts columns based on screen width
- Shows photo title above each image
- Responsive design with `auto-fit` and `minmax()`

### 3. **User Posts** (`Users.html` + `users.js`)
- Fetches posts from a specific user (User ID: 1)
- Displays post titles and descriptions
- Simple layout with headings and paragraphs

### 4. **Todo List** (`todo.html` + `todo.js`)
- Fetches todo items for User ID: 1
- Shows completion status with Font Awesome icons
- Visual indicators for completed/incomplete tasks
- Displays todo title and completion status

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

## 👨‍💻 Author

Created as part of JavaScript learning journey - Introduction to JavaScript course

## 📄 License

Free to use for educational purposes

---

**Note:** This project uses free public APIs. No authentication or API keys required!
