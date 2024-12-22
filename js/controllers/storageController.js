class StorageController {
    constructor() {
        this.storage = window['localStorage'];

        // Initialize Study Plan in localStorage if not present
        if (!this.storage.getItem('studyPlan')) {
            this.storage.setItem('studyPlan', JSON.stringify([]));
        }

        // Initialize Studying Now in localStorage if not present
        if (!this.storage.getItem('studyingNow')) {
            this.storage.setItem('studyingNow', JSON.stringify(null));
        }
    }

    // Function to get Study Plan
    getStudyPlan() {
        return JSON.parse(this.storage.getItem('studyPlan'));
    }

    getStudyPlanCount(){
        return this.getStudyPlan().length;
    }

    // Function to add to Study Plan
    addToStudyPlan(topicId) {
        let studyPlan = this.getStudyPlan();
        if (!studyPlan.includes(topicId)) {
            studyPlan.push(topicId);
            this.storage.setItem('studyPlan', JSON.stringify(studyPlan));
            alert('Added to Study Plan!');
        } else {
            alert('Topic is already in Study Plan.');
        }
        this.updateStudyPlanCount();
    }

    // Function to remove from Study Plan
    removeFromStudyPlan(topicId) {
        let studyPlan = this.getStudyPlan();
        studyPlan = studyPlan.filter(id => id !== topicId);
        this.storage.setItem('studyPlan', JSON.stringify(studyPlan));
        this.updateStudyPlanCount();
        location.reload(); // Reload to update the display
    }

    // Function to set Studying Now
    setStudyingNow(topicId) {
        const studyingNow = { topicId: topicId, startedAt: new Date().toISOString() };
        this.storage.setItem('studyingNow', JSON.stringify(studyingNow));
        let studyPlan = this.getStudyPlan();
        studyPlan = studyPlan.filter(id => id !== topicId);
        this.storage.setItem('studyPlan', JSON.stringify(studyPlan));
        this.updateStudyPlanCount();
    }

    // Function to update Study Plan Count in Navbar
    updateStudyPlanCount() {
        const count = this.getStudyPlanCount();
        const elements = document.querySelectorAll('.study-plan-count');
        elements.forEach(el => {
            el.textContent = count;
        });
    }

    // Function to get Studying Now
    getStudyingNow() {
        return JSON.parse(this.storage.getItem('studyingNow'));
    }

    // Function to remove from Study Plan
    removeStudyingNow(topicId) {
        this.storage.setItem('studyingNow', JSON.stringify(null));
        location.reload(); // Reload to update the display
    }

    // Function to add to Study Plan from Topic Details
    addToStudyPlanFromDetails(topicId) {
        this.addToStudyPlan(topicId);
    }

    // Function to start studying from Topic Details
    startStudyingFromDetails(topicId) {
        this.setStudyingNow(topicId);
        window.location.href = '/UOH-AWA/components/pages/learning-activities.html';
    }
}

// Export a single shared instance
const storageControllerInstance = new StorageController();
export default storageControllerInstance;