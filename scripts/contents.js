let catImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVTWL4dqk9ZokaiRQe0kdV3_dNvkB7A3xTw&s",
    "https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SVn8ikzFILyk58VnSolK5d29lxRhLLd3NA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpFdVkBAa-g9aydXVKqScEtWGeNCOmVP7kQ&s"
];


window.onload = function() {
    const imgs = document.getElementsByTagName("img");
    if(imgs.length == 0){
        console.error("No image elements found");
        return;
    }

    for (let i = 0; i < imgs.length; i++) {
        const randomImg = Math.floor(Math.random() * catImages.length); // Get a random image
        imgs[i].src = catImages[randomImg]; // Assign random image to each img element
    }
};
