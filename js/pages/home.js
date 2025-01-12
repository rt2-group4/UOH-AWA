import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { translationData } from "../utils/translations.js";

// retrieve user's preferred language
const prefLang = localStorage["prefLang"]
import { createShowDetailsOrGoToTopicButton, createStartStudyingButton, createStudyLaterButton } from '../utils/buttonUtils.js';

export function initHome() {
    const track = document.querySelector('.topics-track');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    const isMobileView = window.innerWidth < 768;

    // Create and append topic cards
    topicsController.topics.forEach(topic => {
        const topicItem = document.createElement('div');
        topicItem.className = 'topic-item';
        topicItem.setAttribute('tabindex', '0');
        const card = createTopicCard(topic);
        topicItem.appendChild(card);
        track.appendChild(topicItem);
    });

    if (!isMobileView) {
        setupCarousel(track, prevButton, nextButton);
    } else {
        track.style.display = 'block';
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        const newIsMobileView = window.innerWidth < 768;
        if (newIsMobileView !== isMobileView) {
            location.reload();
        }
    });
}

function setupCarousel(track, prevButton, nextButton) {
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

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;

        prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextButton.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }

    updateCarousel(false);

    prevButton.setAttribute('aria-label', 'Previous topics');
    nextButton.setAttribute('aria-label', 'Next topics');

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
    // Image properties to comply with WCAG:1.1.1.d
    img.alt = '';
    img.setAttribute('role', 'presentation');

    return img;
}

function createCardBody(topic) {
    const isMobileView = window.innerWidth < 768;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = createCardTitle(topic);
    const cardText = createCardText(topic);
    const estimatedTime = createEstimatedTime(topic);

    // Create button group container
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    const showDetailsOrGoToTopicBtn = createShowDetailsOrGoToTopicButton(topic);
    const startStudyingBtn = createStartStudyingButton(topic);

    // Check if we're currently studying this topic
    const isStudying = storageController.isStudyingNow(topic.id);

    if (isStudying) {
        // If studying, we only have 2 buttons - stack them vertically
        showDetailsOrGoToTopicBtn.className = 'btn btn-primary w-100';
        showDetailsOrGoToTopicBtn.setAttribute('aria-label', `Go to topic content page: ${topic.title}`);
        startStudyingBtn.setAttribute('aria-label', `Stop studying topic: ${topic.title}`);
        buttonGroup.appendChild(showDetailsOrGoToTopicBtn);
        buttonGroup.appendChild(startStudyingBtn);
    } else {
        // If not studying, we have 3 buttons - use the original layout
        const actionRow = document.createElement('div');

        showDetailsOrGoToTopicBtn.className = 'btn btn-primary';
        showDetailsOrGoToTopicBtn.setAttribute('aria-label', `Go to the topic details page: ${topic.title}`);
        startStudyingBtn.className = 'btn btn-success';
        startStudyingBtn.setAttribute('aria-label', `Start studying topic: ${topic.title}`);

        if(!isMobileView){
            actionRow.className = 'button-row';
            actionRow.appendChild(showDetailsOrGoToTopicBtn);
            actionRow.appendChild(startStudyingBtn);
            buttonGroup.appendChild(actionRow);
        }else{
            buttonGroup.appendChild(showDetailsOrGoToTopicBtn);
            buttonGroup.appendChild(startStudyingBtn);
        }

        // Create second row for Study Later
        const studyLaterRow = document.createElement('div');
        studyLaterRow.className = 'button-row';
        const studyLaterBtn = createStudyLaterButton(topic);
        studyLaterBtn.setAttribute('aria-label', `Add topic: ${topic.title} to study plan`);
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
    const cardTitle = document.createElement('h3');
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
    estimatedTime.innerHTML = `<strong>Estimated Time:</strong> ${topic.estimatedTime} ${translationData[prefLang]['minutes']}`;

    return estimatedTime;
}

function equalizeCardHeights() {
    const cards = document.querySelectorAll('.card');
    let maxHeight = 0;

    cards.forEach(card => {
        card.style.height = 'auto';
        maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    cards.forEach(card => {
        card.style.minHeight = `${maxHeight}px`;
    });
}
