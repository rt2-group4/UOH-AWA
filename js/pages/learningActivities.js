import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';
import { createTopicTitle, createTopicImage } from '../utils/topicUtils.js';

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
}

function renderNoTopicMessage() {
    document.getElementById('learning-activities').innerHTML = '<p>No topic is currently being studied.</p>';
}

function renderTopicNotFoundMessage() {
    document.getElementById('learning-activities').innerHTML = '<p>Topic not found.</p>';
}

async function renderLearningActivities(topic) {
    const card = document.createElement('div');
    card.className = 'learning-content-card';

    const imgWrapper = document.createElement('div');
    const img = createTopicImage(topic);
    img.className = 'learning-content-image';
    imgWrapper.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'learning-content-body';

    const title = createTopicTitle(topic);
    title.className = 'mb-4';
    
    const learningMaterials = await createLearningMaterials(topic);
    learningMaterials.className = 'learning-materials';
    
    const testSection = createTestSection(topic);
    testSection.className = 'test-section';

    cardBody.appendChild(title);
    cardBody.appendChild(learningMaterials);
    cardBody.appendChild(testSection);

    card.appendChild(imgWrapper);
    card.appendChild(cardBody);

    document.getElementById('learning-activities').appendChild(card);
}

async function createLearningMaterials(topic) {
    const learningMaterials = document.createElement('div');
    learningMaterials.className = 'mb-4';
    
    const content = await topicsController.getLearningMaterials(topic.id);
    learningMaterials.innerHTML = `${content}`;
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
    submitBtn.textContent = 'Submit Answers';

    form.appendChild(submitBtn);

    form.addEventListener('submit', function (e) {
        handleTestSubmission(e, topic);
    });

    return form;
}

function createQuestionDiv(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'test-question';

    const questionText = document.createElement('p');
    questionText.className = 'h5 mb-4';
    questionText.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'test-options';

    question.options.forEach((option, optIndex) => {
        const optionDiv = createOptionDiv(option, index, optIndex);
        optionsDiv.appendChild(optionDiv);
    });

    questionDiv.appendChild(optionsDiv);
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

    const percentage = (score / topic.test.length) * 100;
    const resultClass = percentage >= 70 ? 'success' : 'warning';
    
    resultDiv.className = `test-result ${resultClass}`;
    resultDiv.innerHTML = `
        <p>Your score: ${score} / ${topic.test.length} (${percentage}%)</p>
        <p>${percentage >= 70 ? 'Great job! You\'ve passed the test.' : 'Keep studying and try again!'}</p>
    `;
}
