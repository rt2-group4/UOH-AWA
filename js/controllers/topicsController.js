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
                learningMaterials: "<p>Read about WCAG guidelines and best practices.</p>",
                test: [
                    { question: "What does WCAG stand for?", options: ["Web Content Accessibility Guidelines", "Web Content Application Guide", "World Content Accessibility Group"], answer: 0 },
                    { question: "Why is accessibility important?", options: ["Legal compliance", "Inclusive user experience", "Both"], answer: 2 },
                ]
            },
            {
                id: 2,
                title: "Semantic HTML",
                image: "/UOH-AWA/assets/images/semantic-html.webp",
                description: "Understand the role of semantic HTML in accessibility.",
                estimatedTime: 45,
                prerequisites: [1],
                learningMaterials: "<p>Explore semantic elements and their benefits.</p>",
                test: [
                    { question: "Which tag is semantic for navigation?", options: ["<div>", "<nav>", "<span>"], answer: 1 },
                ]
            },
            {
                id: 3,
                title: "Visual Disabilities",
                image: "/UOH-AWA/assets/images/visual-disabilities.webp",
                description: "Learn about web accessibility for users with visual impairments.",
                estimatedTime: 40,
                prerequisites: [2],
                learningMaterials: "<p>Understanding visual disabilities and their impact on web accessibility</p>",
                test: [
                    { 
                        question: "What is the minimum contrast ratio recommended by WCAG for normal text?",
                        options: ["2.1:1", "4.5:1", "3:1"],
                        answer: 1
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
                    }
                ]
            },
            {
                id: 4,
                title: "Cognitive Disabilities",
                image: "/UOH-AWA/assets/images/cognitive-disabilities.webp",
                description: "A guide to web accessibility for users with cognitive disabilities.",
                estimatedTime: 35,
                prerequisites: [1],
                learningMaterials: "<p>Understanding cognitive disabilities and web accessibility</p>",
                test: [
                    {
                        question: "Which of these is most important for users with cognitive disabilities?",
                        options: ["Fancy animations", "Clear and consistent navigation", "Multiple navigation options"],
                        answer: 1
                    },
                    {
                        question: "What is a good practice for reducing cognitive load?",
                        options: ["Breaking content into small chunks", "Using complex terminology", "Adding background music"],
                        answer: 0
                    },
                    {
                        question: "Which typography practice helps users with cognitive disabilities?",
                        options: ["Decorative fonts", "Left-aligned text", "Justified text"],
                        answer: 1
                    }
                ]
            },
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
}

// Export an instance for Singleton behavior
const topicsControllerInstance = new TopicsController();
export default topicsControllerInstance;
