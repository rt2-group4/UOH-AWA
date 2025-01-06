import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { createShowDetailsOrGoToTopicButton, createStartStudyingButton, createStudyLaterButton } from '../utils/buttonUtils.js'

export function initHome() {
    const track = document.querySelector('.topics-track');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    // Create and append topic cards
    topicsController.topics.forEach(topic => {
        const topicItem = document.createElement('div');
        topicItem.className = 'topic-item';
        const card = createTopicCard(topic);
        topicItem.appendChild(card);
        track.appendChild(topicItem);
    });

    let currentIndex = 0;
    const itemsPerView = getItemsPerView();
    const maxIndex = Math.max(0, topicsController.topics.length - itemsPerView);

    function getItemsPerView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 992) return 2;
        return 3;
    }

    function updateCarousel(transition = true) {
        const itemWidth = 100 / itemsPerView;
        const offset = -(currentIndex * itemWidth);
        track.style.transition = transition ? 'transform 0.5s ease-in-out' : 'none';
        track.style.transform = `translateX(${offset}%)`;
        
        // Update button states
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;
        
        // Add visual feedback for disabled state
        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }

    // Initial position and button states
    updateCarousel(false);

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newItemsPerView = getItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            location.reload();
        }
    });
}

function createTopicCard(topic) {
    const col = document.createElement('div');
    col.className = 'col';

    const card = document.createElement('div');
    card.className = 'card h-100';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-topic-id', topic.id);

    const imgContainer = document.createElement('div');
    imgContainer.className = 'card-img-container';

    const img = createTopicImage(topic);
    imgContainer.appendChild(img);

    const cardBody = createCardBody(topic);

    card.appendChild(imgContainer);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

function createTopicImage(topic) {
    const img = document.createElement('img');
    img.src = topic.image;
    img.className = 'card-img-top';
    img.alt = "";

    return img;
}

function createCardBody(topic) {
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = createCardTitle(topic);
    const cardText = createCardText(topic);
    const estimatedTime = createEstimatedTime(topic);
    
    // Create button group container
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    const ShowDetailsOrGoToTopicBtn = createShowDetailsOrGoToTopicButton(topic);
    const startStudyingBtn = createStartStudyingButton(topic);

    // Check if we're currently studying this topic
    const isStudying = storageController.isStudyingNow(topic.id);

    if (isStudying) {
        // If studying, we only have 2 buttons - stack them vertically
        ShowDetailsOrGoToTopicBtn.className = 'btn btn-primary w-100';
        buttonGroup.appendChild(ShowDetailsOrGoToTopicBtn);
        buttonGroup.appendChild(startStudyingBtn);
    } else {
        // If not studying, we have 3 buttons - use the original layout
        const actionRow = document.createElement('div');
        actionRow.className = 'button-row';
        
        ShowDetailsOrGoToTopicBtn.className = 'btn btn-primary';
        startStudyingBtn.className = 'btn btn-success';
        
        actionRow.appendChild(ShowDetailsOrGoToTopicBtn);
        actionRow.appendChild(startStudyingBtn);
        buttonGroup.appendChild(actionRow);

        // Create second row for Study Later
        const studyLaterRow = document.createElement('div');
        studyLaterRow.className = 'button-row';
        const studyLaterBtn = createStudyLaterButton(topic);
        studyLaterRow.appendChild(studyLaterBtn);
        buttonGroup.appendChild(studyLaterRow);
    }

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(estimatedTime);
    cardBody.appendChild(buttonGroup);

    return cardBody;
}
function createCardTitle(topic) {
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = topic.title;

    return cardTitle;
}

function createCardText(topic) {
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = topic.description;

    return cardText;
}

function createEstimatedTime(topic) {
    const estimatedTime = document.createElement('p');
    estimatedTime.className = 'card-text';
    estimatedTime.innerHTML = `<strong>Estimated Time:</strong> ${topic.estimatedTime} minutes`;

    return estimatedTime;
}
