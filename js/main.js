import storageController from './controllers/storageController.js';
import { initHome } from './pages/home.js'
import { initStudyPlan } from './pages/studyPlan.js'
import { initTopicDetails } from './pages/topicDetails.js'
import { initLearningActivities } from './pages/learningActivities.js'
import { initLanguage } from "./utils/language.js"

// Function to dynamically load page content
function loadContent(){
    const page = document.body.dataset.page;

    switch (page) {
        case 'index':
            initHome();
            break;
        case 'study-plan':
            initStudyPlan();
            break;
        case 'topic-details':
            initTopicDetails();
            break;
        case 'learning-activities':
            initLearningActivities();
            break;
        default:
            console.warn('No initialization script for this page.');
            break;
    }
}

// Function to populate nav links dynamically based on selected page
function populateNavLinks() {
    const navLinks = document.getElementById('nav-links');
    const topicStudyCount = storageController.getTopicStudyCount();

    // Get the current page's URL
    const currentPage = window.location.pathname;
    const studyPlanLink = {
        href: '/UOH-AWA/components/pages/study-plan.html',
        text: 'Study Plan',
        countClass: 'study-plan-count',
        count: topicStudyCount,
        classes: 'nav-link',
    };
    const homeLink = { 
        href: '/UOH-AWA/index.html', 
        text: 'Home', 
        classes: 'nav-link' 
    };

    // Define links for each page
    const links = {
        '/UOH-AWA/index.html': [
            studyPlanLink,
        ],
        '/UOH-AWA/components/pages/learning-activities.html': [
            homeLink,
            studyPlanLink
        ],
        '/UOH-AWA/components/pages/study-plan.html': [
            homeLink,
            studyPlanLink
        ],
        '/UOH-AWA/components/pages/topic-details.html': [
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
                        ${link.text}<span class="${link.countClass}">${link.count}</span>
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
    const response = await fetch('/UOH-AWA/components/shared/header.html');
    if (response.ok) {
        headerContainer.innerHTML = await response.text();

        // Call function to customize links
        populateNavLinks();
        initLanguage();
    } else {
        console.error('Failed to load header:', response.statusText);
    }
}

// Function to dynamically load footer component
async function loadFooter() {
    const footerContainer = document.getElementById('footer');
    const response = await fetch('/UOH-AWA/components/shared/footer.html');
    if (response.ok) {
        let footerHTML = await response.text();
        // Replace the {{year}} placeholder with the current year
        const currentYear = new Date().getFullYear();
        footerHTML = footerHTML.replace('{{year}}', currentYear);
        footerContainer.innerHTML = footerHTML;
    } else {
        console.error(`Failed to load ${footerComponent}: ${response.statusText}`);
    }
}

// Inject header component on script load
document.addEventListener('DOMContentLoaded', loadHeader);
// Inject footer component on script load
document.addEventListener('DOMContentLoaded', loadFooter);
// Inject content on script load
document.addEventListener('DOMContentLoaded', loadContent);
