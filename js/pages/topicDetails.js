import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { createStartStudyingButton, createStudyLaterButton } from '../utils/buttonUtils.js'
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
    document.getElementById('topic-details').innerHTML = `<p>${translationData[prefLang]['missingTopic']}</p>`;
}

function renderTopicDetails(topic) {
    const container = document.createElement('div');
    container.className = 'topic-details-container';

    const card = document.createElement('div');
    card.className = 'topic-details-card';

    const img = createTopicImage(topic);
    img.className = 'topic-details-image';

    const content = document.createElement('div');
    content.className = 'topic-details-content';

    const title = createTopicTitle(topic);
    title.className = 'topic-details-title';

    const description = createTopicDescription(topic);
    description.className = 'topic-details-description';

    const metaInfo = document.createElement('div');
    metaInfo.className = 'topic-details-meta';
    
    const estimatedTime = createEstimatedTime(topic);
    const prerequisites = createPrerequisites(topic);
    metaInfo.append(estimatedTime, prerequisites);

    const actionsWrapper = document.createElement('div');
    actionsWrapper.className = 'topic-details-actions';

    const startStudyingBtn = createStartStudyingButton(topic);
    const studyLaterBtn = createStudyLaterButton(topic);

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
    return description;
}

function createEstimatedTime(topic) {
    const estimatedTime = document.createElement('p');
    estimatedTime.className = 'card-text';
    estimatedTime.innerHTML = `<strong>${translationData[prefLang]["estimatedStudyTime"]}:</strong> ${topic.estimatedTime} ${translationData[prefLang]["minutes"]}`;
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
                link.href = `components/pages/topic-details.html?id=${preTopic.id}`;
                link.textContent = preTopic.title;
                prerequisites.appendChild(link);
                if (index < topic.prerequisites.length - 1) {
                    prerequisites.innerHTML += ', ';
                }
            }
        });
    } else {
        prerequisites.innerHTML = `<strong>${translationData[prefLang]['preRequisites']}:</strong> None`;
    }
    return prerequisites;
}
