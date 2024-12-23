import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { createStartStudyingButton, createStudyLaterButton } from '../utils/buttonUtils.js'

export function initTopicDetails() {
    const topicId = getTopicIdFromURL();
    const topic = findTopicById(topicId);

    if (!topic) {
        renderTopicNotFoundMessage();
    } else {
        renderTopicDetails(topic);
    }
}

function getTopicIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

function findTopicById(topicId) {
    return topicsController.topics.find(t => t.id === topicId);
}

function renderTopicNotFoundMessage() {
    document.getElementById('topic-details').innerHTML = '<p>Topic not found.</p>';
}

function renderTopicDetails(topic) {
    const container = document.createElement('div');
    container.className = 'd-flex flex-column flex-md-row align-items-start';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'me-md-3 mb-3 mb-md-0';
    const img = createTopicImage(topic);
    imgWrapper.appendChild(img);

    const detailsWrapper = document.createElement('div');
    detailsWrapper.className = 'd-flex flex-column';

    const title = createTopicTitle(topic);
    const description = createTopicDescription(topic);
    const estimatedTime = createEstimatedTime(topic);
    const prerequisites = createPrerequisites(topic);

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.className = 'd-flex flex-column gap-2 mt-3';

    const studyLaterBtn = createStudyLaterButton(topic);
    const startStudyingBtn = createStartStudyingButton(topic);

    buttonsWrapper.append(startStudyingBtn);
    if (!storageController.isStudyingNow(topic.id)) {
        buttonsWrapper.appendChild(studyLaterBtn);
    }

    detailsWrapper.append(title, description, estimatedTime, prerequisites, buttonsWrapper);

    container.append(imgWrapper, detailsWrapper);

    document.getElementById('topic-details').appendChild(container);
}

function createTopicTitle(topic) {
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = topic.title;
    return title;
}

function createTopicImage(topic) {
    const img = document.createElement('img');
    img.src = topic.image;
    img.className = 'img-fluid';
    img.alt = topic.title;
    return img;
}

function createTopicDescription(topic) {
    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = topic.description;
    return description;
}

function createEstimatedTime(topic) {
    const estimatedTime = document.createElement('p');
    estimatedTime.className = 'card-text';
    estimatedTime.innerHTML = `<strong>Estimated Study Time:</strong> ${topic.estimatedTime} minutes`;
    return estimatedTime;
}

function createPrerequisites(topic) {
    const prerequisites = document.createElement('p');
    prerequisites.className = 'card-text';

    if (topic.prerequisites.length > 0) {
        prerequisites.innerHTML = `<strong>Pre-requisites:</strong> `;
        topic.prerequisites.forEach((preId, index) => {
            const preTopic = topicsController.topics.find(t => t.id === preId);
            if (preTopic) {
                const link = document.createElement('a');
                link.href = `topic-details.html?id=${preTopic.id}`;
                link.textContent = preTopic.title;
                prerequisites.appendChild(link);
                if (index < topic.prerequisites.length - 1) {
                    prerequisites.innerHTML += ', ';
                }
            }
        });
    } else {
        prerequisites.innerHTML = `<strong>Pre-requisites:</strong> None`;
    }

    return prerequisites;
}
