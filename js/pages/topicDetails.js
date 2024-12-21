import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';

export function initTopicDetails(){
    // Get Topic ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const topicId = parseInt(urlParams.get('id'));

    // Find the topic
    const topic = topicsController.topics.find(t => t.id === topicId);

    if (!topic) {
        document.getElementById('topic-details').innerHTML = '<p>Topic not found.</p>';
    } else {
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h2');
        title.className = 'card-title';
        title.textContent = topic.title;

        const img = document.createElement('img');
        img.src = topic.image;
        img.className = 'img-fluid mb-3';
        img.alt = topic.title;

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = topic.description;

        const estimatedTime = document.createElement('p');
        estimatedTime.className = 'card-text';
        estimatedTime.innerHTML = `<strong>Estimated Study Time:</strong> ${topic.estimatedTime} minutes`;

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

        const studyLaterBtn = document.createElement('button');
        studyLaterBtn.className = 'btn btn-secondary me-2';
        studyLaterBtn.textContent = 'Study Later';
        studyLaterBtn.onclick = () => storageController.addToStudyPlanFromDetails(topic.id);

        const startStudyingBtn = document.createElement('button');
        startStudyingBtn.className = 'btn btn-success';
        startStudyingBtn.textContent = 'Start Studying';
        startStudyingBtn.onclick = () => storageController.startStudyingFromDetails(topic.id);

        cardBody.appendChild(title);
        cardBody.appendChild(img);
        cardBody.appendChild(description);
        cardBody.appendChild(estimatedTime);
        cardBody.appendChild(prerequisites);
        cardBody.appendChild(studyLaterBtn);
        cardBody.appendChild(startStudyingBtn);

        document.getElementById('topic-details').appendChild(cardBody);
    }
}