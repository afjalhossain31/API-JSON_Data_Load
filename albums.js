const loadPhotos = ()=> {
    url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayPhotos(data);
    })
}

// "albumId": 1,
// "id": 1,
// "title": "accusamus beatae ad facilis cum similique qui sunt",
// "url": "https://via.placeholder.com/600/92c952",
// "thumbnailUrl": "https://via.placeholder.com/150/92c952"

const displayPhotos = (photos) =>{
    const photosContainer = document.getElementById("photos-container");
    photosContainer.innerHTML = "";

    photos.forEach(photo => {
        console.log(photo);

        // Use picsum.photos as a reliable alternative (unique image per ID)
        const imageUrl = `https://picsum.photos/150/150?random=${photo.id}`;

        const photoCard = document.createElement("div");
        photoCard.innerHTML = `
            <div class="photo-card">
            <h3>${photo.title}</h3>
            <img src="${imageUrl}" alt="${photo.title}">
            </div>
            `;
        photosContainer.appendChild(photoCard);

    })
}

loadPhotos();

