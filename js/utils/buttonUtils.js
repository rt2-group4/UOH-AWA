import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { translationData } from "./translations.js";

// retrieve user's preferred language
const prefLang = localStorage["prefLang"]

const studyNowPath = "UOH-AWA/components/pages/learning-activities.html";

export function createShowDetailsOrGoToTopicButton(topic) {
    const isStudying = storageController.isStudyingNow(topic.id);
    const showDetailsBtn = document.createElement('a');

    showDetailsBtn.className = 'btn btn-primary me-2';

    if (isStudying) {
        showDetailsBtn.textContent = translationData[prefLang]['openContent'];
        const url = new URL(window.location.href);
        url.pathname = studyNowPath;
        showDetailsBtn.href = url.toString();
    } else {
        showDetailsBtn.href = `/UOH-AWA/components/pages/topic-details.html?id=${topic.id}`;
        showDetailsBtn.textContent = translationData[prefLang]['showDetails'];
    }
    showDetailsBtn.setAttribute('tabindex', '0');
    return showDetailsBtn;
}

export function createStartStudyingButton(topic) {
    const startStudyingBtn = document.createElement('button');
    const isStudying = storageController.isStudyingNow(topic.id);

    startStudyingBtn.textContent = isStudying ?  translationData[prefLang]['stopStudying'] : translationData[prefLang]['startStudying'];
    startStudyingBtn.className = isStudying ? 'btn btn-danger me-2' : 'btn btn-success me-2';
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
        // Handle situation where topic does not exist anymore
        if (topicDetails == null){
            storageController.setStudyingNow(topic.id);
        }else{
            if (confirm(`${translationData[prefLang]['currentlyStudying1']} "${topicDetails.title}". ${translationData[prefLang]['currentlyStudying2']} "${topic.title}"?`)) {
                storageController.setStudyingNow(topic.id);
            }
        }
    } else {
        storageController.setStudyingNow(topic.id);
    }
    const url = new URL(window.location.href);
    url.pathname = studyNowPath;
    window.location.href = url.toString();
}

export function createStudyLaterButton(topic) {
    const studyLaterBtn = document.createElement('button');
    const isInStudyPlan = storageController.isTopicInStudyPlan(topic.id);

    studyLaterBtn.textContent = isInStudyPlan ? translationData[prefLang]['removeFromPlan'] : translationData[prefLang]['studyLater'];
    studyLaterBtn.className = isInStudyPlan ? 'btn btn-warning me-2' : 'btn btn-secondary me-2';
    studyLaterBtn.setAttribute('tabindex', '0');

    studyLaterBtn.onclick = () => {
        handleStudyLaterClick(topic);
    };

    return studyLaterBtn;
}

function handleStudyLaterClick(topic) {
    const isInStudyPlan = storageController.isTopicInStudyPlan(topic.id);

    if (isInStudyPlan) {
        storageController.removeFromStudyPlan(topic.id);
    } else {
        storageController.addToStudyPlan(topic.id);
    }
}