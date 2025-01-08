import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { showCustomDialog } from './dialogueUtils.js';

const studyNowPath = "UOH-AWA/components/pages/learning-activities.html";

export function createShowDetailsOrGoToTopicButton(topic) {
    const isStudying = storageController.isStudyingNow(topic.id);
    const showDetailsBtn = document.createElement('a');

    showDetailsBtn.className = 'btn btn-primary me-2';

    if (isStudying) {
        showDetailsBtn.textContent = 'Open Content';
        const url = new URL(window.location.href);
        url.pathname = studyNowPath;
        showDetailsBtn.href = url.toString();
    } else {
        showDetailsBtn.href = `/UOH-AWA/components/pages/topic-details.html?id=${topic.id}`;
        showDetailsBtn.textContent = 'Show Details';
    }
    showDetailsBtn.setAttribute('tabindex', '0');
    return showDetailsBtn;
}

export function createStartStudyingButton(topic) {
    const startStudyingBtn = document.createElement('button');
    const isStudying = storageController.isStudyingNow(topic.id);

    startStudyingBtn.textContent = isStudying ? 'Stop Studying' : 'Start Studying';
    startStudyingBtn.className = isStudying ? 'btn btn-danger w-100' : 'btn btn-success me-2';
    startStudyingBtn.setAttribute('tabindex', '0');

    startStudyingBtn.onclick = () => {
        handleStartStudyingClick(topic);
    };

    return startStudyingBtn;
}

function handleStartStudyingClick(topic) {
    const isStudying = storageController.isStudyingNow(topic.id);

    if (isStudying) {
        storageController.setStudyingNow(null);
        return;
    }

    const currentStudying = storageController.getStudyingNow();
    if (currentStudying) {
        let topicDetails = topicsController.getTopicById(currentStudying.topicId);

        if (topicDetails == null) {
            storageController.setStudyingNow(topic.id);
            redirectToStudyNow();
        } else {
            showCustomDialog(`You are currently studying "${topicDetails.title}". Do you want to stop it and start studying "${topic.title}"?`,
                () => {
                    storageController.setStudyingNow(topic.id);
                    redirectToStudyNow();
                }
            );
        }
    } else {
        storageController.setStudyingNow(topic.id);
        redirectToStudyNow();
    }
}

function redirectToStudyNow() {
    const url = new URL(window.location.href);
    url.pathname = studyNowPath;
    window.location.href = url.toString();
}

export function createStudyLaterButton(topic) {
    const studyLaterBtn = document.createElement('button');
    const isInStudyPlan = storageController.isTopicInStudyPlan(topic.id);

    function updateButtonAppearance(isInPlan) {
        studyLaterBtn.textContent = isInPlan ? 'Remove from Study Plan' : 'Study Later';
        studyLaterBtn.className = `btn ${isInPlan ? 'btn-warning' : 'btn-secondary'} w-100`;
    }

    updateButtonAppearance(isInStudyPlan);
    studyLaterBtn.setAttribute('tabindex', '0');

    studyLaterBtn.onclick = () => {
        const isInPlan = storageController.isTopicInStudyPlan(topic.id);
        if (isInPlan) {
            storageController.removeFromStudyPlan(topic.id);
        } else {
            storageController.addToStudyPlan(topic.id);
        }
        updateButtonAppearance(!isInPlan);
    };

    return studyLaterBtn;
}