// js/script.js

// Sample Topics Data
const topics = [
    {
        id: 1,
        title: "Introduction to Accessibility",
        image: "images/accessibility.jpg",
        description: "Learn the basics of web accessibility and its importance.",
        estimatedTime: 30,
        prerequisites: [],
        learningMaterials: "<p>Read about WCAG guidelines and best practices.</p>",
        test: [
            { question: "What does WCAG stand for?", options: ["Web Content Accessibility Guidelines", "Web Content Application Guide", "World Content Accessibility Group"], answer: 0 },
            { question: "Why is accessibility important?", options: ["Legal compliance", "Inclusive user experience", "Both"], answer: 2 },
            // Add more questions as needed
        ]
    },
    {
        id: 2,
        title: "Semantic HTML",
        image: "images/semantic-html.jpg",
        description: "Understand the role of semantic HTML in accessibility.",
        estimatedTime: 45,
        prerequisites: [1],
        learningMaterials: "<p>Explore semantic elements and their benefits.</p>",
        test: [
            { question: "Which tag is semantic for navigation?", options: ["<div>", "<nav>", "<span>"], answer: 1 },
            // Add more questions as needed
        ]
    },
    // Add more topics up to 5
];

// Initialize Study Plan in localStorage if not present
if (!localStorage.getItem('studyPlan')) {
    localStorage.setItem('studyPlan', JSON.stringify([]));
}

// Initialize Studying Now in localStorage if not present
if (!localStorage.getItem('studyingNow')) {
    localStorage.setItem('studyingNow', JSON.stringify(null));
}

// Function to get Study Plan
function getStudyPlan() {
    return JSON.parse(localStorage.getItem('studyPlan'));
}

// Function to add to Study Plan
function addToStudyPlan(topicId) {
    let studyPlan = getStudyPlan();
    if (!studyPlan.includes(topicId)) {
        studyPlan.push(topicId);
        localStorage.setItem('studyPlan', JSON.stringify(studyPlan));
        alert('Added to Study Plan!');
    } else {
        alert('Topic is already in Study Plan.');
    }
    updateStudyPlanCount();
}

// Function to remove from Study Plan
function removeFromStudyPlan(topicId) {
    let studyPlan = getStudyPlan();
    studyPlan = studyPlan.filter(id => id !== topicId);
    localStorage.setItem('studyPlan', JSON.stringify(studyPlan));
    updateStudyPlanCount();
    location.reload(); // Reload to update the display
}

// Function to set Studying Now
function setStudyingNow(topicId) {
    const studyingNow = { topicId: topicId, startedAt: new Date().toISOString() };
    localStorage.setItem('studyingNow', JSON.stringify(studyingNow));
    // Remove from study plan if present
    let studyPlan = getStudyPlan();
    studyPlan = studyPlan.filter(id => id !== topicId);
    localStorage.setItem('studyPlan', JSON.stringify(studyPlan));
    updateStudyPlanCount();
}

// Function to get Studying Now
function getStudyingNow() {
    return JSON.parse(localStorage.getItem('studyingNow'));
}

// Function to add to Study Plan from Topic Details
function addToStudyPlanFromDetails(topicId) {
    addToStudyPlan(topicId);
}

// Function to start studying from Topic Details
function startStudyingFromDetails(topicId) {
    setStudyingNow(topicId);
    window.location.href = 'learning-activities.html';
}

// Function to update Study Plan Count in Navbar
function updateStudyPlanCount() {
    const count = getStudyPlan().length;
    const elements = document.querySelectorAll('.study-plan-count');
    elements.forEach(el => {
        el.textContent = count;
    });
}

// Call updateStudyPlanCount on script load
document.addEventListener('DOMContentLoaded', updateStudyPlanCount);
