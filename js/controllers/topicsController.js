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
