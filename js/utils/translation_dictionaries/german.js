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
        "passRemark": "Tolle Arbeit! Sie haben die Prüfung bestanden.",
        "retryRemark": "Lernen Sie weiter und versuchen Sie es erneut!",
        "testHeading": "Objektiver Test: Erreichen Sie 60 % oder mehr, um zu bestehen",
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
                title: "Motorische Behinderungen",
                image: "/UOH-AWA/assets/images/motor-disabilities.webp",
                description: "Erfahren Sie mehr über die Grundlagen der Barrierefreiheit im Internet für Benutzer mit unterschiedlichen motorischen Behinderungen.",
                estimatedTime: 40,
                prerequisites: [5],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-6.html",
                    "htmlVars": {}
                },
                test: [
                    {
                        question: "Was ist das Schlüsselprinzip der Barrierefreiheit im Internet für Benutzer mit motorischen Behinderungen?",
                        options: ["Bedienbar", "Präzise", "Wahrnehmbar", "Verständlich"],
                        answer: 0
                    },
                    {
                        question: "Welches davon ist KEINE Möglichkeit, Websites barrierefrei zu gestalten?",
                        options: ["Unterstützt effektive Tastaturnavigation", "Reduzieren Sie Aktionen, die zu viele Tastendrücke erfordern", "Fügen Sie Ihrer Website ein Suchfeld hinzu", "Verwenden Sie kleine Links"],
                        answer: 3
                    },
                    {
                        question: "Welche unterstützende Technologie nutzt zur Navigation die Bewegungen der Nackenmuskulatur?",
                        options: ["Saug- und Blasschalter", "Kopfstab", "Mundstift", "Einzelschalter"],
                        answer: 1
                    }
                ]
            },
            {
                id: 7,
                title: "Assistierende Technologien",
                image: "/UOH-AWA/assets/images/assistive-tech.webp",
                description: "Machen Sie sich mit den verschiedenen unterstützenden Technologien vertraut, die für die Barrierefreiheit im Internet verwendet werden.",
                estimatedTime: 45,
                prerequisites: [1, 2],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-7.html",
                    "htmlVars": {
                        "h3-1": "Einführung",
                        "p-1": "Motorische Behinderungen können viele verschiedene Ursachen haben und für Benutzer beim Surfen im Internet zu ähnlichen Herausforderungen führen.",
                        "p-2": "Die Hauptidee der Barrierefreiheit im Internet für Menschen mit motorischen Behinderungen besteht darin, Websites <strong>bedienbar</strong> zu machen, da nicht jeder eine Maus verwenden, auf kleine Links klicken oder interaktive Funktionen problemlos steuern kann. In diesem Abschnitt geht es darum, was wir tun können, um ein barrierefreies Webprodukt für Menschen mit motorischen Behinderungen zu erstellen.",
                        "p-3": "Es gibt viele unterstützende Technologien, die Menschen mit motorischen Behinderungen die Navigation im Internet erleichtern können. Dazu gehören unter anderem:",
                        "ul-1": "<li>Kopfstäbe</li>\n" +
                            " <li>Mundstäbe</li>\n" +
                            " <li>Saug- und Blasschalter</li>\n" +
                            " <li>Einzelschalter</li>",
                        "p-4": "Allerdings reichen diese unterstützenden Technologien allein nicht aus, um das Web für Benutzer mit Behinderungen zugänglich zu machen. Hier sind drei Möglichkeiten, die Zugänglichkeit zu verbessern:",
                        "h4-1": "1. Unterstützen Sie eine effektive Tastaturnavigation",
                        "p-5": "Menschen mit motorischen Behinderungen können oft keine Maus verwenden. Indem Sie Ihre Website mit einer Tastatur nutzbar machen, ermöglichen Sie Benutzern dieser Hilfstechnologien den Zugriff. Stellen Sie insbesondere sicher, dass die Tastaturfokuselemente mithilfe von CSS auf Ihrer Seite sichtbar sind.",
                        "h4-2": "2. Reduzieren Sie Aktionen, die zu viele Tastendrücke erfordern",
                        "p-6": "Die meisten motorischen Hilfsmittel greifen auf kleine, spezifische Muskelgruppen zurück. Zum Beispiel:",
                        "ul-2": "<li>Benutzer von Kopfstäben verlassen sich bei jeder Aktion auf ihre Nackenmuskulatur.</li>\n" +
                            " <li>Benutzer von Mundstäben verwenden Mundbewegungen, um Tasten auf einer virtuellen Tastatur auszuwählen.</li>",
                        "p-7": "Um Ermüdung vorzubeugen, bieten Sie praktische Möglichkeiten, mit weniger Aktionen auf Ihrer Website zu navigieren. Zum Beispiel:",
                        "ul-3": "<li>Ermöglicht das Springen zum Ende langer Seiten oder Listen mit einem einzigen Klick.</li>\n" +
                            " <li>Strukturieren Sie Navigationsmenüs als mehrstufige Bäume.</li>",
                        "h4-3": "3. Fügen Sie Ihrer Website ein Suchfeld hinzu",
                        "p-8": "Manche Benutzer mit motorischen Behinderungen sind auf Spracherkennungssysteme angewiesen. Diese Systeme vereinfachen zwar die Navigation, doch ist es in der Regel einfacher, mithilfe der Spracherkennung einen Satz in ein Textfeld einzugeben, als bestimmte Elemente auf der Seite mit Sprachbefehlen auszuwählen.",
                        "p-9": "Optimieren Sie die Suchfunktion, indem Sie sicherstellen, dass Ihre Seiten indiziert und die Suchergebnisse benutzerfreundlich sortiert werden.",
                        "h5-2": "In diesem kurzen Video werden bewährte Methoden erläutert, mit denen Sie die Verwendung Ihrer App einfacher gestalten können. Außerdem wird über Tests auf Barrierefreiheit gesprochen, mit denen Sie das Benutzererlebnis Ihrer App für alle Benutzer verbessern können."
                    }
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
                id: 8,
                title: "Farbdesign",
                image: "/UOH-AWA/assets/images/color-design.webp",
                description: "Erfahren Sie mehr über die verschiedenen Möglichkeiten, wie Sie Farben verwenden können, um Ihr Webprodukt zugänglicher zu machen",
                estimatedTime: 40,
                prerequisites: [3, 4],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-8.html",
                    "htmlVars": {
                        "h3-1": "Einführung",
                        "p-1": "Farbe spielt im Webdesign eine entscheidende Rolle und beeinflusst Ästhetik, Benutzerfreundlichkeit und Zugänglichkeit.",
                        "p-2": "Wenn Sie beim Design auf Barrierefreiheit achten, stellen Sie sicher, dass Ihr Produkt von einem vielfältigen Publikum verwendet werden kann, einschließlich Menschen mit Sehbehinderungen oder Farbsehschwächen.",
                        "p-3": "In diesem Abschnitt geht es um die wichtigsten Grundsätze und bewährten Methoden zur Erstellung eines barrierefreien Farbdesigns für Webprodukte.",
                        "h3-2": "Color Contrast",
                        "p-4": "Text und interaktive Elemente sollten einen hohen Kontrast zum Hintergrund aufweisen, um die Lesbarkeit für Benutzer mit Sehschwäche oder Farbenblindheit zu gewährleisten. Dazu gehören unter anderem:",
                        "ul-1": "<li>Für normalen Text wird ein Kontrastverhältnis von mindestens 4,5:1 empfohlen</li>\n" +
                            " <li>Für großen Text (18pt oder größer) ist ein Verhältnis von 3:1 akzeptabel</li>",
                        "p-5": "Tools wie der WebAIM Color Contrast Checker können bei der Beurteilung und Anpassung der Kontrastwerte helfen.",
                        "h3-3": "Verlassen Sie sich bei der Informationsvermittlung nicht ausschließlich auf Farben",
                        "p-6": "Informationsvermittlung",
                        "p-7": "Wenn sich diese Benutzer ausschließlich auf die Farbe verlassen, kann es für sie schwierig sein, Inhalte zu verstehen.",
                        "p-8": "Um dies zu erreichen, müssen Sie Folgendes verwenden:",
                        "ul-2": "<li>Textbeschriftungen</li>\n" +
                            " <li>Muster</li>\n" +
                            " <li>Symbole</li>\n" +
                            " <li>Formen </li>",
                        "p-9": "Beispielsweise sollte eine rote Warnmeldung auch ein Symbol wie ein Ausrufezeichen oder das Wort „Warnung“ im Text enthalten.",
                        "h3-4": "Verwenden Sie Farbkombinationen, die für farbenblinde Benutzer zugänglich sind",
                        "p-10": "Bestimmte Farbkombinationen wie Rot-Grün oder Blau-Gelb sind für farbenblinde Benutzer problematisch.",
                        "p11": "Um sicherzustellen, dass Ihr Webprodukt für alle zugänglich ist, müssen Sie:",
                        "ul-3": "<li>Testen Sie Farbpaletten mit Farbblindheitssimulatoren, um sicherzustellen, dass Ihre Farbauswahl für Benutzer mit unterschiedlichen Arten von Farbsehschwächen unterscheidbar ist.</li>\n" +
                            " <li>Verwenden Sie Tools wie Color Oracle oder Coblis (Color Blindness Simulator), um problematische Kombinationen zu identifizieren.</li>",
                        "h3-5": "Berücksichtigen Sie den Farbkontext",
                        "p-12": "Die Bedeutung und Wirksamkeit von Farben kann sich je nach Umgebungsfarben und Designkontext ändern.",
                        "p-13": "Überprüfen Sie stets, wie die Farben miteinander interagieren, und stellen Sie sicher, dass sie nicht zu optischer Verwirrung oder Überlastung führen.",
                        "p14": "Vermeiden Sie beispielsweise, zwei kontrastreiche Farben nebeneinander zu platzieren, da dies zu visuellem Unbehagen oder einer Belastung führen kann.",
                        "h3-6": "Optionen zur individuellen Gestaltung des Angebots",
                        "p-15": "Anpassungsoptionen bieten Benutzern Flexibilität und tragen dazu bei, eine Vielzahl individueller Bedürfnisse und Vorlieben zu berücksichtigen, die sich von Benutzer zu Benutzer erheblich unterscheiden können.",
                        "p-16": "Wenn Benutzer Farbschemata anpassen können, kann eine Website für Personen mit besonderen Bedürfnissen oder Vorlieben zugänglicher gemacht werden.",
                        "p-17": "Um sicherzustellen, dass Ihr Webprodukt für alle zugänglich ist, müssen Sie:",
                        "ul-4": "<li>Implementieren Sie anpassbare Designs</li>\n" +
                            " <li>Schließen Sie Optionen für hohen Kontrast oder dunklen Modus ein</li>\n" +
                            " <li>Geben Sie klare Anweisungen, wie Benutzer zwischen diesen Modi wechseln können</li>\n" +
                            " <li>Stellen Sie sicher, dass diese Optionen die Lesbarkeit oder Funktionalität des Inhalts nicht beeinträchtigen</li>",
                        "h3-7": "Bewährte Methoden",
                        "p-18": "In diesem kurzen Video werden bewährte Methoden erläutert, mit denen Sie die Verwendung Ihrer App einfacher gestalten können. Außerdem wird erklärt, wie Sie durch Tests auf Barrierefreiheit das Benutzererlebnis Ihrer App für alle Benutzer verbessern können."
                    }
                },
                test: [
                    {
                        question: "Warum ist es wichtig, Webbenutzern Anpassungsoptionen bereitzustellen?",
                        options: ["Um das Design für den Benutzer optisch ansprechender zu gestalten", "Um eine Vielzahl individueller Bedürfnisse zu berücksichtigen, wie etwa Sehbehinderungen und kognitive Störungen", "Um die Ladegeschwindigkeit der Website zu erhöhen", "Um die Größe der Website zu reduzieren und sie effizienter zu gestalten"],
                        answer: 1
                    },
                    {
                        question: "Welcher der folgenden Punkte ist ein Vorteil der Anpassungsoptionen für Benutzer mit Sehschwäche?",
                        options: ["Sie können das Layout der Website in ein komplexeres Design ändern", "Sie können die Ladezeiten von Seiten beschleunigen", "Sie können Textgröße, Kontrast und Hintergrundfarbe anpassen, um die Lesbarkeit zu verbessern", "Sie können die allgemeine Ästhetik der Website ändern, um sie an aktuelle Trends anzupassen"],
                        answer: 2
                    },
                    {
                        question: "Was ist ein Schlüsselprinzip des barrierefreien Webdesigns in Bezug auf Farbe?",
                        options: ["Farbe sollte verwendet werden, um das Design optisch komplex zu gestalten", "Die Farbauswahl sollte ausschließlich auf ästhetischen Vorlieben beruhen", "Farbkombinationen sollten so gewählt werden, dass sie für Benutzer mit Farbenblindheit erkennbar sind", "Um Verwirrung zu vermeiden, sollten alle Designelemente die gleiche Farbe haben"],
                        answer: 2
                    }
                ]
            },
            {
                id: 9,
                title: "Der rechtliche Aspekt der Barrierefreiheit",
                image: "/UOH-AWA/assets/images/accessibility-law.webp",
                description: "Informieren Sie sich über die rechtlichen Aspekte der Barrierefreiheit, insbesondere über die" +
                    "Übereinkommen über die Rechte von Menschen mit Behinderungen (2008) und britisches Gleichstellungsgesetz (2010)",
                estimatedTime: 60,
                prerequisites: [1],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-9.html",
                    "htmlVars": {
                        "h3-1": "Einführung",
                        "p-1": "Es gibt ein offensichtliches ethisches Argument dafür, digitale Inhalte für alle zugänglich zu machen, unabhängig " +
                            "von ihren Fähigkeiten. Die Entwicklung digitaler Technologien für alle wird sogar in mehreren professionellen " +
                            "Verhaltenskodizes erwähnt. Ethik und Recht gehen jedoch nicht immer Hand in Hand. Dieser Abschnitt konzentriert sich auf " +
                            "die rechtlichen Aspekte der digitalen Zugänglichkeit.",
                        "h5-1": "Übereinkommen über die Rechte von Menschen mit Behinderungen (CRPD)",
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
            {
                id: 10,
                title: "Richtlinien zur Barrierefreiheit von Webinhalten",
                image: "/UOH-AWA/assets/images/guidelines.webp",
                description: "Informieren Sie sich über die Richtlinien zur Barrierefreiheit von Webinhalten, die Entwickler einhalten sollten.",
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
    "metadata": {"tagId": "de-DE", "flag": "fi fi-de", "displayName":"DE"}
}