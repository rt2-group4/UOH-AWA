import { translationData } from "../utils/translations.js";

class TopicsController {
    constructor() {
        // retrieve user's preferred language
        const prefLang = localStorage["prefLang"];

        this.topics = translationData[prefLang]["topicsData"];
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
