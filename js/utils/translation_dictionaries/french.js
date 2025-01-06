export const french = {
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-1.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-2.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-3.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-4.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-5.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-6.html",
                    "htmlVars": {}
                },
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
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-7.html",
                    "htmlVars": {
                        "h5-1": "Introduction",
                        "p-1": "Il existe un argument éthique évident pour rendre le contenu numérique accessible à tous, quelles que soient leurs capacités. " +
                            "La conception de technologies numériques pour tous est même mentionnée dans plusieurs codes de conduite professionnels. Cependant, " +
                            "l'éthique et la loi ne vont pas toujours de pair. Cette section se concentrera sur la légalité entourant l'accessibilité numérique.",
                        "h5-2": "Convention relative aux droits des personnes handicapées (CDPH)",
                        "p-2": "La CDPH est un traité international adopté par l’Assemblée générale des Nations Unies en 2006. L’objectif de la convention est de :",
                        "blq-1": "Promouvoir, protéger et assurer la jouissance pleine et égale de tous les droits de l’homme et de toutes les libertés fondamentales " +
                            "par toutes les personnes handicapées, et promouvoir le respect de leur dignité inhérente.",
                        "p-3": "Le traité contient plusieurs principes clés :",
                        "ul-1": "<li>Respect de la dignité inhérente, de l’autonomie individuelle, y compris la liberté de faire ses propres choix, et de l’indépendance des personnes</li>\n" +
                            "        <li>Non-discrimination</li>\n" +
                            "        <li>Participation et inclusion pleines et effectives dans la société</li>\n" +
                            "        <li>Respect de la différence et acceptation des personnes handicapées en tant qu’élément de la diversité humaine et de l’humanité</li>\n" +
                            "        <li>Égalité des chances</li>\n" +
                            "        <li><b>Accessibilité</b></li>\n" +
                            "        <li>Égalité entre les hommes et les femmes</li>\n" +
                            "        <li>Respect des capacités évolutives des enfants handicapés et respect du droit des enfants handicapés à préserver leur identité</li>",
                        "p-4": "Voici une brève vidéo qui résume la CDPH :",
                    }
                },
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
}