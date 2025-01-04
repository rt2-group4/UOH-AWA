const translationTexts = {
    "en-GB": {
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
            "topicsData": [
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
                    description: "Learn about the legal component of accessibility with particular focus on the United Nations'" +
                        "Convention on the Rights of Persons with Disabilities (2008) and the UK's Equality Act (2010)",
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
            ],
        },
        "metadata": {"tagId": "en-GB", "flag": "fi fi-gb", "displayName":"EN"}
    },
    "fr-FR": {
        //French Translations
        "data": {
            "home": "Maison",
            "studyPlan": "Plan d'études",
            "topics": "Le sujet",
            "missingTopic": "Sujet introuvable.",
            "estimatedStudyTime": "Durée d'étude estimée",
            "minutes": "minutes",
            "openContent": "Contenu ouvert",
            "preRequisites": "Pré-requis",
            "showDetails": "Afficher les détails",
            "startStudying": "Commencer à étudier",
            "stopStudying": "Arrêter d'étudier",
            "currentlyStudying1": "Vous étudiez actuellement",
            "currentlyStudying2": "Voulez-vous arrêter ça et commencer à étudier",
            "removeFromPlan": "Supprimer du plan d'études",
            "studyLater": "Étudier plus tard",
            "notStudying": "Aucun sujet n'est actuellement étudié.",
            "emptyStudyPlan": "Votre plan d'études est vide.",
            "studyPlanTxt": "Votre plan d'études",
            "studyPlanTitle": "AccessibleWebApp - Plan d'études",
            "studyingNowHeader": "Étudier maintenant :",
            "studyingNextHeader": "Étudier ensuite :",
            "homeTitle": "AccessibleWebApp - Le sujet",
            "submitAnswers": "Soumettre les réponses",
            "yourScore": "Votre note:",
            "learningActTitle": "AccessibleWebApp - Activités d'apprentissage",
            "footerTxt": "AccessibleWebApp Équipe | Projet universitaire",
            "topicsData": [
                {
                    id: 1,
                    title: "Introduction à l'accessibilité",
                    image: "/UOH-AWA/assets/images/accessibility.webp",
                    description: "Apprenez les bases de l’accessibilité Web et son importance.",
                    estimatedTime: 30,
                    prerequisites: [],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-1.html",
                    test: [
                        { question: "Que signifie WCAG?", options: ["Directives d'accessibilité du contenu Web", "Guide des applications de contenu Web", "Groupe mondial pour l'accessibilité du contenu"], answer: 0 },
                        { question: "Pourquoi l’accessibilité est-elle importante?", options: ["Conformité légale", "Expérience utilisateur inclusive", "Les deux"], answer: 2 },
                    ]
                },
                {
                    id: 2,
                    title: "HTML sémantique",
                    image: "/UOH-AWA/assets/images/semantic-html.webp",
                    description: "Comprendre le rôle du HTML sémantique dans l'accessibilité.",
                    estimatedTime: 45,
                    prerequisites: [1],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-2.html",
                    test: [
                        { question: "Quelle balise est sémantique pour la navigation?", options: ["<div>", "<nav>", "<span>"], answer: 1 },
                    ]
                },
                {
                    id: 3,
                    title: "Handicap visuel",
                    image: "/UOH-AWA/assets/images/visual-disabilities.webp",
                    description: "Découvrez l’accessibilité du Web pour les utilisateurs ayant une déficience visuelle.",
                    estimatedTime: 40,
                    prerequisites: [2],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-3.html",
                    test: [
                        {
                            question: "Quel est le rapport de contraste minimum recommandé par les WCAG pour un texte normal?",
                            options: ["2.1:1", "4.5:1", "3:1"],
                            answer: 1
                        },
                        {
                            question: "Quel attribut est essentiel pour rendre les images accessibles aux lecteurs d’écran?",
                            options: ["src", "alt", "title"],
                            answer: 1
                        },
                        {
                            question: "Que devez-vous éviter lors de la conception pour les utilisateurs daltoniens?",
                            options: ["Utiliser des modèles", "Utiliser la couleur seule pour transmettre des informations", "Utiliser du texte en gras"],
                            answer: 1
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Troubles cognitifs",
                    image: "/UOH-AWA/assets/images/cognitive-disabilities.webp",
                    description: "Un guide sur l'accessibilité du Web pour les utilisateurs ayant une déficience cognitive.",
                    estimatedTime: 35,
                    prerequisites: [3],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-4.html",
                    test: [
                        {
                            question: "Lequel de ces éléments est le plus important pour les utilisateurs ayant des déficiences cognitives?",
                            options: ["Des animations fantaisistes", "Navigation claire et cohérente", "Plusieurs options de navigation"],
                            answer: 1
                        },
                        {
                            question: "Quelle est une bonne pratique pour réduire la charge cognitive?",
                            options: ["Diviser le contenu en petits morceaux", "Utiliser une terminologie complexe", "Ajout d'une musique de fond"],
                            answer: 0
                        },
                        {
                            question: "Quelle pratique typographique aide les utilisateurs ayant des troubles cognitifs?",
                            options: ["Polices décoratives", "Texte aligné à gauche", "Texte justifié"],
                            answer: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Handicap auditif",
                    image: "/UOH-AWA/assets/images/hearing-disabilities.webp",
                    description: "Étudiez comment rendre le contenu Web accessible aux utilisateurs malentendants.",
                    estimatedTime: 35,
                    prerequisites: [4],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-5.html",
                    test: [
                        {
                            question: "Que faut-il pour que le contenu vidéo soit accessible aux utilisateurs sourds?",
                            options: ["Musique de fond", "Légendes", "Un son de haute qualité"],
                            answer: 1
                        },
                        {
                            question: "Quel format doit être fourni pour le contenu uniquement audio?",
                            options: ["Enregistrement vidéo", "Transcription", "Langue des signes"],
                            answer: 1
                        },
                        {
                            question: "Que doit accompagner les alertes audio sur les sites Web?",
                            options: ["Indicateurs visuels", "Des sons plus forts", "Alertes répétées"],
                            answer: 0
                        }
                    ]
                },
                {
                    id: 6,
                    title: "Technologies d'assistance",
                    image: "/UOH-AWA/assets/images/assistive-tech.webp",
                    description: "Familiarisez-vous avec les différentes technologies d’assistance utilisées pour l’accessibilité du Web.",
                    estimatedTime: 45,
                    prerequisites: [1, 2],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-6.html",
                    test: [
                        {
                            question: "Quel est l’objectif principal d’un lecteur d’écran?",
                            options: ["Pour agrandir le texte", "Pour convertir du texte en parole", "Pour modifier le contraste des couleurs"],
                            answer: 1
                        },
                        {
                            question: "A quoi sert ARIA dans le développement web?",
                            options: ["Éléments de style", "Fournir un contexte supplémentaire aux technologies d'assistance", "Ajout d'animations"],
                            answer: 1
                        },
                        {
                            question: "Lequel de ces éléments aide les utilisateurs utilisant uniquement un clavier à naviguer sur une page Web?",
                            options: ["Ignorer les liens", "Effets de survol", "Images d'arrière-plan"],
                            answer: 0
                        },
                        {
                            question: "Avec quoi les développeurs doivent-ils tester leurs sites Web?",
                            options: ["Plusieurs navigateurs uniquement", "Lecteurs d'écran et navigation au clavier", "Appareils mobiles uniquement"],
                            answer: 1
                        }
                    ]
                },
                {
                    id: 7,
                    title: "L’aspect juridique de l’accessibilité",
                    image: "/UOH-AWA/assets/images/accessibility-law.webp",
                    description: "Découvrez la composante juridique de l'accessibilité avec un accent particulier sur les Nations Unies'" +
                        "Convention relative aux droits des personnes handicapées (2008) et loi britannique sur l'égalité (2010)",
                    estimatedTime: 60,
                    prerequisites: [1],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-7.html",
                    test: [
                        {
                            question: "Quel est l’objectif principal de la Convention relative aux droits des personnes handicapées (CRPD)?",
                            options: ["Fournir une aide financière", "Garantir l'égalité des droits et des libertés pour les personnes handicapées", "Établir des normes médicales"],
                            answer: 1
                        },
                        {
                            question: "Lequel de ces principes constitue l’un des principes clés de la CDPH?",
                            options: ["Croissance économique", "Accessibilité", "Protection de l'environnement"],
                            answer: 1
                        },
                        {
                            question: "Quand la CDPH a-t-elle été adoptée par l’Assemblée générale des Nations Unies?",
                            options: ["2004", "2006", "2008"],
                            answer: 1
                        }
                    ]
                },
                // Add more topics here...
            ]
        },
        "metadata": {"tagId": "fr-FR", "flag": "fi fi-fr", "displayName":"FR"}
    },
    "de-DE": {
        //Deutsch Translations
        "data": {
            "home": "Heim",
            "studyPlan": "Studienplan",
            "topics": "Themen",
            "missingTopic": "Thema nicht gefunden.",
            "estimatedStudyTime": "Geschätzte Lernzeit",
            "minutes": "Minuten",
            "openContent": "Inhalt öffnen",
            "preRequisites": "Voraussetzungen",
            "showDetails": "Details anzeigen",
            "startStudying": "Beginnen Sie mit dem Lernen",
            "stopStudying": "Hören Sie auf zu studieren",
            "currentlyStudying1": "Sie studieren derzeit",
            "currentlyStudying2": "Möchten Sie damit aufhören und mit dem Lernen beginnen?",
            "removeFromPlan": "Aus dem Studienplan entfernen",
            "studyLater": "Später studieren",
            "notStudying": "Derzeit wird kein Thema bearbeitet.",
            "emptyStudyPlan": "Ihr Studienplan ist leer.",
            "studyPlanTxt": "Ihr Studienplan",
            "studyPlanTitle": "AccessibleWebApp - Studienplan",
            "studyingNowHeader": "Jetzt studieren :",
            "studyingNextHeader": "Als nächstes lernen: :",
            "homeTitle": "AccessibleWebApp - Themen",
            "submitAnswers": "Antworten einreichen",
            "yourScore": "Ihr Punktestand:",
            "learningActTitle": "AccessibleWebApp - Lernaktivitäten",
            "footerTxt": "AccessibleWebApp Team | Universitätsprojekt",
            "topicsData": [
                {
                    id: 1,
                    title: "Einführung in die Barrierefreiheit",
                    image: "/UOH-AWA/assets/images/accessibility.webp",
                    description: "Erfahren Sie mehr über die Grundlagen der Barrierefreiheit im Internet und ihre Bedeutung.",
                    estimatedTime: 30,
                    prerequisites: [],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-1.html",
                    test: [
                        { question: "Wofür steht WCAG?", options: ["Richtlinien zur Barrierefreiheit von Webinhalten", "Leitfaden zur Webinhaltsanwendung", "Weltweite Gruppe für Barrierefreiheit bei Inhalten"], answer: 0 },
                        { question: "Warum ist Barrierefreiheit wichtig?", options: ["Einhaltung gesetzlicher Vorschriften", "Inklusive Benutzererfahrung", "Beide"], answer: 2 },
                    ]
                },
                {
                    id: 2,
                    title: "Semantisches HTML",
                    image: "/UOH-AWA/assets/images/semantic-html.webp",
                    description: "Verstehen Sie die Rolle von semantischem HTML bei der Barrierefreiheit.",
                    estimatedTime: 45,
                    prerequisites: [1],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-2.html",
                    test: [
                        { question: "Welches Tag ist für die Navigation semantisch?", options: ["<div>", "<nav>", "<span>"], answer: 1 },
                    ]
                },
                {
                    id: 3,
                    title: "Sehbehinderungen",
                    image: "/UOH-AWA/assets/images/visual-disabilities.webp",
                    description: "Informieren Sie sich über die Barrierefreiheit im Internet für Benutzer mit Sehbehinderungen.",
                    estimatedTime: 40,
                    prerequisites: [2],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-3.html",
                    test: [
                        {
                            question: "Welches ist das von WCAG empfohlene Mindestkontrastverhältnis für normalen Text?",
                            options: ["2.1:1", "4.5:1", "3:1"],
                            answer: 1
                        },
                        {
                            question: "Welches Attribut ist wichtig, um Bilder für Bildschirmleseprogramme zugänglich zu machen?",
                            options: ["src", "alt", "title"],
                            answer: 1
                        },
                        {
                            question: "Was sollten Sie beim Design für farbenblinde Benutzer vermeiden?",
                            options: ["Verwenden von Mustern", "Informationen nur durch Farbe vermitteln", "Fettgedruckten Text verwenden"],
                            answer: 1
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Kognitive Behinderungen",
                    image: "/UOH-AWA/assets/images/cognitive-disabilities.webp",
                    description: "Ein Leitfaden zur Barrierefreiheit im Internet für Benutzer mit kognitiven Behinderungen.",
                    estimatedTime: 35,
                    prerequisites: [3],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-4.html",
                    test: [
                        {
                            question: "Was davon ist für Benutzer mit kognitiven Behinderungen am wichtigsten?",
                            options: ["Ausgefallene Animationen", "Klare und einheitliche Navigation", "Mehrere Navigationsoptionen"],
                            answer: 1
                        },
                        {
                            question: "Was ist eine bewährte Methode zur Reduzierung der kognitiven Belastung?",
                            options: ["Inhalte in kleine Einheiten aufteilen", "Verwendung komplexer Terminologie", "Hintergrundmusik hinzufügen"],
                            answer: 0
                        },
                        {
                            question: "Welche Typografiepraxis hilft Benutzern mit kognitiven Behinderungen?",
                            options: ["Dekorative Schriftarten", "Linksbündiger Text", "Blocksatz"],
                            answer: 1
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Hörbehinderungen",
                    image: "/UOH-AWA/assets/images/hearing-disabilities.webp",
                    description: "Informieren Sie sich darüber, wie Sie Webinhalte für Benutzer mit Hörbehinderung zugänglich machen können.",
                    estimatedTime: 35,
                    prerequisites: [4],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-5.html",
                    test: [
                        {
                            question: "Was ist erforderlich, damit Videoinhalte für gehörlose Benutzer zugänglich sind?",
                            options: ["Hintergrundmusik", "Bildunterschriften", "Hochwertige Audioqualität"],
                            answer: 1
                        },
                        {
                            question: "Welches Format sollte für reine Audioinhalte bereitgestellt werden?",
                            options: ["Videoaufnahme", "Transkript", "Gebärdensprache"],
                            answer: 1
                        },
                        {
                            question: "Was sollte Audiowarnungen auf Websites begleiten?",
                            options: ["Visuelle Indikatoren", "Lautere Geräusche", "Wiederholte Warnungen"],
                            answer: 0
                        }
                    ]
                },
                {
                    id: 6,
                    title: "Assistierende Technologien",
                    image: "/UOH-AWA/assets/images/assistive-tech.webp",
                    description: "Machen Sie sich mit den verschiedenen unterstützenden Technologien vertraut, die für die Barrierefreiheit im Internet verwendet werden.",
                    estimatedTime: 45,
                    prerequisites: [1, 2],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-6.html",
                    test: [
                        {
                            question: "Was ist der Hauptzweck eines Screenreaders?",
                            options: ["So vergrößern Sie den Text", "So konvertieren Sie Text in Sprache", "So ändern Sie den Farbkontrast"],
                            answer: 1
                        },
                        {
                            question: "Wofür wird ARIA in der Webentwicklung verwendet?",
                            options: ["Stilelemente", "Bereitstellung zusätzlichen Kontexts für unterstützende Technologien", "Animationen hinzufügen"],
                            answer: 1
                        },
                        {
                            question: "Welches davon hilft Benutzern, die nur die Tastatur verwenden, beim Navigieren auf einer Webseite?",
                            options: ["Skip links", "Hover-Effekte", "Hintergrundbilder"],
                            answer: 0
                        },
                        {
                            question: "Womit sollten Entwickler ihre Websites testen?",
                            options: ["Nur mehrere Browser", "Bildschirmleseprogramme und Tastaturnavigation", "Nur für Mobilgeräte"],
                            answer: 1
                        }
                    ]
                },
                {
                    id: 7,
                    title: "Der rechtliche Aspekt der Barrierefreiheit",
                    image: "/UOH-AWA/assets/images/accessibility-law.webp",
                    description: "Informieren Sie sich über die rechtlichen Aspekte der Barrierefreiheit, insbesondere über die" +
                        "Übereinkommen über die Rechte von Menschen mit Behinderungen (2008) und britisches Gleichstellungsgesetz (2010)",
                    estimatedTime: 60,
                    prerequisites: [1],
                    learningMaterials: "/UOH-AWA/components/learning-materials/topic-7.html",
                    test: [
                        {
                            question: "Was ist der Hauptzweck des Übereinkommens über die Rechte von Menschen mit Behinderungen (CRPD)?",
                            options: ["Finanzielle Hilfe leisten", "Gewährleistung gleicher Rechte und Freiheiten für Menschen mit Behinderungen", "Medizinische Standards etablieren"],
                            answer: 1
                        },
                        {
                            question: "Welches davon ist eines der Schlüsselprinzipien der CRPD?",
                            options: ["Wirtschaftswachstum", "Zugänglichkeit", "Umweltschutz"],
                            answer: 1
                        },
                        {
                            question: "Wann wurde die CRPD von der Generalversammlung der Vereinten Nationen angenommen?",
                            options: ["2004", "2006", "2008"],
                            answer: 1
                        }
                    ]
                },
                // Add more topics here...
            ],
        },
        "metadata": {"tagId": "de-DE", "flag": "fi fi-de", "displayName":"DE"}
    }
}

// let translationData = {}
let translationMetadata = {}
let translationData = {}

// Filter translationTexts into Data and Metadata
for (let key in translationTexts) {
    translationMetadata[key] = translationTexts[key].metadata
    translationData[key] = translationTexts[key].data
}

export { translationData, translationMetadata}

