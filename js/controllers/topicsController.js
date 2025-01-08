class TopicsController {
    constructor() {
        this.topics = [
            {
                id: 1,
                title: "Introduction to Accessibility",
                image: "/UOH-AWA/assets/images/accessibility.webp",
                description: "Learn the basics of web accessibility and its importance.",
                estimatedTime: 30,
                prerequisites: [],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-1.html",
                test: [
                    { question: "What does WCAG stand for?", options: ["Web Content Accessibility Guidelines", "Web Content Application Guide", "World Content Accessibility Group"], answer: 0 },
                    { question: "Why is accessibility important?", options: ["Legal compliance", "Inclusive user experience", "Both"], answer: 2 },
                    { question: "Which is NOT a principle of accessibility in WCAG?", options: ["Perceivable", "Operable", "Sophisticated", "Understandable"], answer: 2 },
                ]
            },
            {
                id: 2,
                title: "Semantic HTML",
                image: "/UOH-AWA/assets/images/semantic-html.webp",
                description: "Understand the role of semantic HTML in accessibility.",
                estimatedTime: 45,
                prerequisites: [1],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-2.html",
                test: [
                    { 
                        question: "Which tag is semantic for navigation?", 
                        options: ["<div>", "<nav>", "<span>"], 
                        answer: 1 
                    },
                    { 
                        question: "Which of the following is a type of HTML element?", 
                        options: ["non-semantic", "semantic", "both", "none"], 
                        answer: 2 
                    },
                    { 
                        question: "Which of the following is NOT a semantic element?", 
                        options: ["<form>", "<article>", "<div>", "<table>"], 
                        answer: 2 
                    },
                    { 
                        question: "What is the difference between semantic and non-semantic elements?", 
                        options: ["Semantic elements are only for developers, while non-semantic elements are for users.", "Semantic elements describe their meaning to the browser and developers, while non-semantic elements do not.", "Non-semantic elements are faster to load compared to semantic elements.", "Semantic elements cannot be styled using CSS."],  
                        answer: 1 
                    }
                ]
            },
            {
                id: 3,
                title: "Visual Disabilities",
                image: "/UOH-AWA/assets/images/visual-disabilities.webp",
                description: "Learn about web accessibility for users with visual impairments.",
                estimatedTime: 40,
                prerequisites: [2],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-3.html",
                test: [
                    { 
                        question: "Which of the following is NOT a visual cue ?",
                        options: ["Images", "Links", "Buttons", "Meta"],
                        answer: 3
                    },
                    {
                        question: "Which attribute is essential for making images accessible to screen readers?",
                        options: ["src", "alt", "title"],
                        answer: 1
                    },
                    {
                        question: "What should you avoid when designing for color-blind users?",
                        options: ["Using patterns", "Using color alone to convey information", "Using bold text"],
                        answer: 1
                    },
                    {
                        question: "What is the main idea of web accessibility for people with visual disabilities?",
                        options: ["To make websites faster to load", "To enable users to perceive, understand, navigate, interact with, and contribute to the web.", "To make websites more colorful.", "To increase website traffic."],
                        answer: 1
                    }
                ]
            },
            {
                id: 4,
                title: "Cognitive Disabilities",
                image: "/UOH-AWA/assets/images/cognitive-disabilities.webp",
                description: "A guide to web accessibility for users with cognitive disabilities.",
                estimatedTime: 45,
                prerequisites: [3],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-4.html",
                test: [
                    {
                        question: "Which is the primary focus of cognitive accessibility?",
                        options: ["Making web pages colorful and attractive", "Designing digital content to be easily understandable and usable by individuals with cognitive disabilities", "Removing all text from web pages", "Increasing the loading speed of a website"],
                        answer: 1
                    },
                    {
                        question: "Which of the following is a guideline under the Web Content Accessibility Guidelines (WCAG) for cognitive web accessibility?",
                        options: ["Add complex animations", "Reduce the size of text on web pages", "Provide sufficient time for users to read and use content", "Use abbreviations without definitions"],
                        answer: 2
                    },
                    {
                        question: "What are the two main classifications of cognitive disabilities mentioned in the document?",
                        options: ["Physical and Emotional", "Medical and Behavioral", "Visual and Auditory", "Clinical and Functional"],
                        answer: 3
                    }
                ]
            },
            {
                id: 5,
                title: "Hearing Disabilities",
                image: "/UOH-AWA/assets/images/hearing-disabilities.webp",
                description: "Study how to make web content accessible for users with hearing impairments.",
                estimatedTime: 35,
                prerequisites: [4],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-5.html",
                test: [
                    {
                        question: "What is required for video content to be accessible to deaf users?",
                        options: ["Background music", "Captions", "High-quality audio"],
                        answer: 1
                    },
                    {
                        question: "Which format should be provided for audio-only content?",
                        options: ["Video recording", "Transcript", "Sign language"],
                        answer: 1
                    },
                    {
                        question: "What should accompany audio alerts on websites?",
                        options: ["Visual indicators", "Louder sounds", "Repeated alerts"],
                        answer: 0
                    }
                ]
            },
            {
                id: 6,
                title: "Motor Disabilities",
                image: "/UOH-AWA/assets/images/motor-disabilities.webp",
                description: "Learn the basics of web accessibility for users with different motor disabilities.",
                estimatedTime: 40,
                prerequisites: [5],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-6.html",
                test: [
                    {
                        question: "Which is the key principle of web accessibility for users with motor disabilities?",
                        options: ["Operable", "Precise", "Perceivable", "Understandable"],
                        answer: 0
                    },
                    {
                        question: "Which of these is NOT a way to make websites accessible?",
                        options: ["Support Effective Keyboard Navigation", "Reduce Actions that Require Too Many Keypresses", "Add a Search Field to Your Website", "Use small links"],
                        answer: 3
                    },
                    {
                        question: "Which assistive technology relies on neck muscle movements for navigation?",
                        options: ["Sip-and-puff switches", "Head wand", "Mouth stick", "Single switches"],
                        answer: 1
                    }
                ]
            },
            {
                id: 7,
                title: "Assistive Technologies",
                image: "/UOH-AWA/assets/images/assistive-tech.webp",
                description: "Become familiar with different assistive technologies used for web accessibility.",
                estimatedTime: 45,
                prerequisites: [1, 2],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-7.html",
                test: [
                    {
                        question: "What is the primary purpose of a screen reader?",
                        options: ["To make text larger", "To convert text to speech", "To change color contrast"],
                        answer: 1
                    },
                    {
                        question: "What is ARIA used for in web development?",
                        options: ["Styling elements", "Providing additional context to assistive technologies", "Adding animations"],
                        answer: 1
                    },
                    {
                        question: "Which of these helps keyboard-only users navigate a webpage?",
                        options: ["Skip links", "Hover effects", "Background images"],
                        answer: 0
                    },
                    {
                        question: "What should developers test their websites with?",
                        options: ["Multiple browsers only", "Screen readers and keyboard navigation", "Mobile devices only"],
                        answer: 1
                    }
                ]
            },
            {
                id: 8,
                title: "Color Design",
                image: "/UOH-AWA/assets/images/color-design.webp",
                description: "Learn about the different ways you can use colors to make your web product more accessible",
                estimatedTime: 40,
                prerequisites: [3, 4],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-8.html",
                test: [
                    {
                        question: "Why is it important to provide customization options for web users ?",
                        options: ["To make the design more visually appealing to the user", "To address a variety of individual needs, such as visual impairments and cognitive conditions", "To increase the loading speed of the website", "To reduce the website's size and make it more efficient"],
                        answer: 1
                    },
                    {
                        question: "Which of the following is a benefit of customization options for users with low vision?",
                        options: ["They can change the website's layout to a more complex design", "They can speed up page load times", "They can adjust text size, contrast, and background color for improved readability", "They can change the website's overall aesthetic to fit current trends"],
                        answer: 2
                    },
                    {
                        question: "What is one key principle of accessible web design related to color?",
                        options: ["Color should be used to make the design visually complex", "Color choices should rely solely on aesthetic preferences", "Color combinations should be chosen to be distinguishable by users with color blindness", "All design elements should be the same color to avoid confusion"],
                        answer: 2
                    }
                ]
            },
            {
                id: 9,
                title: "The Legal Aspect of Accessibility",
                image: "/UOH-AWA/assets/images/accessibility-law.webp",
                description: "Learn about the legal component of accessibility.",
                estimatedTime: 60,
                prerequisites: [1],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-9.html",
                test: [
                    {
                        question: "What is the main purpose of the Convention on the Rights of Persons with Disabilities (CRPD)?",
                        options: ["To provide financial aid", "To ensure equal rights and freedoms for persons with disabilities", "To establish medical standards"],
                        answer: 1
                    },
                    {
                        question: "Which of these is one of the key principles of CRPD?",
                        options: ["Economic growth", "Accessibility", "Environmental protection"],
                        answer: 1
                    },
                    {
                        question: "When was the CRPD adopted by the United Nations General Assembly?",
                        options: ["2004", "2006", "2008"],
                        answer: 1
                    }
                ]
            },
            {
                id: 10,
                title: "Web Content Accessibility Guidelines",
                image: "/UOH-AWA/assets/images/guidelines.webp",
                description: "Learn about the web content accessibility guidelines that developers should adhere to.",
                estimatedTime: 45,
                prerequisites: [9],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-10.html",
                test: [
                    {
                        question: "",
                        options: ["", "", ""],
                        answer: 1
                    },
                    {
                        question: "",
                        options: ["", "", ""],
                        answer: 1
                    },
                    {
                        question: "",
                        options: ["", "", ""],
                        answer: 1
                    }
                ]
            }
            // Add more topics here...
        ];
    }

    // Method to fetch a topic by ID
    getTopicById(id) {
        return this.topics.find(topic => topic.id === id) || null;
    }

    // Method to search topics by title
    searchTopicsByTitle(keyword) {
        return this.topics.filter(topic => topic.title.toLowerCase().includes(keyword.toLowerCase()));
    }

    async getLearningMaterials(topicId) {
        const topic = this.getTopicById(topicId);
        if (!topic) return null;
        
        try {
            const response = await fetch(topic.learningMaterials);
            if (!response.ok) throw new Error('Failed to load learning materials');
            return await response.text();
        } catch (error) {
            console.error('Error loading learning materials:', error);
            return '<p>Failed to load learning materials.</p>';
        }
    }
}

// Export an instance for Singleton behavior
const topicsControllerInstance = new TopicsController();
export default topicsControllerInstance;
