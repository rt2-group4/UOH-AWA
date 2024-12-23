export function createCommonElements(topic) {
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = topic.title;

    const img = document.createElement('img');
    img.src = topic.image;
    img.className = 'img-fluid mb-3';
    img.alt = topic.title;

    cardBody.appendChild(title);
    cardBody.appendChild(img);

    return cardBody;
} 