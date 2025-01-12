import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { showCustomDialog } from './dialogueUtils.js';
import { translationData } from "./translations.js";

// Retrieve user's preferred language
const prefLang = localStorage["prefLang"] || 'en-GB';
console.log(`Preferred language: ${prefLang}`);

const studyNowPath = "UOH-AWA/components/pages/learning-activities.html";

export function createShowDetailsOrGoToTopicButton(topic) {
    console.log(`Creating Show Details or Go To Topic button for topic ID: ${topic.id}`);
    try {
        const isStudying = storageController.isStudyingNow(topic.id);
        const showDetailsBtn = document.createElement('a');

        showDetailsBtn.className = 'btn btn-primary me-2';

        if (isStudying) {
            console.log(`User is currently studying topic ID: ${topic.id}`);
            showDetailsBtn.textContent = translationData[prefLang]['openContent'];
            const url = new URL(window.location.href);
            url.pathname = studyNowPath;
            showDetailsBtn.href = url.toString();
        } else {
            console.log(`User is not studying topic ID: ${topic.id}`);
            showDetailsBtn.href = `/UOH-AWA/components/pages/topic-details.html?id=${topic.id}`;
            showDetailsBtn.textContent = translationData[prefLang]['showDetails'];
        }
        showDetailsBtn.setAttribute('tabindex', '0');
        return showDetailsBtn;
    } catch (error) {
        console.error(`Error creating Show Details button for topic ID: ${topic.id}`, error);
        return null;
    }
}

export function createStartStudyingButton(topic) {
    console.log(`Creating Start Studying button for topic ID: ${topic.id}`);
    try {
        const startStudyingBtn = document.createElement('button');
        const isStudying = storageController.isStudyingNow(topic.id);

        startStudyingBtn.textContent = isStudying
            ? translationData[prefLang]['stopStudying']
            : translationData[prefLang]['startStudying'];
        startStudyingBtn.className = isStudying ? 'btn btn-danger w-100' : 'btn btn-success me-2';
        startStudyingBtn.setAttribute('tabindex', '0');

        startStudyingBtn.onclick = () => {
            console.log(`Start Studying button clicked for topic ID: ${topic.id}`);
            handleStartStudyingClick(topic);
        };

        return startStudyingBtn;
    } catch (error) {
        console.error(`Error creating Start Studying button for topic ID: ${topic.id}`, error);
        return null;
    }
}

function handleStartStudyingClick(topic) {
    console.log(`Handling Start Studying click for topic ID: ${topic.id}`);
    try {
        const isStudying = storageController.isStudyingNow(topic.id);

        if (isStudying) {
            console.log(`Stopping studying for topic ID: ${topic.id}`);
            storageController.setStudyingNow(null);
            return;
        }

        const currentStudying = storageController.getStudyingNow();
        if (currentStudying) {
            let topicDetails = topicsController.getTopicById(currentStudying.topicId);

            if (topicDetails == null) {
                console.warn(`Current studying topic not found. Switching to topic ID: ${topic.id}`);
                storageController.setStudyingNow(topic.id);
                redirectToStudyNow();
            } else {
                console.log(`Prompting user to switch from topic "${topicDetails.title}" to "${topic.title}"`);
                showCustomDialog(
                    `You are currently studying "${topicDetails.title}". Do you want to stop it and start studying "${topic.title}"?`,
                    () => {
                        console.log(`User confirmed switching to topic ID: ${topic.id}`);
                        storageController.setStudyingNow(topic.id);
                        redirectToStudyNow();
                    }
                );
            }
        } else {
            console.log(`Starting studying for topic ID: ${topic.id}`);
            storageController.setStudyingNow(topic.id);
            redirectToStudyNow();
        }
    } catch (error) {
        console.error(`Error handling Start Studying click for topic ID: ${topic.id}`, error);
    }
}

function redirectToStudyNow() {
    try {
        console.log(`Redirecting to study now path: ${studyNowPath}`);
        const url = new URL(window.location.href);
        url.pathname = studyNowPath;
        window.location.href = url.toString();
    } catch (error) {
        console.error('Error redirecting to Study Now page:', error);
    }
}

export function createStudyLaterButton(topic) {
    console.log(`Creating Study Later button for topic ID: ${topic.id}`);
    try {
        const studyLaterBtn = document.createElement('button');
        const isInStudyPlan = storageController.isTopicInStudyPlan(topic.id);

        function updateButtonAppearance(isInPlan) {
            try {
                studyLaterBtn.textContent = isInPlan
                    ? translationData[prefLang]['removeFromPlan']
                    : translationData[prefLang]['studyLater'];
                studyLaterBtn.className = `btn ${isInPlan ? 'btn-warning' : 'btn-secondary'} w-100`;
                console.log(`Button appearance updated for topic ID ${topic.id}: ${isInPlan ? 'Remove from Plan' : 'Study Later'}`);
            } catch (error) {
                console.error('Error updating Study Later button appearance:', error);
            }
        }

        updateButtonAppearance(isInStudyPlan);
        studyLaterBtn.setAttribute('tabindex', '0');

        studyLaterBtn.onclick = () => {
            try {
                const isInPlan = storageController.isTopicInStudyPlan(topic.id);
                if (isInPlan) {
                    console.log(`Removing topic ID ${topic.id} from study plan.`);
                    storageController.removeFromStudyPlan(topic.id);
                } else {
                    console.log(`Adding topic ID ${topic.id} to study plan.`);
                    storageController.addToStudyPlan(topic.id);
                }
                updateButtonAppearance(!isInPlan);
            } catch (error) {
                console.error(`Error handling Study Later button click for topic ID: ${topic.id}`, error);
            }
        };

        return studyLaterBtn;
    } catch (error) {
        console.error(`Error creating Study Later button for topic ID: ${topic.id}`, error);
        return null; // Return null if button creation fails
    }
}
