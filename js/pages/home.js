import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { createShowDetailsButton, createStartStudyingButton, createStudyLaterButton } from '../utils/buttonUtils.js'

export function initHome() {
    const topicsContainer = document.querySelector('.row');

    topicsController.topics.forEach(topic => {
        const col = createTopicCard(topic);
        topicsContainer.appendChild(col);
    });
}

function createTopicCard(topic) {
    const col = document.createElement('div');
    col.className = 'col';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const img = createTopicImage(topic);
    const cardBody = createCardBody(topic);

    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

function createTopicImage(topic) {
    const img = document.createElement('img');
    img.src = topic.image;
    img.className = 'card-img-top';
    img.alt = topic.title;

    return img;
}

function createCardBody(topic) {
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = createCardTitle(topic);
    const cardText = createCardText(topic);
    const estimatedTime = createEstimatedTime(topic);
    const showDetailsBtn = createShowDetailsButton(topic);
    const startStudyingBtn = createStartStudyingButton(topic);
    const studyLaterBtn = createStudyLaterButton(topic);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(estimatedTime);
    cardBody.appendChild(showDetailsBtn);
    cardBody.appendChild(startStudyingBtn);
    if (!storageController.isStudyingNow(topic.id)) {
        cardBody.appendChild(studyLaterBtn);
    }

    return cardBody;
}

function createCardTitle(topic) {
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = topic.title;

    return cardTitle;
}

function createCardText(topic) {
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = topic.description;

    return cardText;
}

function createEstimatedTime(topic) {
    const estimatedTime = document.createElement('p');
    estimatedTime.className = 'card-text';
    estimatedTime.innerHTML = `<strong>Estimated Time:</strong> ${topic.estimatedTime} minutes`;

    return estimatedTime;
}