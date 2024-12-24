class StorageController {
    constructor() {
        this.storage = window['localStorage'];


        const defaultLang = 'en-GB';

        // Initialize Study Plan in localStorage if not present
        if (!this.storage.getItem('studyPlan')) {
            this.storage.setItem('studyPlan', JSON.stringify([]));
        }

        // Initialize Studying Now in localStorage if not present
        if (!this.storage.getItem('studyingNow')) {
            this.storage.setItem('studyingNow', JSON.stringify(null));
        }

        // Initialize default translation
        if (!this.storage.getItem("prefLang")) {
            this.storage.setItem('prefLang', defaultLang);
        }
    }

    // Function to get Study Plan
    getStudyPlan() {
        return JSON.parse(this.storage.getItem('studyPlan'));
    }

    isTopicInStudyPlan(topicId) {
        return this.getStudyPlan().includes(topicId);
    }

    getStudyPlanCount(){
        return this.getStudyPlan().length;
    }

    // Function to add to Study Plan
    addToStudyPlan(topicId) {
        let studyPlan = this.getStudyPlan();
        if (!this.isTopicInStudyPlan(topicId)) {
            studyPlan.push(topicId);
            this.storage.setItem('studyPlan', JSON.stringify(studyPlan));
        } else {
            location.reload();
        }
        this.updateStudyPlanCount();
        location.reload();
    }

    // Function to remove from Study Plan
    removeFromStudyPlan(topicId) {
        let studyPlan = this.getStudyPlan();
        studyPlan = studyPlan.filter(id => id !== topicId);
        this.storage.setItem('studyPlan', JSON.stringify(studyPlan));
        this.updateStudyPlanCount();
        location.reload();
    }

    // Function to set Studying Now
    setStudyingNow(topicId) {
        if (topicId === null) {
            this.storage.setItem('studyingNow', JSON.stringify(null));
            location.reload();
            return;
        }
        const studyingNow = { topicId: topicId, startedAt: new Date().toISOString() };
        this.storage.setItem('studyingNow', JSON.stringify(studyingNow));
        let studyPlan = this.getStudyPlan();
        studyPlan = studyPlan.filter(id => id !== topicId);
        this.storage.setItem('studyPlan', JSON.stringify(studyPlan));
        this.updateStudyPlanCount();
        location.reload();
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

    isStudyingNow(topicId){
        let studyingNow = this.getStudyingNow();
        if(studyingNow == null){
            return false;
        }
        return studyingNow.topicId === topicId;
    }

    // Function to remove from Study Plan
    removeStudyingNow() {
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

    // Change preferred language
    changePreferredLanguage(languageId) {
        this.storage.setItem('prefLang', languageId);
        location.reload(); // Reload to update the display
    }

    // Retrieve current preferred language
    getPreferredLanguage() {
        return this.storage.getItem('prefLang');
    }
}

// Export a single shared instance
const storageControllerInstance = new StorageController();
export default storageControllerInstance;