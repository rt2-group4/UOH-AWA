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
        "passRemark": "Great job! You've passed the test.",
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
                    "htmlVars": {
                        "h3-1": "Introduction",
                        "p-1": "The World Health Organisation (WHO) defines a person as having hearing loss if they are " +
                            "unable to hear as well as someone with normal hearing, which means hearing thresholds of 20dB or " +
                            "better in both ears. According to the WHO, over " +
                            "<a href='https://www.who.int/health-topics/hearing-loss#tab=tab_1' class='in-text-a'>1.5 billion people</a> worldwide currently live with some form of hearing disability.",
                        "p-2": "Better understanding auditory disabilities gives web authors context and appreciation for people with such disabilities, and helps motivate an increased commitment to provide accessible content.",
                        "h3-2": "Degrees of Hearing Loss",
                        "p-3": "Although individuals may be completely deaf, most with hearing loss still have some degree of hearing. Those with hearing loss may rely on lip-reading techniques, sign language, or hearing aids to help communicate. There are 4 main degrees of hearing loss:",
                        "ul-1": "<li><b>Mild Hearing Loss</b></li>" +
                            "<ul><li>Difficultly understanding normal speech, particularly with background noise</li></ul>" +
                            "<li><b>Moderate Hearing Loss</b></li><ul><li>Difficulty understanding most normal speech, even " +
                            "with no background noise. Likely a hearing aid is required</li></ul>" +
                            "<li><b>Severe Hearing Loss</b></li><ul><li>Difficulty understanding loud speech and an inability " +
                            "to perceive most noises</li></ul>" +
                            "<li><b>Profound Hearing Loss</b></li><ul><li>Inability to perceive loud speed and noise</li></ul>",
                        "h3-3": "Types of Hearing Impairments",
                        "ul-2": "<li><b>Conductive Hearing Loss</b></li><ul><li>Damage to the outer or middle ear prevents " +
                            "sound from entering the middle ear</li></ul>" +
                            "<li><b>Sensorineural Hearing Loss</b></li><ul><li>This occurs due to damage to the inner ear, " +
                            "auditory nerve, or cochlea</li></ul>" +
                            "<li><b>Tinnitus</b></li><ul><li>A ringing or buzzing sound in the ear which occurs due to " +
                            "age or damage from extended periods of loud noise</li></ul>" +
                            "<li><b>Hyperacusis</b></li><ul><li>An extreme sensitivity to certain frequencies and " +
                            "volume ranges</li></ul>",
                        "h3-4": "Deaf Accessibility Technology",
                        "p-4": "Those who are hard of hearing rely on certain assistive technologies to allow them to access " +
                            "and use the web more easily. The primary technology is called <b>Automatic Speech Recognition (ASR)</b>.",
                        "p-5": "Here are just 2 examples of the top ASR platforms:",
                        "ul-3": "<li><b>Google's Live Transcribe</b></li><ul><li>Uses Google's own speech recognition to " +
                            "give insight into conversations happening around hearing-impaired users and can store " +
                            "conversations for later reference. This technology works with over " +
                            "70 different languages</li></ul>" +
                            "<li><b>Roger Voice</b></li><ul><li>Allows users to engage in voice calls with real-time " +
                            "subtitles, available on both iOS and Android</li></ul>",
                        "h3-5": "Improving Web Accessibility for Hearing Disabilities",
                        "ul-4": "<li><h4>Offer Multiple Ways to Get in Touch</h4></li><ul><li>Don't just offer a phone number " +
                            "in your contact details. Include other options such as an email address, or maybe even " +
                            "Live Chat</li></ul>" +
                            "<li><h4>Add Media Player Controls</h4></li><ul><li>Ensure that media players have controls " +
                            "to allow users to activate captions and adjust volume</li></ul>" +
                            "<li><h4>Include Subtitles & Captions</h4></li><ul><li>Always provide subtitles or captions " +
                            "for audio and video content on your website</li></ul>" +
                            "<li><h4>Summarise Content</h4></li><ul><li>Provide clear, jargon-free summaries for all " +
                            "audio or video content</li></ul>" +
                            "<li><h4>Stick to Simple Language</h4></li><ul><li>Use simple language to ensure content is " +
                            "understandable for those with hearing impairments or those for whom the content's language " +
                            "is a second language</li></ul>" +
                            "<li><h4>Ensure Alerts Have Visual Indicators</h4></li><ul><li>Pair audio alerts with " +
                            "visual cues so they are not missed by users with hearing impairments</li></ul>"
                    }
                },
                test: [
                    {
                        question: "Which of these is NOT a type of hearing loss?",
                        options: ["Moderate hearing loss", "Severe hearing loss", "Significant hearing loss"],
                        answer: 2
                    },
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
                    "htmlVars": {

                    }
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
                        "h3-2": "Convention on the Rights of the Persons with Disabilities (CRPD)",
                        "p-2": "The CRPD is an international treaty that was adopted by the United Nations General Assembly in 2006. The purpose\n" +
                            "        of the convention is to:",
                        "blq-1": "Promote, protect and ensure the full and equal enjoyment of all human rights and fundamental freedoms by\n" +
                            "        all persons with disabilities, and to promote respect for their inherent dignity.",
                        "p-3": "The treaty has several key principles:",
                        "ul-1": "<li>Respect for inherent dignity, individual autonomy including the freedom to make one's own choices, and\n" +
                            "            independence of persons</li>\n" +
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
                        "h3-3": "The Equality Act (2010)",
                        "p-5": "The Equality Act was introduced by the United Kingdom (UK) in 2010, and it combines previous anti-discrimination legislation,\n"+
                            "such as the Sex Discrimination Act (1975), the Race Relations Act (1976) and the Disability Discrimination Act (1995). It sets\n"+
                            "out different ways in which it's unlawful to treat someone. This section will detail what is included in the legislation.",
                        "h4-1": "Protected Characteristics",
                        "p-6": "The Equality Act makes it illegal to discriminate anyone because of:",
                        "ul-2": "<li>Age</li>\n" +
                            "        <li>Gender Reassignment</li>\n" +
                            "        <li>Being married or in a civil partnership</li>\n" +
                            "        <li>Being pregnant or on maternity leave</li>\n" +
                            "        <li><b>Disability</b></li>\n" +
                            "        <li>Race including colour, nationality, ethnic or national origin</li>\n" +
                            "        <li>Religion or belief</li>\n" +
                            "        <li>Sex</li>\n" +
                            "        <li>Sexual orientation</li>\n" +
                            "        </li>",
                        "p-7": "These are known as <b>protected characteristics</b>.",
                        "h4-2": "Types of Discrimination",
                        "p-8": "Discrimination can come in the following forms:",
                        "ul-3": "<li><b>Direct discrimination</b></li>" +
                            "<ul><li>Treating someone with a protected characteristic less favourably than others</li></ul>" +
                            "<li><b>Indirect discrimination</b></li>" +
                            "<ul><li>Putting rules or arrangements in place that apply to everyone, but that put someone with a " +
                            "protected characteristic at an unfair disadvantage</li></ul>" +
                            "<li><b>Harrassment</b></li>" +
                            "<ul><li>Unwanted behaviour linked to a protected characteristic that violates someone’s dignity " +
                            "or creates an offensive environment for them</li></ul>" +
                            "<li><b>Victimisation</b></li>" +
                            "<ul><li>Treating someone unfairly because they’ve complained about discrimination or harassment</li></ul>",
                        "h3-4": "What Does This Mean?",
                        "p-9": "The CRPD sets out that <b>Accessibility as a Human Right</b>: Article 9 of the CRPD mandates that digital platforms must be accessible to persons with disabilities to " +
                            "ensure their equal participation in society. Furthermore, the Equality Act (2010) means anyone producing digital " +
                            "content has a <b>duty to make reasonable adjustments</b>. <b>A poorly designed website that excludes disabled users could be considered " +
                            "discriminatory</b>. Here are some tips to comply with both CRPD and the Equality Act:",
                        "ul-4": "<li><b>Follow Accessibility Standards</b></li>" +
                            "<ul><li>See <a href='/UOH-AWA/components/pages/topic-details.html?id=10' class='in-text-a'>topic 10</a> for further details</li></ul>" +
                            "<li><b>Use Inclusive Practices</b></li>" +
                            "<ul><li>Provide transcripts and captions for multimedia content</li></ul>" +
                            "<ul><li>Ensure sufficient color contrast</li></ul>" +
                            "<ul><li>Ensure sufficient color contrast</li></ul>" +
                            "<li><b>Test for Accessibility</b></li>" +
                            "<ul><li>Use tools like Lighthouse, Wave, or Axe to evaluate accessibility</li></ul>" +
                            "<li><b>Provide Flexibility</b></li>" +
                            "<ul><li>Allow users to adjust font size, color schemes, and layout settings</li></ul>",
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
                    },
                    {
                        question: "Which of these is a protected characteristic under the United Kingdom's Equality Act?",
                        options: ["Age", "Disability", "Religion", "All of the above"],
                        answer: 3
                    },
                    {
                        question: "What actions can you take to ensure compliance with the Equality Act (2010) in web design??",
                        options: ["Ensure that all website features are accessible via a keyboard", " Use high-quality images without adding alternative text (alt text)", "Design websites that are only optimized for the latest browsers"],
                        answer: 0
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
                    "htmlVars": {
                        "h3-1": "Introduction to Web Content Accessibility Guidelines (WCAG)",
                        "p-1": "The Web Content Accessibility Guidelines (WCAG) provide a global standard for making web content more accessible to all, including people with disabilities. Developed by the World Wide Web Consortium (W3C), WCAG aims to ensure that websites and digital platforms are usable and inclusive. This section will explore the key principles of WCAG and their relevance to accessible web design.",
                        "h3-2": "The Four Principles of WCAG",
                        "p-2": "WCAG is built on four core principles, often referred to by the acronym <b>POUR</b>:",
                        "ul-1": "<li><b>Perceivable</b>: Information and user interface components must be presented in ways that users can perceive. For example, providing text alternatives for images and captions for videos.</li>" +
                                "<li><b>Operable</b>: User interface components and navigation must be operable. For instance, ensuring that all functionality is accessible via keyboard and that users have enough time to complete tasks.</li>" +
                                "<li><b>Understandable</b>: Information and operation of the user interface must be understandable. This includes clear instructions and avoiding overly complex layouts or interactions.</li>" +
                                "<li><b>Robust</b>: Content must be robust enough to be interpreted reliably by assistive technologies. For example, ensuring compatibility with screen readers and other tools.</li>",
                        "h3-3": "WCAG Success Criteria",
                        "p-3": "WCAG provides testable success criteria to meet accessibility standards. These are organized into three levels of conformance:",
                        "ul-2": "<li><b>A</b>: The minimum level of conformance, addressing the most critical barriers to access.</li>" +
                                "<li><b>AA</b>: The intermediate level, focusing on broader accessibility improvements for a diverse range of users.</li>" +
                                "<li><b>AAA</b>: The highest level, enhancing accessibility to the fullest extent possible, though it may not be feasible for all websites.</li>",
                        "h3-4": "Why is WCAG Important?",
                        "p-4": "Adhering to WCAG ensures that digital content is accessible to a wider audience, fostering inclusivity and legal compliance. Many governments and organizations worldwide have adopted WCAG as a benchmark for accessibility standards. Implementing WCAG can help businesses avoid lawsuits and demonstrate a commitment to social responsibility.",
                        "h3-5": "How to Implement WCAG?",
                        "p-5": "Here are some practical steps to align your digital content with WCAG:",
                        "ul-3": "<li><b>Provide Alternatives</b>: Include alt text for images, transcripts for audio, and captions for videos.</li>" +
                                "<li><b>Ensure Keyboard Accessibility</b>: All functionality should be operable via a keyboard.</li>" +
                                "<li><b>Maintain High Contrast</b>: Use sufficient color contrast to make text and interactive elements easily distinguishable.</li>" +
                                "<li><b>Structure Content Properly</b>: Use semantic HTML and ensure a logical reading order.</li>" +
                                "<li><b>Test with Users</b>: Conduct usability testing with people with disabilities to identify potential barriers.</li>",
                        "h3-6": "Additional Resources",
                        "p-6": "For more detailed information, visit the official WCAG guidelines on the <a href='https://www.w3.org/WAI/standards-guidelines/wcag/' class='in-text-a'>W3C website</a>."

                    }
                },
                test: [
                    {
                        "question": "What is the purpose of WCAG?",
                        "options": ["To set global web design trends", "To provide guidelines for web accessibility", "To enforce legal penalties for inaccessible websites"],
                        "answer": 1
                    },
                    {
                        "question": "What does the WCAG acronym POUR stand for?",
                        "options": ["Perceivable, Operable, Understandable, Robust", "Predictable, Organized, Usable, Reliable", "Practical, Open, Unique, Responsible"],
                        "answer": 0
                    },
                    {
                        "question": "At which level of WCAG conformance is sufficient color contrast required?",
                        "options": ["A", "AA", "AAA"],
                        "answer": 1
                    },
                    {
                        "question": "Which of these is an example of making content perceivable under WCAG guidelines?",
                        "options": ["Ensuring all functionality is accessible via a keyboard", "Testing with users who have disabilities", "Providing alt text for images"],
                        "answer": 2
                    }
                ]
            }
            // Add more topics here...
        ],
    },
    "metadata": {"tagId": "en-GB", "flag": "fi fi-gb", "displayName":"EN"}
}