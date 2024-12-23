import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';

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
            const card = createTopicCard(topic, (id) => storageController.removeStudyingNow());
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
                const card = createTopicCard(topic, (id) => storageController.removeFromStudyPlan(id));
                studyingNextDiv.appendChild(card);
            }
        });
    }
}

function createTopicCard(topic, removeCallback) {
    const wrapper = document.createElement('div');
    const card = document.createElement('div');
    const cardBody = document.createElement('div');

    wrapper.className = 'col';
    card.className = 'card h-100';
    cardBody.className = 'card-body';

    const cardTitle = createCardTitle(topic);
    const estimatedTime = createEstimatedTime(topic);
    const removeBtn = createRemoveButton(topic, removeCallback);

    cardBody.append(cardTitle, estimatedTime, removeBtn);
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

function createRemoveButton(topic, removeCallback) {
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeCallback.bind(storageController)(topic.id);
    return removeBtn;
}
