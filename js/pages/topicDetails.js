import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { createStartStudyingButton, createStudyLaterButton } from '../utils/buttonUtils.js';
import { createTopicTitle, createTopicImage } from '../utils/topicUtils.js';
import { translationData } from "../utils/translations.js";

// retrieve user's preferred language
const prefLang = localStorage["prefLang"];

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
    document.getElementById('topic-details').innerHTML = `<p role="alert">${translationData[prefLang]['missingTopic']}</p>`;
}

function renderTopicDetails(topic) {
    const container = document.createElement('div');
    container.className = 'topic-details-container';
    container.setAttribute('role', 'main');
    container.setAttribute('aria-labelledby', 'topic-details-title');

    const card = document.createElement('div');
    card.className = 'topic-details-card';

    const img = createTopicImage(topic);
    img.className = 'topic-details-image';
    // Image properties to comply with WCAG:1.1.1.d
    img.alt = '';
    img.setAttribute('role', 'presentation');

    const content = document.createElement('div');
    content.className = 'topic-details-content';

    const title = createTopicTitle(topic);
    title.className = 'topic-details-title';
    title.id = 'topic-details-title';
    title.setAttribute('aria-label', `Title: ${topic.title}`);

    const description = createTopicDescription(topic);
    description.className = 'topic-details-description';
    description.setAttribute('aria-label', `Description: ${topic.description}`);

    const metaInfo = document.createElement('div');
    metaInfo.className = 'topic-details-meta';

    const estimatedTime = createEstimatedTime(topic);
    const prerequisites = createPrerequisites(topic);
    metaInfo.append(estimatedTime, prerequisites);

    const actionsWrapper = document.createElement('div');
    actionsWrapper.className = 'topic-details-actions';

    const startStudyingBtn = createStartStudyingButton(topic);
    startStudyingBtn.setAttribute('aria-label', `Start studying topic: ${topic.title}`);

    const studyLaterBtn = createStudyLaterButton(topic);
    studyLaterBtn.setAttribute('aria-label', `Add topic: ${topic.title} to study plan`);

    actionsWrapper.append(startStudyingBtn);
    if (!storageController.isStudyingNow(topic.id)) {
        actionsWrapper.appendChild(studyLaterBtn);
    }

    content.append(title, description, metaInfo, actionsWrapper);
    card.append(img, content);
    container.appendChild(card);

    document.getElementById('topic-details').appendChild(container);
}

function createTopicDescription(topic) {
    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = topic.description;
    description.setAttribute('aria-label', `Description of the topic: ${topic.description}`);
    return description;
}

function createEstimatedTime(topic) {
    const estimatedTime = document.createElement('p');
    estimatedTime.className = 'card-text';
    estimatedTime.innerHTML = `<strong>${translationData[prefLang]["estimatedStudyTime"]}:</strong> ${topic.estimatedTime} ${translationData[prefLang]["minutes"]}`;
    estimatedTime.setAttribute('aria-label', `Estimated study time: ${topic.estimatedTime} minutes`);
    return estimatedTime;
}

function createPrerequisites(topic) {
    const prerequisites = document.createElement('p');
    prerequisites.className = 'card-text';

    if (topic.prerequisites.length > 0) {
        prerequisites.innerHTML = `<strong>${translationData[prefLang]['preRequisites']}:</strong> `;
        topic.prerequisites.forEach((preId, index) => {
            const preTopic = topicsController.topics.find(t => t.id === preId);
            if (preTopic) {
                const link = document.createElement('a');
                link.href = `./topic-details.html?id=${preTopic.id}`;
                link.textContent = preTopic.title;
                link.setAttribute('aria-label', `Pre-requisite topic: ${preTopic.title}`);
                prerequisites.appendChild(link);
                if (index < topic.prerequisites.length - 1) {
                    prerequisites.innerHTML += ', ';
                }
            }
        });
    } else {
        prerequisites.innerHTML = `<strong>${translationData[prefLang]['preRequisites']}:</strong> None`;
        prerequisites.setAttribute('aria-label', 'Pre-requisites: None');
    }

    return prerequisites;
}
