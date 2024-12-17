// js/script.js

// Sample Topics Data
const topics = [
    {
        id: 1,
        title: "Introduction to Accessibility",
        image: "./assets/images/accessibility.webp",
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
        image: "./assets/images/semantic-html.webp",
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

// Function to update Study Plan Count in Navbar
function updateStudyPlanCount() {
    const count = getStudyPlan().length;
    const elements = document.querySelectorAll('.study-plan-count');
    elements.forEach(el => {
        el.textContent = count;
    });
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
    window.location.href = '/components/pages/learning-activities.html';
}

// Function to populate nav links dynamically based on selected page
function populateNavLinks() {
    const navLinks = document.getElementById('nav-links');
    const studyPlanCount = getStudyPlan().length;

    // Get the current page's URL
    const currentPage = window.location.pathname;
    const studyPlanLink = {
        href: '/components/pages/study-plan.html',
        text: 'Study Plan',
        countClass: 'study-plan-count',
        count: studyPlanCount,
        classes: 'text-white me-3',
    };
    const homeLink = { href: '/index.html', text: 'Home', classes: 'text-white me-3' };

    // Define links for each page
    const links = {
        'index.html': [
            studyPlanLink,
        ],
        'components/pages/learning-activities.html': [
            homeLink,
            studyPlanLink
        ],
        'components/pages/study-plan.html': [
            homeLink,
            studyPlanLink
        ],
        'components/pages/topic-details.html': [
            homeLink,
            studyPlanLink
        ],
    };

    // Default links if the current page isn't explicitly listed
    const defaultLinks = [
        homeLink,
        studyPlanLink
    ];

    // Get links for the current page or fallback to default links
    const pageLinks = links[currentPage] || defaultLinks;

    navLinks.innerHTML = pageLinks
        .map(link => {
            if (link.countClass) {
                // If the link has a count (e.g., Study Plan)
                return `
                    <a href="${link.href}" class="${link.classes}">
                        ${link.text} (<span class="${link.countClass}">${link.count}</span>)
                    </a>
                `;
            } else {
                // Regular link
                return `<a href="${link.href}" class="${link.classes}">${link.text}</a>`;
            }
        })
        .join('');
}

// Function to dynamically load header component
async function loadHeader() {
    const headerContainer = document.getElementById('header');
    const response = await fetch('./components/shared/header.html');
    if (response.ok) {
        const headerHTML = await response.text();
        headerContainer.innerHTML = headerHTML;

        // Call function to customize links
        populateNavLinks();
    } else {
        console.error('Failed to load header:', response.statusText);
    }
}

// Function to dynamically load footer component
async function loadFooter() {
    const footerContainer = document.getElementById('footer');
    const response = await fetch('./components/shared/footer.html');
    if (response.ok) {
        const footerHTML = await response.text();
        footerContainer.innerHTML = footerHTML;
    } else {
        console.error(`Failed to load ${footerComponent}: ${response.statusText}`);
    }
}

// Inject header component on script load
document.addEventListener('DOMContentLoaded', loadHeader);
// Inject footer component on script load
document.addEventListener('DOMContentLoaded', loadFooter);
