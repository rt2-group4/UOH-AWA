import topicsController from '../controllers/topicsController.js';
import storageController from '../controllers/storageController.js';

export function initLearningActivities(){
    // Get Studying Now
    const studyingNow = storageController.getStudyingNow();

    if (!studyingNow) {
        document.getElementById('learning-activities').innerHTML = '<p>No topic is currently being studied.</p>';
    } else {
        const topic = topicsController.topics.find(t => t.id === studyingNow.topicId);
        if (!topic) {
            document.getElementById('learning-activities').innerHTML = '<p>Topic not found.</p>';
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

            const learningMaterials = document.createElement('div');
            learningMaterials.className = 'mb-4';
            learningMaterials.innerHTML = `<h4>Learning Materials</h4>${topic.learningMaterials}`;

            const testSection = document.createElement('div');
            testSection.innerHTML = `<h4>Objective Test</h4>`;

            const form = document.createElement('form');
            form.id = 'test-form';

            topic.test.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'mb-3';

                const question = document.createElement('p');
                question.textContent = `${index + 1}. ${q.question}`;
                questionDiv.appendChild(question);

                q.options.forEach((option, optIndex) => {
                    const optionDiv = document.createElement('div');
                    optionDiv.className = 'form-check';

                    const input = document.createElement('input');
                    input.className = 'form-check-input';
                    input.type = 'radio';
                    input.name = `question${index}`;
                    input.id = `q${index}o${optIndex}`;
                    input.value = optIndex;

                    const label = document.createElement('label');
                    label.className = 'form-check-label';
                    label.htmlFor = `q${index}o${optIndex}`;
                    label.textContent = option;

                    optionDiv.appendChild(input);
                    optionDiv.appendChild(label);
                    questionDiv.appendChild(optionDiv);
                });

                form.appendChild(questionDiv);
            });

            const submitBtn = document.createElement('button');
            submitBtn.type = 'submit';
            submitBtn.className = 'btn btn-primary';
            submitBtn.textContent = 'Submit Answers';

            form.appendChild(submitBtn);
            testSection.appendChild(form);

            const resultDiv = document.createElement('div');
            resultDiv.id = 'test-result';
            resultDiv.className = 'mt-3';

            testSection.appendChild(resultDiv);

            cardBody.appendChild(title);
            cardBody.appendChild(img);
            cardBody.appendChild(learningMaterials);
            cardBody.appendChild(testSection);

            document.getElementById('learning-activities').appendChild(cardBody);

            // Handle Test Submission
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                let score = 0;
                topic.test.forEach((q, index) => {
                    const selected = document.querySelector(`input[name="question${index}"]:checked`);
                    if (selected && parseInt(selected.value) === q.answer) {
                        score += 1;
                    }
                });
                resultDiv.innerHTML = `<p>Your score: ${score} / ${topic.test.length}</p>`;
                // Optionally, you can end the study session here
            });
        }
    }
}