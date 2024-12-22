import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';

export function initStudyPlan(){
    // Display Studying Now
    const studyingNow = storageController.getStudyingNow();
    const studyingNowDiv = document.getElementById('studying-now');
    const studyPlan = storageController.getStudyPlan();

    if (studyingNow) {
        const topic = topicsController.topics.find(t => t.id === studyingNow.topicId);
        if (topic && !studyPlan.includes(topic.id)) {
            const card = createTopicCard(topic, (id) => storageController.removeStudyingNow(id));
            studyingNowDiv.appendChild(card);
        } else {
            studyingNowDiv.innerHTML = '<p>No topic is currently being studied.</p>';
        }
    } else {
        studyingNowDiv.innerHTML = '<p>No topic is currently being studied.</p>';
    }

    // Display Study Plan
    const studyingNextDiv = document.getElementById('studying-next');

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
    
    // Set classes
    wrapper.className = 'col';
    card.className = 'card h-100';
    cardBody.className = 'card-body';
    
    // Create card content
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = topic.title;
    
    const estimatedTime = document.createElement('p');
    estimatedTime.className = 'card-text';
    estimatedTime.innerHTML = `<strong>Estimated Time:</strong> ${topic.estimatedTime} minutes`;
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeCallback.bind(storageController)(topic.id);
    
    // Assemble the card
    cardBody.append(cardTitle, estimatedTime, removeBtn);
    card.appendChild(cardBody);
    wrapper.appendChild(card);
    
    return wrapper;
}