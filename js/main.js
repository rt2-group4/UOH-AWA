// Import necessary modules and controllers
import storageController from './controllers/storageController.js';
import { initHome } from './pages/home.js';
import { initStudyPlan } from './pages/studyPlan.js';
import { initTopicDetails } from './pages/topicDetails.js';
import { initLearningActivities } from './pages/learningActivities.js';
import { initLanguage } from "./utils/language.js";
import { translationData } from "./utils/translations.js";

//Variables used for logging and retry functions
const filename = "main.js";
let retries = 5;
let delay = 500;

// retrieve user's preferred language
const prefLang = localStorage["prefLang"];

/* ==========================================
   Content Loading Functions
========================================== */

/**
 * Dynamically loads page-specific content based on the current page.
 */
function loadContent() {
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

/**
 * Populates navigation links dynamically based on the selected page.
 */
function populateNavLinks() {
    const navLinks = document.getElementById('nav-links');
    const topicStudyCount = storageController.getTopicStudyCount();

    // Get the current page's URL path
    const currentPage = window.location.pathname;

    // Define individual navigation links
    const studyPlanLink = {
        href: '/UOH-AWA/components/pages/study-plan.html',
        text: translationData[prefLang]['studyPlan'],
        countClass: 'study-plan-count',
        count: topicStudyCount,
        classes: 'nav-link',
    };
    const homeLink = { 
        href: '/UOH-AWA/index.html', 
        text: translationData[prefLang]['home'],
        classes: 'nav-link' 
    };

    // Define links for specific pages
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

    // Default navigation links if the current page isn't explicitly listed
    const defaultLinks = [
        homeLink,
        studyPlanLink
    ];

    // Determine which links to display based on the current page
    const pageLinks = links[currentPage] || defaultLinks;

    // Generate and inject the HTML for navigation links
    navLinks.innerHTML = pageLinks
        .map(link => {
            if (link.countClass) {
                // If the link includes a count (e.g., Study Plan with a study count)
                return `
                    <a href="${link.href}" class="${link.classes}">
                        ${link.text} <span class="${link.countClass}">${link.count}</span>
                    </a>
                `;
            } else {
                // Regular navigation link without a count
                return `<a href="${link.href}" class="${link.classes}">${link.text}</a>`;
            }
        })
        .join('');
}

/* ==========================================
   Accessibility Toolbar Functions
========================================== */

/**
 * Dynamically loads the accessibility toolbar into the DOM.
 * Retries loading if the toolbar container isn't found immediately.
 */
async function loadAccessibilityToolbar() {
    /**
     * Injects the accessibility toolbar HTML into the toolbar container.
     */
    async function injectToolbar() {
        const toolbarContainer = document.getElementById('accessibility-toolbar');
        
        if (!toolbarContainer) {
            if (retries > 0) {
                console.warn(`[Accessibility Toolbar] Retry loading in ${delay}ms. Retries left: ${retries}`);
                setTimeout(() => loadAccessibilityToolbar(retries - 1, delay), delay);
            } else {
                console.error('[Accessibility Toolbar] Failed after maximum retries. Aborting...');
            }
            return;
        }

        try {
            const response = await fetch('/UOH-AWA/components/shared/accessibility-toolbar.html');
            if (response.ok) {
                toolbarContainer.innerHTML = await response.text();
                console.log('[Accessibility Toolbar] Successfully loaded into DOM.');
            } else {
                console.error(`[Accessibility Toolbar] Failed to load. HTTP Status: ${response.status}`);
            }
        } catch (error) {
            console.error('[Accessibility Toolbar] Fetch Error:', error.message);
        }
    }

    // Check if the accessibility toolbar element exists in the DOM
    if (!document.getElementById('accessibility-toolbar')) {
        // Observe the DOM for changes to detect when the toolbar is added
        const observer = new MutationObserver((mutations, observer) => {
            if (document.getElementById('accessibility-toolbar')) {
                observer.disconnect();
                injectToolbar();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        // If the toolbar already exists, inject its content immediately
        injectToolbar();
    }
}

/**
 * Initializes the accessibility toolbar with retry logic.
 * Ensures the toolbar is initialized after it's loaded into the DOM.
 * @param {number} retries - Number of retry attempts remaining.
 * @param {number} delay - Delay between retries in milliseconds.
 */
function populateAccessibilityToolbar() {
    console.log(`[${filename}] Attempting to initialize Accessibility Toolbar. Retries left: ${retries}`);

    const toolbar = document.getElementById('accessibility-toolbar');

    if (toolbar) {
        console.log('[${filename}] Accessibility Toolbar found. Initializing...');
        initialiseAccessibilityToolbar(retries, delay);
    } 
    else if (retries > 0) {
        console.warn(`[Main.js] #accessibility-toolbar not found. Retrying in ${delay}ms...`);
        setTimeout(() => initialiseAccessibilityToolbar(retries - 1, delay), delay);
    }
    else {
        console.error('[${filename}] Failed to initialize Accessibility Toolbar after maximum retries.');
    }
}

/* ==========================================
   Header and Footer Loading Functions
========================================== */

/**
 * Dynamically loads the header component into the DOM.
 * Also populates navigation links and initializes language settings.
 */
async function loadHeader() {
    const headerContainer = document.getElementById('header');
    try {
        const response = await fetch('/UOH-AWA/components/shared/header.html');
        if (response.ok) {
            headerContainer.innerHTML = await response.text();

            // Customize navigation links and initialize language settings
            populateNavLinks();
            initLanguage();
        } else {
            console.error('Failed to load header:', response.statusText);
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

/**
 * Dynamically loads the footer component into the DOM.
 * Replaces placeholders with dynamic content such as the current year.
 */
async function loadFooter() {
    const footerContainer = document.getElementById('footer');
    try {
        const response = await fetch('/UOH-AWA/components/shared/footer.html');
        if (response.ok) {
            let footerHTML = await response.text();
            // Replace the {{year}} placeholder with the current year
            const currentYear = new Date().getFullYear();
            footerHTML = footerHTML.replace('{{year}}', currentYear).replace(
                "{{footer_text}}", translationData[prefLang]['footerTxt']);
            footerContainer.innerHTML = footerHTML;
        } else {
            console.error('Failed to load footer:', response.statusText);
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

const translateTexts = () => {
    document.title = translationData[prefLang]['homeTitle']

    const topicsHeader = document.getElementById("topicsHeader");
    topicsHeader ? topicsHeader.innerText = translationData[prefLang]['topics'] : null;
}

/* ==========================================
   DOM Content Loaded Event Listener
========================================== */

/**
 * Initializes various components once the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    loadContent();
    loadAccessibilityToolbar();
    populateAccessibilityToolbar();
});
