import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { createStartStudyingButton, createStudyLaterButton } from '../utils/buttonUtils.js'
import { createTopicTitle, createTopicImage } from '../utils/topicUtils.js';

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
    container.className = 'card';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'card-img-top';
    const img = createTopicImage(topic);
    imgWrapper.appendChild(img);

    const detailsWrapper = document.createElement('div');
    detailsWrapper.className = 'card-body';

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
                link.href = `components/pages/topic-details.html?id=${preTopic.id}`;
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
