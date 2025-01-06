export const german = {
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-1.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-2.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-3.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-4.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-5.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-6.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-7.html",
                    "htmlVars": {
                        "h5-1": "Einführung",
                        "p-1": "Es gibt ein offensichtliches ethisches Argument dafür, digitale Inhalte für alle zugänglich zu machen, unabhängig " +
                            "von ihren Fähigkeiten. Die Entwicklung digitaler Technologien für alle wird sogar in mehreren professionellen " +
                            "Verhaltenskodizes erwähnt. Ethik und Recht gehen jedoch nicht immer Hand in Hand. Dieser Abschnitt konzentriert sich auf " +
                            "die rechtlichen Aspekte der digitalen Zugänglichkeit.",
                        "h5-2": "Übereinkommen über die Rechte von Menschen mit Behinderungen (CRPD)",
                        "p-2": "The CRPD is an international treaty that was adopted by the United Nations General Assembly in 2006. The purpose of the convention is to:",
                        "blq-1": "Förderung, Schutz und Gewährleistung der uneingeschränkten und gleichberechtigten Wahrnehmung aller " +
                            "Menschenrechte und Grundfreiheiten durch alle Menschen mit Behinderungen und Förderung der Achtung ihrer innewohnenden Würde.",
                        "p-3": "Der Vertrag enthält mehrere Grundprinzipien:",
                        "ul-1": "<li>Respekt für die inhärente Würde, die individuelle Autonomie einschließlich der Freiheit, eigene Entscheidungen zu treffen, und die Unabhängigkeit der Personen</li>" +
                            "<li>Nichtdiskriminierung</li>\n" +
                            "        <li>Vollständige und wirksame Teilhabe und Einbeziehung in die Gesellschaft</li>\n" +
                            "        <li>Respekt für die Andersartigkeit und Akzeptanz von Menschen mit Behinderungen als Teil der menschlichen Vielfalt und Menschlichkeit</li>\n" +
                            "        <li>Chancengleichheit</li>\n" +
                            "        <li><b>Zugänglichkeit</b></li>\n" +
                            "        <li>Gleichstellung von Mann und Frau</li>\n" +
                            "        <li>Respekt für die sich entwickelnden Fähigkeiten von Kindern mit Behinderungen und Respekt für das Recht von Kindern mit Behinderungen, " +
                            "ihre Identität zu bewahren</li>",
                        "p-4": "Hier ist ein kurzes Video, das die CRPD zusammenfasst:",
                    }
                },
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