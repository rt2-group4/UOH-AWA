import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';

export function initIndex(){
    // Generate Topics Cards
    const topicsContainer = document.querySelector('.row');

    topicsController.topics.forEach(topic => {
        const col = document.createElement('div');
        col.className = 'col';

        const card = document.createElement('div');
        card.className = 'card h-100';

        const img = document.createElement('img');
        img.src = topic.image;
        img.className = 'card-img-top';
        img.alt = topic.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = topic.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = topic.description;

        const estimatedTime = document.createElement('p');
        estimatedTime.className = 'card-text';
        estimatedTime.innerHTML = `<strong>Estimated Time:</strong> ${topic.estimatedTime} minutes`;

        const showDetailsBtn = document.createElement('a');
        showDetailsBtn.href = `components/pages/topic-details.html?id=${topic.id}`;
        showDetailsBtn.className = 'btn btn-primary me-2';
        showDetailsBtn.textContent = 'Show Details';

        const studyLaterBtn = document.createElement('button');
        studyLaterBtn.className = 'btn btn-secondary me-2';
        studyLaterBtn.textContent = 'Study Later';
        studyLaterBtn.onclick = () => storageController.addToStudyPlan(topic.id);

        const startStudyingBtn = document.createElement('button');
        startStudyingBtn.className = 'btn btn-success';
        startStudyingBtn.textContent = 'Start Studying';
        startStudyingBtn.onclick = () => {
            storageController.setStudyingNow(topic.id);
            alert(`Started studying: ${topic.title}`);
            storageController.updateStudyPlanCount();
        };

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(estimatedTime);
        cardBody.appendChild(showDetailsBtn);
        cardBody.appendChild(studyLaterBtn);
        cardBody.appendChild(startStudyingBtn);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        topicsContainer.appendChild(col);
    });
}