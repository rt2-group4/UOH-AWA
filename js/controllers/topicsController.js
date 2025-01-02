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
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-3.html",
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
                prerequisites: [3],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-4.html",
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
                title: "Assistive Technologies",
                image: "/UOH-AWA/assets/images/assistive-tech.webp",
                description: "Become familiar with different assistive technologies used for web accessibility.",
                estimatedTime: 45,
                prerequisites: [1, 2],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-6.html",
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
                id: 7,
                title: "The Legal Aspect of Accessibility",
                image: "/UOH-AWA/assets/images/accessibility-law.webp",
                // description: "Learn about the legal component of accessibility with particular focus on the United Nations'" +
                //     "Convention on the Rights of Persons with Disabilities (2008) and the UK's Equality Act (2010)",
                description: "Learn about the legal component of accessibility.",
                estimatedTime: 60,
                prerequisites: [1],
                learningMaterials: "/UOH-AWA/components/learning-materials/topic-7.html",
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
