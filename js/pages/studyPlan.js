import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import {createShowDetailsOrGoToTopicButton} from '../utils/buttonUtils.js';

export function initStudyPlan() {
    displayStudyingNow();
    displayStudyPlan();
}

function displayStudyingNow() {
    const studyingNow = storageController.getStudyingNow();
    const studyingNowDiv = document.getElementById('studying-now');
    const studyPlan = storageController.getStudyPlan();

    if (studyingNow) {
        const topic = topicsController.topics.find(t => t.id === studyingNow.topicId);
        if (topic && !studyPlan.includes(topic.id)) {
            const card = createTopicCard(topic, true, (id) => storageController.removeStudyingNow());
            studyingNowDiv.appendChild(card);
        } else {
            studyingNowDiv.innerHTML = '<p>No topic is currently being studied.</p>';
        }
    } else {
        studyingNowDiv.innerHTML = '<p>No topic is currently being studied.</p>';
    }
}

function displayStudyPlan() {
    const studyingNextDiv = document.getElementById('studying-next');
    const studyPlan = storageController.getStudyPlan();

    if (studyPlan.length === 0) {
        studyingNextDiv.innerHTML = '<p>Your study plan is empty.</p>';
    } else {
        studyPlan.forEach(topicId => {
            const topic = topicsController.topics.find(t => t.id === topicId);
            if (topic) {
                const card = createTopicCard(topic, false,(id) => storageController.removeFromStudyPlan(id));
                studyingNextDiv.appendChild(card);
            }
        });
    }
}

function createTopicCard(topic, studyNow = false, removeCallback) {
    const wrapper = document.createElement('div');
    const card = document.createElement('div');
    const cardBody = document.createElement('div');

    wrapper.className = 'col';
    card.className = 'card h-100';
    cardBody.className = 'card-body';

    const cardTitle = createCardTitle(topic);
    const estimatedTime = createEstimatedTime(topic);
    const showDetailsOrGoToTopicButton = createShowDetailsOrGoToTopicButton(topic);
    const removeBtn = createRemoveButton(topic, studyNow, removeCallback);

    cardBody.append(cardTitle, estimatedTime, showDetailsOrGoToTopicButton, removeBtn);
    card.appendChild(cardBody);
    wrapper.appendChild(card);

    return wrapper;
}

function createCardTitle(topic) {
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = topic.title;
    return cardTitle;
}

function createEstimatedTime(topic) {
    const estimatedTime = document.createElement('p');
    estimatedTime.className = 'card-text';
    estimatedTime.innerHTML = `<strong>Estimated Time:</strong> ${topic.estimatedTime} minutes`;
    return estimatedTime;
}

function createRemoveButton(topic, studyNow = false, removeCallback) {
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger';
    if (studyNow) {
        removeBtn.textContent = 'Stop Studying';
    } else {
        removeBtn.textContent = 'Remove from Study Plan';
    }
    removeBtn.onclick = () => removeCallback.bind(storageController)(topic.id);
    return removeBtn;
}
