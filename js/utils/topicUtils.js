export function createTopicTitle(topic) {
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = topic.title;
    return title;
}

export function createTopicImage(topic) {
    const img = document.createElement('img');
    img.src = topic.image;
    img.className = 'w-100';
    img.style.height = '300px';
    img.style.objectFit = 'cover';
    img.alt = topic.title;
    return img;
} 