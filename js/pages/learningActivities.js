import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { createTopicTitle, createTopicImage } from '../utils/topicUtils.js';
import {translationData} from "../utils/translations.js";

// retrieve user's preferred language
const prefLang = localStorage["prefLang"];

export async function initLearningActivities() {
    const studyingNow = storageController.getStudyingNow();

    if (!studyingNow) {
        renderNoTopicMessage();
    } else {
        const topic = topicsController.topics.find(t => t.id === studyingNow.topicId);

        if (!topic) {
            renderTopicNotFoundMessage();
        } else {
            await renderLearningActivities(topic);
        }
    }
    translateTexts()
}

function renderNoTopicMessage() {
    document.getElementById('learning-activities').innerHTML = `<p>${translationData[prefLang]['submitAnswers']['notStudying']}</p>`;
}

function renderTopicNotFoundMessage() {
    document.getElementById('learning-activities').innerHTML = `<p>${translationData[prefLang]['submitAnswers']['missingTopic']}</p>`;
}

async function renderLearningActivities(topic) {
    const card = document.createElement('div');
    card.className = 'card';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'card-img-top';
    const img = createTopicImage(topic);
    imgWrapper.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = createTopicTitle(topic);
    const learningMaterials = await createLearningMaterials(topic);
    const testSection = createTestSection(topic);

    cardBody.appendChild(title);
    cardBody.appendChild(learningMaterials);
    cardBody.appendChild(testSection);

    card.appendChild(imgWrapper);
    card.appendChild(cardBody);

    document.getElementById('learning-activities').appendChild(card);
}

const processHtmlDocContent = (htmlString, varsValuesObj) => {
    // this function process content of an HTML string
    for (let line of htmlString.split("\n")) {
        const pattern = /\{\{[\w\-]+}}/g
        const tempVar = line.match(pattern)
        if (tempVar) {
            const tempVarValue = varsValuesObj[tempVar[0]
                .replaceAll('{', '')
                .replaceAll('}', '')]
            htmlString = tempVarValue ? htmlString.replace(tempVar.toString(), tempVarValue) :
                htmlString.replace(tempVar.toString(), "");
        }
    }
    return htmlString;
}

async function createLearningMaterials(topic) {
    const learningMaterials = document.createElement('div');
    learningMaterials.className = 'mb-4';
    
    let content = await topicsController.getLearningMaterials(topic.id);
    const processedContent = processHtmlDocContent(content, topic.learningMaterials['htmlVars'])
    learningMaterials.innerHTML = `${processedContent}`;
    return learningMaterials;
}

function createTestSection(topic) {
    const testSection = document.createElement('div');
    testSection.innerHTML = `<h4>Objective Test</h4>`;

    const form = createTestForm(topic);
    const resultDiv = createResultDiv();

    testSection.appendChild(form);
    testSection.appendChild(resultDiv);

    return testSection;
}

function createTestForm(topic) {
    const form = document.createElement('form');
    form.id = 'test-form';

    topic.test.forEach((q, index) => {
        const questionDiv = createQuestionDiv(q, index);
        form.appendChild(questionDiv);
    });

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn btn-primary';
    submitBtn.textContent = translationData[prefLang]["submitAnswers"];

    form.appendChild(submitBtn);

    form.addEventListener('submit', function (e) {
        handleTestSubmission(e, topic);
    });

    return form;
}

function createQuestionDiv(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'mb-3';

    const questionText = document.createElement('p');
    questionText.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionText);

    question.options.forEach((option, optIndex) => {
        const optionDiv = createOptionDiv(option, index, optIndex);
        questionDiv.appendChild(optionDiv);
    });

    return questionDiv;
}

function createOptionDiv(option, questionIndex, optionIndex) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'form-check';

    const input = document.createElement('input');
    input.className = 'form-check-input';
    input.type = 'radio';
    input.name = `question${questionIndex}`;
    input.id = `q${questionIndex}o${optionIndex}`;
    input.value = optionIndex;

    const label = document.createElement('label');
    label.className = 'form-check-label';
    label.htmlFor = `q${questionIndex}o${optionIndex}`;
    label.textContent = option;

    optionDiv.appendChild(input);
    optionDiv.appendChild(label);

    return optionDiv;
}

function createResultDiv() {
    const resultDiv = document.createElement('div');
    resultDiv.id = 'test-result';
    resultDiv.className = 'mt-3';
    return resultDiv;
}

function handleTestSubmission(event, topic) {
    event.preventDefault();

    const resultDiv = document.getElementById('test-result');
    let score = 0;

    topic.test.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score += 1;
        }
    });

    resultDiv.innerHTML = `<p>${translationData[prefLang]['yourScore']} ${score} / ${topic.test.length}</p>`;
}

const translateTexts = () => {
    document.title = translationData[prefLang]['learningActTitle'];
}
