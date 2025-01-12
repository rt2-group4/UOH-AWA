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
        "passRemark": "Super travail ! Vous avez réussi le test.",
        "retryRemark": "Continuez à étudier et réessayez!",
        "testHeading": "Test Objectif : Obtenez 60 % ou Plus pour Réussir",
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
                title: "Handicap moteur",
                image: "/UOH-AWA/assets/images/motor-disabilities.webp",
                description: "Apprenez les bases de l’accessibilité Web pour les utilisateurs ayant différents handicaps moteurs.",
                estimatedTime: 40,
                prerequisites: [5],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-6.html",
                    "htmlVars": {}
                },
                test: [
                    {
                        question: "Quel est le principe clé de l’accessibilité du Web pour les utilisateurs en situation de handicap moteur ?",
                        options: ["Opérable", "Précise", "Perceptible", "Compréhensible"],
                        answer: 0
                    },
                    {
                        question: "Laquelle de ces mesures n’est PAS une façon de rendre les sites Web accessibles?",
                        options: ["Prise en charge d'une navigation efficace au clavier", "Réduisez les actions qui nécessitent trop de pressions sur les touches", "Ajoutez un champ de recherche à votre site Web", "Utilisez des petits liens"],
                        answer: 3
                    },
                    {
                        question: "Quelle technologie d’assistance s’appuie sur les mouvements des muscles du cou pour la navigation?",
                        options: ["Interrupteurs à inhalation", "Baguette de tête", "Bâton buccal", "Interrupteurs simples"],
                        answer: 1
                    }
                ]
            },
            {
                id: 7,
                title: "Technologies d'assistance",
                image: "/UOH-AWA/assets/images/assistive-tech.webp",
                description: "Familiarisez-vous avec les différentes technologies d’assistance utilisées pour l’accessibilité du Web.",
                estimatedTime: 45,
                prerequisites: [1, 2],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-7.html",
                    "htmlVars": {
                        "h3-1": "Introduction",
                        "p-1": "Les handicaps moteurs peuvent résulter de nombreuses causes différentes, entraînant des difficultés similaires chez les utilisateurs lorsqu’ils naviguent sur le Web.",
                        "p-2": "L'idée principale de l'accessibilité du Web pour les personnes handicapées motrices est de rendre les sites Web <strong>exploitables</strong>, car tout le monde ne peut pas utiliser une souris, cliquer sur de petits liens ou contrôler facilement des fonctionnalités interactives. Cette section se concentrera sur ce que nous pouvons faire pour créer un produit Web accessible aux personnes handicapées motrices.",
                        "p-3": "Il existe de nombreuses technologies d'assistance qui peuvent être utilisées pour faciliter la navigation sur le Web pour les personnes souffrant de handicaps moteurs. En voici quelques-unes :",
                        "ul-1": "<li>Baguettes pour la tête</li>\n" +
                            " <li>Baguettes pour la bouche</li>\n" +
                            " <li>Interrupteurs à inhalation</li>\n" +
                            " <li>Interrupteurs simples</li>",
                        "p-4": "Cependant, ces technologies d'assistance ne suffisent pas à elles seules à rendre le Web accessible aux utilisateurs handicapés. Voici trois moyens d'améliorer l'accessibilité :",
                        "h4-1": "1. Prise en charge d'une navigation efficace au clavier",
                        "p-5": "Les personnes souffrant de handicaps moteurs ont souvent du mal à utiliser une souris. En rendant votre site Web utilisable efficacement avec un clavier, vous ouvrez l'accès aux utilisateurs de ces technologies d'assistance. Plus précisément, assurez-vous que les éléments de focus du clavier sont visibles sur votre page à l'aide de CSS.",
                        "h4-2": "2. Réduisez les actions qui nécessitent trop de pressions sur les touches",
                        "p-6": "La plupart des outils d'assistance motrice font appel à de petits groupes musculaires spécifiques. Par exemple :",
                        "ul-2": "<li>Les utilisateurs de baguettes pour la tête comptent sur les muscles de leur cou pour chaque action.</li>\n" +
                            " <li>Les utilisateurs de baguettes pour la bouche utilisent les mouvements de la bouche pour sélectionner des touches sur un clavier virtuel.</li>",
                        "p-7": "Pour réduire la fatigue, proposez des moyens pratiques de naviguer sur votre site avec moins d'actions. Par exemple:",
                        "ul-3": "<li>Permettre de passer directement à la fin de longues pages ou de listes en un seul clic.</li>\n" +
                            " <li>Structurer les menus de navigation sous forme d'arborescences à plusieurs niveaux.</li>",
                        "h4-3": "3. Ajoutez un champ de recherche à votre site Web",
                        "p-8": "Certains utilisateurs souffrant de handicaps moteurs ont recours à des systèmes de reconnaissance vocale. Bien que ces systèmes simplifient la navigation, il est généralement plus facile de saisir une phrase dans un champ de texte à l’aide de la reconnaissance vocale que de sélectionner des éléments spécifiques sur la page à l’aide de commandes vocales.",
                        "p-9": "Optimisez la fonctionnalité de recherche en vous assurant que vos pages sont indexées et que les résultats de recherche sont triés de manière conviviale.",
                        "h5-2": "Voici une courte vidéo qui présente les meilleures pratiques pour rendre votre application plus facile à utiliser et parle des tests d'accessibilité pour améliorer l'expérience utilisateur de votre application pour tous les utilisateurs."
                    }
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
                id: 8,
                title: "Conception de couleur",
                image: "/UOH-AWA/assets/images/color-design.webp",
                description: "Découvrez les différentes façons dont vous pouvez utiliser les couleurs pour rendre votre produit Web plus accessible",
                estimatedTime: 40,
                prerequisites: [3, 4],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-8.html",
                    "htmlVars": {
                        "h3-1": "Introduction",
                        "p-1": "La couleur joue un rôle crucial dans la conception Web, impactant l’esthétique, la convivialité et l’accessibilité.",
                        "p-2": "Concevoir en tenant compte de l’accessibilité garantit que votre produit est utilisable par un public diversifié, y compris les personnes malvoyantes ou ayant des déficiences de la vision des couleurs.",
                        "p-3": "Cette section se concentrera sur les principes clés et les meilleures pratiques pour créer une conception de couleur accessible pour les produits Web.",
                        "h3-2": "Farbkontrast",
                        "p-4": "Le texte et les éléments interactifs doivent avoir un rapport de contraste élevé par rapport à leur arrière-plan pour garantir la lisibilité pour les utilisateurs malvoyants ou daltoniens. En voici quelques exemples :",
                        "ul-1": "<li>Pour un texte normal, un rapport de contraste d'au moins 4,5:1 est recommandé</li>\n" +
                            " <li>Pour un texte de grande taille (18 pt ou plus), un rapport de 3:1 est acceptable</li>",
                        "p-5": "Des outils comme WebAIM Color Contrast Checker peuvent aider à évaluer et à ajuster les niveaux de contraste.",
                        "h3-3": "Évitez de vous fier uniquement à la couleur pour transmettre des informations",
                        "p-6": "transmettre des informations",
                        "p-7": "Se fier uniquement à la couleur peut rendre difficile pour ces utilisateurs la compréhension du contenu.",
                        "p-8": "Pour y parvenir, vous devez utiliser :",
                        "ul-2": "<li>étiquettes de texte</li>\n" +
                            " <li>motifs</li>\n" +
                            " <li>icônes</li>\n" +
                            " <li>formes </li>",
                        "p-9": "Par exemple, un message d’avertissement rouge doit également inclure un symbole comme un point d’exclamation ou le mot « Avertissement » dans le texte.",
                        "h3-4": "Certaines combinaisons de couleurs, comme le rouge-vert ou le bleu-jaune, sont problématiques pour les utilisateurs daltoniens.",
                        "p-10": "Certaines combinaisons de couleurs, comme le rouge-vert ou le bleu-jaune, sont problématiques pour les utilisateurs daltoniens.",
                        "p11": "Afin de garantir que votre produit Web soit accessible à tous, vous devez:",
                        "ul-3": "<li>Testez les palettes de couleurs à l'aide de simulateurs de daltonisme pour vous assurer que vos choix de couleurs sont distinctifs pour les utilisateurs présentant différents types de déficiences de la vision des couleurs.</li>\n" +
                            " <li>Utilisez des outils comme Color Oracle ou Coblis (Color Blindness Simulator) pour vous aider à identifier les combinaisons problématiques.</li>",
                        "h3-5": "Tenir compte du contexte de couleur",
                        "p-12": "La signification et l’efficacité de la couleur peuvent changer en fonction des couleurs environnantes et du contexte de conception.",
                        "p-13": "Vérifiez toujours comment les couleurs interagissent entre elles, en vous assurant qu’elles ne provoquent pas de confusion visuelle ou de surcharge.",
                        "p14": "Par exemple, évitez de placer deux couleurs à fort contraste l’une à côté de l’autre, car elles pourraient créer une gêne ou une fatigue visuelle.",
                        "h3-6": "Options de personnalisation de l'offre",
                        "p-15": "Les options de personnalisation peuvent offrir de la flexibilité aux utilisateurs et aider à répondre à une variété de besoins et de préférences individuels, qui peuvent varier considérablement d’un utilisateur à l’autre.",
                        "p-16": "Afin de permettre aux utilisateurs d'ajuster les schémas de couleurs, un site Web peut être plus accessible aux personnes ayant des besoins ou des préférences spécifiques.",
                        "p-17": "Afin de garantir que votre produit Web soit accessible à tous, vous devez:",
                        "ul-4": "<li>Implémentez des thèmes personnalisables</li>\n" +
                            " <li>Incluez des options de contraste élevé ou de mode sombre</li>\n" +
                            " <li>Fournissez des instructions claires sur la manière dont les utilisateurs peuvent basculer entre ces modes</li>\n" +
                            " <li>Assurez-vous que ces options n'interfèrent pas avec la lisibilité ou la fonctionnalité du contenu</li>",
                        "h3-7": "Bonnes pratiques",
                        "p-18": "Voici une courte vidéo qui présente les meilleures pratiques pour rendre votre application plus facile à utiliser et explique comment les tests d'accessibilité peuvent améliorer l'expérience utilisateur de votre application pour tous les utilisateurs."
                    }
                },
                test: [
                    {
                        question: "Pourquoi est-il important de proposer des options de personnalisation aux utilisateurs Web?",
                        options: ["Rendre le design plus attrayant visuellement pour l'utilisateur", "Répondre à une variété de besoins individuels, tels que les déficiences visuelles et les troubles cognitifs", "Augmenter la vitesse de chargement du site Web », « Réduire la taille du site Web et le rendre plus efficace"],
                        answer: 1
                    },
                    {
                        question: "Lequel des éléments suivants constitue un avantage des options de personnalisation pour les utilisateurs malvoyants?",
                        options: ["Ils peuvent modifier la mise en page du site Web vers une conception plus complexe", "Ils peuvent accélérer les temps de chargement des pages", "Ils peuvent ajuster la taille du texte, le contraste et la couleur d'arrière-plan pour une meilleure lisibilité", "Ils peuvent modifier l'esthétique générale du site Web pour l'adapter aux tendances actuelles"],
                        answer: 2
                    },
                    {
                        question: "Quel est le principe clé de la conception Web accessible lié à la couleur?",
                        options: ["La couleur doit être utilisée pour rendre le design visuellement complexe", "Les choix de couleurs doivent reposer uniquement sur des préférences esthétiques", "Les combinaisons de couleurs doivent être choisies de manière à être reconnaissables par les utilisateurs daltoniens", "Tous les éléments de conception doivent être de la même couleur pour éviter toute confusion"],
                        answer: 2
                    }
                ]
            },
            {
                id: 9,
                title: "L’aspect juridique de l’accessibilité",
                image: "/UOH-AWA/assets/images/accessibility-law.webp",
                description: "Découvrez la composante juridique de l'accessibilité avec un accent particulier sur les Nations Unies'" +
                    "Convention relative aux droits des personnes handicapées (2008) et loi britannique sur l'égalité (2010)",
                estimatedTime: 60,
                prerequisites: [1],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-9.html",
                    "htmlVars": {
                        "h3-1": "Introduction",
                        "p-1": "Il existe un argument éthique évident pour rendre le contenu numérique accessible à tous, quelles que soient leurs capacités. " +
                            "La conception de technologies numériques pour tous est même mentionnée dans plusieurs codes de conduite professionnels. Cependant, " +
                            "l'éthique et la loi ne vont pas toujours de pair. Cette section se concentrera sur la légalité entourant l'accessibilité numérique.",
                        "h5-1": "Convention relative aux droits des personnes handicapées (CDPH)",
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
            {
                id: 10,
                title: "Lignes directrices pour l'accessibilité du contenu Web",
                image: "/UOH-AWA/assets/images/guidelines.webp",
                description: "Découvrez les directives d’accessibilité du contenu Web que les développeurs doivent respecter.",
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
        ]
    },
    "metadata": {"tagId": "fr-FR", "flag": "fi fi-fr", "displayName":"FR"}
}