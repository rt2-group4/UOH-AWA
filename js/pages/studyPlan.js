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
    
    wrapper.className = studyNow ? '' : 'col';
    card.className = studyNow ? 'study-now-card' : 'study-card';

    // Create and add image
    const img = document.createElement('img');
    img.src = topic.image;
    img.className = studyNow ? 'study-now-image' : 'study-card-image';
    img.alt = topic.title;

    const cardBody = document.createElement('div');
    cardBody.className = studyNow ? 'study-now-body' : 'study-card-body d-flex flex-column';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'study-card-title';
    cardTitle.textContent = topic.title;

    const estimatedTime = document.createElement('div');
    estimatedTime.className = 'study-time';
    estimatedTime.textContent = `${topic.estimatedTime} minutes`;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'study-actions';

    const showDetailsOrGoToTopicButton = createShowDetailsOrGoToTopicButton(topic);
    showDetailsOrGoToTopicButton.className = 'btn btn-primary btn-study';
    
    const removeBtn = createRemoveButton(topic, studyNow, removeCallback);
    removeBtn.className = 'btn btn-danger btn-study';

    actionsDiv.append(showDetailsOrGoToTopicButton, removeBtn);
    cardBody.append(cardTitle, estimatedTime, actionsDiv);
    card.append(img, cardBody);
    wrapper.appendChild(card);

    return wrapper;
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
