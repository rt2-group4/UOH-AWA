export const english = {
    //English Translations
    "data": {
        "home": "Home",
        "studyPlan": "Study Plan",
        "topics": "Topics",
        "missingTopic": "Topic not found.",
        "estimatedStudyTime": "Estimated Study Time",
        "minutes": "minutes",
        "openContent": "Open Content",
        "preRequisites": "Pre-requisites",
        "showDetails": "Show Details",
        "startStudying": "Start Studying",
        "stopStudying": "Stop Studying",
        "currentlyStudying1": "You are currently studying",
        "currentlyStudying2": "Do you want to stop it and start studying",
        "removeFromPlan": "Remove from Study Plan",
        "studyLater": "Study Later",
        "notStudying": "No topic is currently being studied.",
        "emptyStudyPlan": "Your study plan is empty.",
        "studyPlanTxt": "Your Study Plan",
        "studyPlanTitle": "AccessibleWebApp - Study Plan",
        "studyingNowHeader": "Studying Now:",
        "studyingNextHeader": "Studying Next:",
        "homeTitle": "AccessibleWebApp - Topics",
        "submitAnswers": "Submit Answers",
        "yourScore": "Your Score:",
        "learningActTitle": "AccessibleWebApp - Learning Activities",
        "footerTxt": "AccessibleWebApp Team | University Project",
        "passRemark": "Great job! You\\'ve passed the test.",
        "retryRemark": "Keep studying and try again!",
        "topicsData": [
            {
                id: 1,
                title: "Introduction to Accessibility",
                image: "/UOH-AWA/assets/images/accessibility.webp",
                description: "Learn the basics of web accessibility and its importance.",
                estimatedTime: 30,
                prerequisites: [],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-1.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-2.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-3.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-4.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-5.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-6.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-7.html",
                    "htmlVars": {
                        "h3-1": "Introduction",
                        "p-1": "Motor disabilities can be a result of many different causes, causing similar challenges to users when they navigate the web.",
                        "p-2": "The main idea of web accessibility for people with motor disabilities is making websites <strong>Operable</strong> since not everyone can use a mouse, click tiny links, or easily control interactive features. This section will focus on what we can do to build an accessible web product for people with motor disabilities.",
                        "p-3": "There are many assistive technologies that can be used to make it easier for people with motor disabilities to navigate through the web. Some of them include:",
                        "ul-1": "<li>Head wands</li>\n" +
                            "            <li>Mouth sticks</li>\n" +
                            "            <li>Sip-and-puff switches</li>\n" +
                            "            <li>Single switches</li>",
                        "p-4": "However, these assistive technologies alone are not enough to make the web accessible to users with disabilities. Here are three ways to improve accessibility:",
                        "h4-1": "1. Support Effective Keyboard Navigation",
                        "p-5": "People with motor disabilities often find it impossible to use a mouse. By making your website effectively usable with a keyboard, you open up access to users of these assistive technologies. Specifically, ensure that the keyboard focus elements are visible on your page using CSS.",
                        "h4-2": "2. Reduce Actions that Require Too Many Keypresses",
                        "p-6": "Most motor-assistive tools rely on small, specific muscle groups. For example:",
                        "ul-2": "<li>Head wand users rely on their neck muscles for every action.</li>\n" +
                            "            <li>Mouth stick users use mouth movements to select keys on a virtual keyboard.</li>",
                        "p-7": "To reduce fatigue, provide practical ways to navigate your site with fewer actions. For example:",
                        "ul-3": "<li>Allow skipping to the end of long pages or lists with a single click.</li>\n" +
                            "            <li>Structure navigation menus as multi-level trees.</li>",
                        "h4-3": "3. Add a Search Field to Your Website",
                        "p-8": "Some users with motor disabilities rely on voice recognition systems. While these systems simplify navigation, it’s usually easier to type a phrase into a text field using speech recognition than to select specific elements on the page with voice commands.",
                        "p-9": "Optimize search functionality by ensuring your pages are indexed and search results are sorted in a user-friendly way.",
                        "h5-2": "Here is a brief video that discusses the best practices for making your app easier to use and talk about testing for accessibility to improve your app's user experience for all users."
                    }
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-8.html",
                    "htmlVars": {
                        "h3-1": "Introduction",
                        "p-1": "Color plays a crucial role in web design, impacting aesthetics, usability, and accessibility.",
                        "p-2": "Designing with accessibility in mind ensures that your product is usable by a diverse audience, including people with visual impairments or color vision deficiencies.",
                        "p-3": "This section will focus on key principles and best practices for creating an accessible color design for web products.",
                        "h3-2": "Color Contrast",
                        "p-4": "Text and interactive elements should have a high contrast ratio against their background to ensure readability for users with low vision or color blindness. Some of them include:",
                        "ul-1": "<li>For normal text, a contrast ratio of at least 4.5:1 is recommended</li>\n" +
                            "            <li>For large text (18pt or larger), a ratio of 3:1 is acceptable</li>",
                        "p-5": "Tools like the WebAIM Color Contrast Checker can help assess and adjust contrast levels.",
                        "h3-3": "Avoid Relying Solely on Color to Convey Information",
                        "p-6": "conveying-information",
                        "p-7": "Relying on color alone can make it difficult for these users to understand content.",
                        "p-8": "To achieve it, you have to use:",
                        "ul-2": "<li>text labels</li>\n" +
                            "            <li>patterns</li>\n" +
                            "            <li>icons</li>\n" +
                            "            <li>shapes </li>",
                        "p-9": "For example, a red warning message should also include a symbol like an exclamation mark or the word \"Warning\" in text.",
                        "h3-4": "Use Color Combinations That Are Accessible to Colorblind Users",
                        "p-10": "Certain color combinations, such as red-green or blue-yellow, are problematic for colorblind users.",
                        "p11": "In order to make sure that your web product is accessible for everyone, you have to:",
                        "ul-3": "<li>Test color palettes using color blindness simulators to ensure that your color choices are distinguishable for users with different types of color vision deficiencies.</li>\n" +
                            "            <li>Use tools like the Color Oracle or Coblis (Color Blindness Simulator) to help you identify problematic combinations.</li>",
                        "h3-5": "Consider Color Context",
                        "p-12": "The meaning and effectiveness of color can change depending on the surrounding colors and design context.",
                        "p-13": "Always check how colors interact with each other, ensuring they do not cause visual confusion or overload.",
                        "p14": "For instance, avoid placing two high-contrast colors next to each other, as they might create visual discomfort or strain.",
                        "h3-6": "Offer Customization Options",
                        "p-15": "Customization options can provide flexibility to users and help address a variety of individual needs and preferences, which can vary significantly among users.",
                        "p-16": "In order to allow users to adjust color schemes can make a website more accessible for people with specific needs or preferences.",
                        "p-17": "In order to make sure that your web product is accessible for everyone, you have to:",
                        "ul-4": "<li>Implement customizable themes</li>\n" +
                            "            <li>Include high-contrast or dark mode options</li>\n" +
                            "            <li>Provide clear instructions on how users can switch between these modes</li>\n" +
                            "            <li>Ensure that these options don’t interfere with content readability or functionality</li>",
                        "h3-7": "Best Practices",
                        "p-18": "Here is a brief video that discusses the best practices for making your app easier to use and explains how testing for accessibility can improve your app's user experience for all users."
                    }
                },
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
                description: "Learn about the legal component of accessibility with particular focus on the United Nations'" +
                    "Convention on the Rights of Persons with Disabilities (2008) and the UK's Equality Act (2010)",
                estimatedTime: 60,
                prerequisites: [1],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-9.html",
                    "htmlVars":{
                        "h3-1": "Introduction",
                        "p-1": "There is an obvious ethical argument to make digital content accessible to everyone, regardless of ability.\n" +
                            "        Designing digital technologies for all is even mentioned in several professional Codes of Conduct. However,\n" +
                            "        ethics\n" +
                            "        and the law do not always go hand in hand. This section will focus on the legality surrounding digital\n" +
                            "        accessibility.",
                        "h5-1": "Convention on the Rights of the Persons with Disabilities (CRPD)",
                        "p-2": "The CRPD is an international treaty that was adopted by the United Nations General Assembly in 2006. The purpose\n" +
                            "        of the convention is to:",
                        "blq-1": "Promote, protect and ensure the full and equal enjoyment of all human rights and fundamental freedoms by\n" +
                            "        all persons with disabilities, and to promote respect for their inherent dignity.",
                        "p-3": "The treaty has several key principles:",
                        "ul-1": "<li>Respect for inherent dignity, individual autonomy including the freedom to make one's own choices, and\n" +
                            "            independence of persons\n" +
                            "        </li>\n" +
                            "        <li>Non-discrimination</li>\n" +
                            "        <li>Full and effective participation and inclusion in society</li>\n" +
                            "        <li>Respect for difference and acceptance of persons with disabilities as part of human diversity and humanity\n" +
                            "        </li>\n" +
                            "        <li>Equality of opportunity</li>\n" +
                            "        <li><b>Accessibility</b></li>\n" +
                            "        <li>Equality between men and women</li>\n" +
                            "        <li>Respect for the evolving capacities of children with disabilities and respect for the right of children with\n" +
                            "            disabilities to preserve their identities\n" +
                            "        </li>",
                        "p-4": "Here is a brief video that summarises CRPD:",
                    }
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-10.html",
                    "htmlVars": {}
                },
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
        ],
    },
    "metadata": {"tagId": "en-GB", "flag": "fi fi-gb", "displayName":"EN"}
}