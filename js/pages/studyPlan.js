import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';

export function initStudyPlan(){
    // Display Studying Now
    const studyingNow = storageController.getStudyingNow();
    const studyingNowDiv = document.getElementById('studying-now');

    if (studyingNow) {
        const topic = topicsController.topics.find(t => t.id === studyingNow.topicId);
        if (topic) {
            studyingNowDiv.innerHTML = `
                    <h5>${topic.title}</h5>
                    <p>Estimated Time: ${topic.estimatedTime} minutes</p>
                `;
        } else {
            studyingNowDiv.innerHTML = '<p>No topic is currently being studied.</p>';
        }
    } else {
        studyingNowDiv.innerHTML = '<p>No topic is currently being studied.</p>';
    }

    // Display Study Plan
    const studyPlan = storageController.getStudyPlan();
    const studyingNextDiv = document.getElementById('studying-next');

    if (studyPlan.length === 0) {
        studyingNextDiv.innerHTML = '<p>Your study plan is empty.</p>';
    } else {
        studyPlan.forEach(topicId => {
            const topic = topicsController.topics.find(t => t.id === topicId);
            if (topic) {
                const col = document.createElement('div');
                col.className = 'col';

                const card = document.createElement('div');
                card.className = 'card h-100';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = topic.title;

                const estimatedTime = document.createElement('p');
                estimatedTime.className = 'card-text';
                estimatedTime.innerHTML = `<strong>Estimated Time:</strong> ${topic.estimatedTime} minutes`;

                const removeBtn = document.createElement('button');
                removeBtn.className = 'btn btn-danger';
                removeBtn.textContent = 'Remove';
                removeBtn.onclick = () => storageController.removeFromStudyPlan(topic.id);

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(estimatedTime);
                cardBody.appendChild(removeBtn);

                card.appendChild(cardBody);
                col.appendChild(card);
                studyingNextDiv.appendChild(col);
            }
        });
    }
}