export const albanian = {
    //Albanian Translations
    "data": {
        "home": "Faqja Kryesore",
        "studyPlan": "Plani i Studimit",
        "topics": "Temat",
        "missingTopic": "Tema nuk u gjet.",
        "estimatedStudyTime": "Koha e Përllogaritur Për Studim",
        "minutes": "minuta",
        "openContent": "Hap Përmbajtjen",
        "preRequisites": "Duhet të keni studiuar edhe ",
        "showDetails": "Shfaq Detajet",
        "startStudying": "Fillo të Studiosh",
        "stopStudying": "Ndalo Së Studiuari",
        "currentlyStudying1": "Ti tani po studion",
        "currentlyStudying2": "A dëshiron të ndalosh dhe të fillosh të stuiosh",
        "removeFromPlan": "Hiq nga Plani i Studimit",
        "studyLater": "Mëso më vonë",
        "notStudying": "Asnjë temë nuk po studiohet tani.",
        "emptyStudyPlan": "Plani yt i studimit është bosh.",
        "studyPlanTxt": "Plani Yt i Studimit",
        "studyPlanTitle": "AccessibleWebApp - Plani i Studimit",
        "studyingNowHeader": "Duke studiuar tani:",
        "studyingNextHeader": "Për t'u studiuar më pas:",
        "homeTitle": "AccessibleWebApp - Temat",
        "submitAnswers": "Dorëzo Përgjigjet",
        "yourScore": "Pikët e tua:",
        "learningActTitle": "AccessibleWebApp - Aktivitete Mësimore",
        "footerTxt": "AccessibleWebApp Team | Projekt Universiteti ",
        "passRemark": "Përgëzime! Ju e keni kaluar testin!",
        "retryRemark": "Vazhdoni te studioni dhe provoni përsëri!",
        "testHeading": "Testi Objektiv: Arrini 60% ose më Shumë për të Kaluar",
        "topicsData": [
            {
                id: 1,
                title: "Hyrje në Aksesueshmëri",
                image: "/UOH-AWA/assets/images/accessibility.webp",
                description: "Mësoni bazat e aksesueshmërisë në ueb dhe rëndësinë e saj.",
                estimatedTime: 30,
                prerequisites: [],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-1.html",
                    "htmlVars": {
                        "h3-1": "Hyrje",
                        "p-1": "Aksesueshmëria është sigurimi që njerëzit të kenë mundësi të aksesojnë përmbajtjen që krijoni. Për çdo produkt që krijoni, duhet të siguroheni që njerëzit, qofshin me paaftësi apo jo, të mund ta aksesojnë atë.",
                        "p-2": "Secili duhet të ketë mundësinë të marrë të njëjtat informacione, të angazhohet në të njëjtat ndërveprime dhe të shijojë të njëjtat shërbime si një person pa paaftësi, në një mënyrë po aq efektive dhe të integruar, me një lehtësi përdorimi në mënyrë të barasvlershme.",
                        "h3-2": "Konteksti i Aksesueshmërisë",
                        "p-3": "Aksesueshmëria duhet të merret parasysh gjatë dizajnimit, zhvillimit, krijimit të përmbajtjes dhe mirëmbajtjes së aseteve digjitale. Por aksesueshmëria nuk është vetëm gjëja e duhur për të bërë, <strong>ajo është gjithashtu e detyrueshme me ligj.</strong> Sipas Seksionit 508 të Aktit të Rehabilitimit të vitit 1973, agjencitë federale duhet të krijojnë faqe interneti dhe shërbime digjitale që përmbushin Standartet e Rishikuara të Seksionit 508.",
                        "p-4": "Ka katër fusha të aksesueshmërisë që duhet të merren parasysh kur dizajnohet. Këto katër fusha janë paaftësitë:",
                        "ul-1": "<li>Fizike (paaftësi motorike)</li>\n" +
                            "    <li>Perceptim</li>\n" +
                            "    <li>Dëgjimi </li>\n" +
                            "    <li>Vizuale</li>",
                        "h3-3": "WCAG",
                        "p-5": "Për të pasur një standard të caktuar për aksesueshmërinë, është krijuar WCAG. WCAG do të thotë Udhëzimet për Aksesueshmërinë e Përmbajtjes së Uebit. Ato janë një bashkëpunim global për standardet teknike për ta bërë internetin më të aksesueshëm për të gjithë individët kudo.",
                        "p-6": "WCAG është bazuar në katër parime kryesore të aksesueshmërisë:",
                        "ul-2": "<li>Perceptueshmëri</li>\n" +
                            "    <li>Funksionim</li>\n" +
                            "    <li>Kuptueshmëri</li>\n" +
                            "    <li>Qëndrueshmëri</li>",
                        "p-7": "Nëse ndiqen këto parime, kjo do të thotë se:",
                        "ul-3": "<li>Teksti është i lexueshëm dhe i kuptueshëm</li>\n" +
                            "    <li>Përmbajtja shfaqet dhe funksionon në mënyra të parashikueshme</li>\n" +
                            "    <li>Përdoruesit ndihmohen të shmangin dhe të korrigjojnë gabimet </li>",
                        "h3-4": "Rëndësia e Aksesueshmërisë",
                        "blq-1": "“Pushteti i internetit është në universialitetin e tij.Qasja nga të gjithë, pavarësisht paaftësisë, është një aspekt thelbësor.” <br><span style='font-weight: bold; display: block; margin-top: 10px;'>— Tim Berners-Lee, themelues i Internetitl</span>",
                        "h5-1": "Ja një video e shkurtër që shpjegon se çfarë është aksesueshmëria, si dhe përdorimet e saj. Gjithashtu do të mësoni për teknologjitë ndihmëse dhe mënyrat se si ato përdoren."
                    }
                },
                test: [
                    { question: "Çfarë do të thotë WCAG?", options: ["Web Content Accessibility Guidelines", "Web Content Application Guide", "World Content Accessibility Group"], answer: 0 },
                    { question: "Pse është e rëndësishme aksesueshmëria?", options: ["Pajtueshmëria ligjore", "Përvoja gjithëpërfshirëse e përdoruesit", "Të dyja"], answer: 2 },
                    { question: "Cili NUK është një parim i aksesueshmërisë në WCAG?", options: ["E perceptueshme", "E operueshme", "Sofistikuar", "E kuptueshme"], answer: 2 },
                ]
            },
            {
                id: 2,
                title: "HTML Semantike",
                image: "/UOH-AWA/assets/images/semantic-html.webp",
                description: "Kuptoni rolin e HTML semantike në aksesueshmëri.",
                estimatedTime: 45,
                prerequisites: [1],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-2.html",
                    "htmlVars": {
                        "h3-1": "Hyrje",
                        "p-1": "Sa i përket aksesueshmërisë, HTML semantike i jep më shumë kuptim dhe marrëdhënie organizimit të faqeve – duke inkurajuar qartësinë e faqes së internetit.",
                        "p-2": "Kjo ofron përfitime të drejtpërdrejta të aksesueshmërisë duke mundësuar që përdoruesit me aftësi të kufizuara të ndërveprojnë në mënyrë të pavarur me softuerin.",
                        "h3-2": "Elementët HTML",
                        "p-3": "Elementët HTML ndahen në:",
                        "ul-1": "<li>elementë semantikë</li>\n" +
                                "    <li>elementë jo-semantikë</li>",
                        "p-4": "Një element semantik përshkruan qartë kuptimin e tij për shfletuesin dhe zhvilluesin. Disa shembuj të elementeve semantikë janë :",
                        "ul-2": "<li>&lt;form&gt;</li>\n" +
                            "    <li>&lt;table&gt;</li>\n" +
                            "    <li>&lt;article&gt;</li>",
                        "p-5": "Ndërsa disa shembuj të elementeve jo-semantikë HTML janë:",
                        "ul-3": "<li>&lt;div&gt;</li>\n" +
                            "    <li>&lt;span&gt;</li>",
                        "h3-3": "Elementi HTML &lt;section&gt;",
                        "p-6": "Elementi &lt;section&gt; përcakton një seksion në një dokument. Disa shembuj ku mund të përdoret një etiketë seksioni janë: ",
                        "ul-4": "<li>Kapituj</li>\n" +
                            "    <li>Hyrje</li>\n" +
                            "    <li>Artikuj lajmesh</li>\n" +
                            "    <li>Informacione kontakti</li>",
                        "h3-4":"Elementi HTML &lt;article&gt;",
                        "p-7": "Elementi &lt;article&gt; specifikon përmbajtje të pavarur dhe të mjaftueshëm. Një artikull duhet të ketë kuptim dhe veçmas dhe duhet të jetë e mundur që ai të ndahet në mënyrë të pavarur nga pjesa tjetër e faqes së internetit.",
                        "p-8": "Disa shembuj ku mund të përdoret një artikull janë:",
                        "ul-5": "<li>Postime forumesh</li>\n" +
                            "    <li>Postime blogu</li>\n" +
                            "    <li>Komente përdoruesish</li>\n" +
                            "    <li>Kartela produktesh</li>\n" +
                            "     <li>Artikuj gazetash</li>",
                            "h5-1": "Këtu është një video e shkurtër që flet për arsyet dhe rastet kur elementët semantikë HTML duhet të përdoren në vend të etiketës div."
                    }
                },
                    test : [
                        { question: "Cili prej elementeve të mëposhtëm është një lloj element semantik për navigim?", options: ["<div>", "<nav>", "<span>"], answer: 1 },
                        { question: "Cili prej elementeve të mëposhtëm është një lloj element HTML?", options: ["jo-semantik", "semantik", "të dyja", "asnjë "], answer: 2 },
                        { question: "Cili prej elementeve të mëposhtëm NUK është një element semantik?", options: ["<form>", "<article>", "<div>", "<table>"], answer: 2 },
                        { question: "Cili është ndryshimi mes elementeve semantik dhe jo-semantik?", options: ["Elementet semantike janë vetëm për zhvilluesit, ndërsa elementet jo semantike janë për përdoruesit.", "Elementet semantike përshkruajnë kuptimin e tyre për shfletuesin dhe zhvilluesit, ndërsa elementet jo semantike nuk e bëjnë këtë.", "Elementet jo semantike ngarkohen më shpejt se elementet semantike.", "Elementet semantike nuk mund të stilohen duke përdorur CSS."], answer: 1 }
                    ]
                },
            {
                id: 3,
                title: "Paaftësitë në shikim",
                image: "/UOH-AWA/assets/images/visual-disabilities.webp",
                description: "Mësoni rreth aksesit në ueb për përdoruesit me probleme shikimi.",
                estimatedTime: 40,
                prerequisites: [2],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-3.html",
                    "htmlVars": {
                        "h3-1": "Hyrje",
                        "p-1": "Aftësitë e kufizuara vizuale mund të jenë pasojë e shumë arsyeve të ndryshme, qofshin ato të trashëguara që nga lindja ose të zhvilluara pas një dëmtimi traumatike të trurit, etj. Pavarësisht shkakut, këto aftësi të kufizuara shkaktojnë sfida të ngjashme për përdoruesit kur ata navigojnë në internet.",
                        "p-2": "Ideja kryesore e aksesueshmërisë në internet për personat me aftësi të kufizuara vizuale është mundësimi që personat me aftësi të kufizuara të perceptojnë, kuptojnë, navigojnë, ndërveprojnë me dhe kontribuojnë në internet.",
                        "p-3": " seksion do të fokusohet tek ajo që mund të bëjmë për të ndërtuar një produkt të aksesueshëm në internet për personat me aftësi të kufizuara vizuale.",
                        "h3-2": "Teknologjitë Ndihmëse",
                        "p-4": "Ekzistojnë shumë teknologji ndihmëse që mund të përdoren për të lehtësuar navigimin për personat me aftësi të kufizuara vizuale në internet. Disa prej tyre përfshijnë:",
                        "ul-1": "<li>Lexues ekrani</li>\n" +
                            "            <li>Zmadhues</li>\n" +
                            "            <li>Voiceover</li>\n" +
                            "            <li>Ekrani Braille etj.</li>",
                        "p-5": "Megjithatë, këto teknologji ndihmëse vetëm nuk janë të mjaftueshme për të bërë internetin të aksesueshëm për përdoruesit me aftësi të kufizuara. Këtu janë katër mënyra për të përmirësuar aksesueshmërinë:",
                        "h3-3": "1. Mbështetni Navigimin Efektiv me Tastierë",
                        "p-6": "Shkurtoret e tastierës mund ta bëjnë navigimin për përdoruesit me paaftësi në shikim shumë më të lehtë. Një maus nuk është i dobishëm për navigimin sepse kërkon koordinim mes dorës dhe syrit.",
                        "p-7": "Kjo është veçanërisht e vërtetë për përdoruesit që:",
                        "ul-2": "<li>janë të verbër</li>\n" +
                                "<li>përdorin lexues ekrani për të naviguar në internet.</li>",
                        "p-8": "Për njerëzit me shikim të dobët, komandat e tastierës e bëjnë të mundur navigimin e një faqeje pa pasur nevojë për t’u përqendruar dhe ndjekur me mundim një kursor maus nëpër ekran.",
                        "h3-4": "2. Kufizoni dhe jepni prioritet ngjyrave në ndërfaqe",
                        "p-9": "Testoni ngjyrat për t'u siguruar që ato kanë raportin e duhur të kontrastit për lexueshmëri.",
                        "p-10": "Një mjet që mund të përdorni për të testuar kombinimet e ngjyrës së tekstit mbi ngjyrën e sfondit është plugini Stark.",
                        "p-11": "Ka disa madhësi teksti të nevojshme si: ",
                        "ul-3": "<li>WCAG 2.0 niveli AA kërkon një raport kontrasti 4.5:1 për tekstin e zakonshëm</li>\n" +
                            "<li>3:1 për tekstin e madh</li>",
                        "h3-5": "3. Mos u mbështesni vetëm tek ngjyrat për të komunikuar informacione të rëndësishme",
                        "p-long": "Kur bëhet fjalë për: <ul><li>njoftime</li><li>paralajmërime dhe</li><li>faqe të veprueshme</li></ul> elemente si tekst <ul><li>lidhje</li><li>butona</li></ul> sqaroni që këto janë domethënëse për përdoruesin duke përfshirë më shumë sesa thjesht një ndryshim ngjyre.",
                        "p-12": "Gati të gjithë e kuptojnë se teksti i kaltër i nënvizuar është një link.",
                        "p-13": "Përdoruesit do të përfitojnë nga përdorimi i ikonave dhe etiketave përkatëse që shoqërojnë alarmin dhe elementët e veprueshëm të faqes. Çdo element i faqes duhet të ketë më shumë se një shenjë vizuale.",
                        "p-14": "Disa shembuj të shenjave vizuale janë:",
                        "ul-4": "            <li>Imazhe</li>\n" +
                                 "            <li>Linke</li>\n" +
                            "            <li>Butona</li>",
                        "h5-1": "Këtu është një video e shkurtër që flet për aftësitë e ndryshme të kufizuara vizuale dhe si mund të përdorni një lexues ekrani si teknologji ndihmëse dhe një mënyrë për t'ju ndihmuar të lundroni në internet."
                    }
                },
                test: [
                    { question: "Cili prej elementeve të mëposhtëm NUK është një etiketë vizuale?", options: ["Image", "Link", "Button", "Meta"], answer: 3 },
                    { question: "Cili prej këtyre është një shembull i teknologjisë ndihmëse për personat me aftësi të kufizuara vizuale?", options: ["Shkurtore të tastierës", "Lexues ekrani", "Internet me shpejtësi të lartë", "Plotësim automatik i formave"], answer: 1 },
                    { question: "Çfarë duhet të bëni për të siguruar që kombinimet e ngjyrave në një faqe interneti janë të lexueshme?", options: ["Përdorni çdo kombinim ngjyrash që dëshironi", " Testoni ngjyrat për t'u siguruar që ato kanë raportin e duhur të kontrastit", "Mos përdorni ngjyra", "Bëni tekstin të njëjtën ngjyrë me sfondin"], answer: 1 },
                    { question: "Cila është ideja kryesore e aksesueshmërisë në internet për personat me aftësi të kufizuara vizuale?", options: ["Të bëhen faqet më të shpejta për t'u ngarkuar", "Të mundësohet që përdoruesit të perceptojnë, kuptojnë, navigojnë, ndërveprojnë me dhe kontribuojnë në internet", "Të bëhen faqet më të ngjyrosura.", " Të rritet trafiku i faqes së interneti."], answer: 1 }
                ]
            },
            {
                id: 4,
                title: "Paaftësitë në Perceptim",
                image: "/UOH-AWA/assets/images/cognitive-disabilities.webp",
                description: "Një udhëzues për aksesin në ueb për përdoruesit me aftësi të kufizuara në perceptim.",
                estimatedTime: 35,
                prerequisites: [3],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-4.html",
                    "htmlVars": {
                        "h3-1": "Hyrje",
                        "p-1": "Paaftësitë e perceptimit (të njohura gjithashtu si paaftësi intelektuale) janë një term i paqartë që përshkruan një person që ka vështirësi më të mëdha me detyra mendore se një person mesatar. Paaftësitë e perceptimit janë lloji më i zakonshëm i paaftësisë.",
                        "p-2": "Shkaku i paaftësive të perceptimit është më shpesh gjenetik. Një tjetër shkak mund të jenë dëmtimet traumatike të trurit. Pavarësisht arsyes së këtyre paaftësive, duhet marrë në konsideratë nevoja për të krijuar një mjedis të aksesueshëm për njerëzit me këto lloje paaftësish.",
                        "p-3": "Ky seksion do të na mësojë më shumë për paaftësitë e perceptimit, si dhe do të fokusohet në atë që mund të bëjmë për të ndërtuar një produkt në ueb të aksesueshëm për njerëzit me paaftësi të perceptimit.",
                        "h3-2": "Aksesueshmëria për perceptim",
                        "p-4": "Aksesueshmëria për perceptim është praktika e projektimit dhe zhvillimit të përmbajtjes dixhitale për ta bërë atë lehtësisht të kuptueshme dhe të përdorshme nga individët me paaftësi të perceptimit. Këto paaftësi përfshijnë:",
                        "ul-1": "<li>Disleksia</li>\n<li>Autizmi</li>\n<li>Çrregullimi i vëmendjes dhe hiperaktivitetit (ADHD)</li>",
                        "h3-3": "Klasifikimet e paaftësive të perceptimit:",
                        "p-5": "Në fakt ekzistojnë dy lloje klasifikimesh për paaftësitë e perceptimit:",
                        "ul-2": "<li>Klasifikime Klinike<p style='margin-left: 20px;'>-Diagnozat klinike mund të jenë të dobishme nga një këndvështrim mjekësor për trajtim, por jo për qëllime të aksesueshmërisë në ueb.</p><ul><li>Autizmi</li><li>Sindroma Down</li><li>Dëmtime traumatike të trurit (TBI)</li><li>Dementia</li><li>Çrregullimi i vëmendjes (ADD)</li><li>Disleksia (vështirësi në lexim)</li><li>Diskalkulia (vështirësi në matematikë)</li> </ul> </li> <li>Klasifikime Funksionale <p style='margin-left: 20px;'>-Do të flasim më shumë për këtë klasifikim në seksionin e ardhshëm.</p></li>",
                        "h3-4": "Klasifikime Funksionale",
                        "p-6": "Diagnozat funksionale janë më të dobishme për qëllime të aksesueshmërisë në ueb, pasi fokusohet në aftësitë dhe sfidat e përdoruesit, pavarësisht shkaqeve të tyre mjekësore ose sjellore.",
                        "p-7": "Disa paaftësi funksionale mund të burojnë nga një diagnozë klinike: Një person me deficite të kujtesës mund të ketë gjithashtu vështirësi me vëmendjen ose zgjidhjen e problemeve.",
                        "p-8": "Kategoritë funksionale të paaftësive të perceptimit përfshijnë vështirësi me:",
                        "ul-2": "<li>Kujtesën</li>\n<li>Zgjidhjen e problemeve</li>\n<li>Vëmendjen</li>\n<li>Leximin, kuptimin gjuhësor dhe verbal</li>\n<li>Kuptimin e matematikës</li>\n<li>Kuptimin vizual</li>",
                        "p-9": "Klasifikimet funksionale janë të dobishme në aksesueshmërinë në ueb, pasi ato lidhen me shqetësimet e projektuesve dhe zhvilluesve të faqeve të internetit.",
                        "h3-5": "Si të bëjmë një faqe interneti të aksesueshme për paaftësitë e perceptimit",
                        "p-10": "Udhëzimet për Aksesueshmërinë e Përmbajtjes në Ueb (WCAG) përfshijnë kërkesa specifike për aksesueshmërinë e uebit për perceptim, të tilla si:",
                        "ul-3": "<li><strong>Përshtatshmëria:</strong> Krijoni përmbajtje që mund të paraqitet në mënyra të ndryshme (p.sh., një paraqitje më e thjeshtë) pa humbur informacionin ose strukturën. Kjo siguron që përdoruesit të mund të personalizojnë paraqitjen e përmbajtjes sipas nevojave të tyre.</li>\n<li><strong>Dallueshmëria:</strong> Bëjeni më të lehtë për përdoruesit të shohin dhe dëgjojnë përmbajtjen duke ndarë përmbajtjen e përparme nga ajo e sfondit. Kjo përfshin sigurimin e kontrastit të mjaftueshëm dhe shmangien e audios së sfondit që ndërhyn me përmbajtjen e përparme.</li>\n<li><strong>Koha e Mjaftueshme:</strong> Ofroni përdoruesve kohë të mjaftueshme për të lexuar dhe përdorur përmbajtjen. Shmangni vendosjen e kufijve kohorë ose ofroni opsione për t’i zgjatur ose hequr ato, duke përshtatur përdoruesit që mund të kenë nevojë për më shumë kohë për të përpunuar informacionin.</li>\n<li><strong>Lexueshmëria:</strong> Bëni përmbajtjen e tekstit të lexueshme dhe të kuptueshme. Përdorni gjuhë të qartë dhe të thjeshtë, përkufizoni terma të pazakontë dhe zgjeroni shkurtesat për të ndihmuar në kuptimin e përmbajtjes.</li>\n<li><strong>Parashikueshmëria:</strong> Krijoni faqe interneti që shfaqen dhe funksionojnë në mënyra të parashikueshme. Navigimi i qëndrueshëm dhe funksionaliteti i parashikueshëm ndihmojnë përdoruesit të kuptojnë dhe ndërveprojnë më lehtë me faqen e internetit.</li>\n<li><strong>Ndihma për Input:</strong> Ndihmoni përdoruesit të shmangin dhe korrigjojnë gabimet. Ofroni udhëzime të qarta, sugjerime për gabime dhe konfirmime për të mbështetur përdoruesit në plotësimin e formave dhe elementeve të tjera ndërvepruese.</li>",
                        "p-11": "Zbatimi i këtyre udhëzimeve mund të përmirësojë ndjeshëm aksesueshmërinë e faqes suaj të internetit për individët me paaftësi të perceptimit.",
                        "h5-1": "Ja një video e shkurtër që tregon si të njihni paaftësitë e perceptimit dhe si të përshtateni me nevojat e njerëzve me këto paaftësi."
                    },
                    "test": [
                        { "question": "Cili është fokusi kryesor i aksesueshmërisë për perceptim?", "options": [ "Bërja e faqeve të internetit shumëngjyrëshe dhe tërheqëse", "Projektimi i përmbajtjes dixhitale për ta bërë atë lehtësisht të kuptueshme dhe të përdorshme nga individët me paaftësi të perceptimit", "Heqja e të gjithë tekstit nga faqet e internetit", "Rritja e shpejtësisë së ngarkimit të një faqeje interneti" ], "answer": 1 },
                        { "question": "Cili nga udhëzimet në WCAG është i rëndësishëm për aksesueshmërinë e perceptimit?", "options": [ "Shtoni animacione komplekse", "Ulni madhësinë e tekstit në faqet e internetit", "Siguroni kohë të mjaftueshme për përdoruesit për të lexuar dhe përdorur përmbajtjen", "Përdorni shkurtesa pa përkufizime" ], "answer": 2 },
                        { "question": "Cilat janë dy klasifikimet kryesore të paaftësive të perceptimit të përmendura në dokument?", "options": [ "Fizike dhe Emocionale", "Mjekësore dhe Sjellore", "Vizuale dhe Dëgjimore", "Klinike dhe Funksionale" ], "answer": 3 }
                    ]
                }                    
            },
            {
                id: 5,
                title: "Paaftësitë në Dëgjim",
                image: "/UOH-AWA/assets/images/hearing-disabilities.webp",
                description: "Studioni se si ta bëni përmbajtjen e uebit të aksesueshme për përdoruesit me probleme dëgjimi.",
                estimatedTime: 35,
                prerequisites: [4],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-5.html",
                    "htmlVars": {
                        "h3-1": "Hyrje",
                        "p-1": "Organizata Botërore e Shëndetësisë (OBSH) e përcakton një person si me humbje dëgjimi nëse nuk është në gjendje të dëgjojë aq mirë sa një person me dëgjim normal, që do të thotë pragu dëgjimi prej 20dB ose më i mirë në të dy veshët. Sipas OBSH-së, mbi <a href='https://www.who.int/health-topics/hearing-loss#tab=tab_1' class='in-text-a'>1.5 miliardë njerëz</a> në mbarë botën aktualisht jetojnë me një lloj paaftësie dëgjimi.",
                        "p-2": "Njohja më e mirë e paaftësive dëgjimi i jep autorëve të uebit një kontekst dhe vlerësim për njerëzit me këto paaftësi dhe ndihmon në motivimin për të ofruar përmbajtje të aksesueshme.",
                        "h3-2": "Shkallët e Humbjes së Dëgjimit",
                        "p-3": "Edhe pse individët mund të jenë plotësisht të shurdhër, shumica me humbje dëgjimi ende kanë një farë shkalle dëgjimi. Ata mund të mbështeten në teknikat e lexim-buzëve, gjuhën e shenjave ose aparatet dëgjimore për të ndihmuar në komunikim. Ekzistojnë 4 shkallë kryesore të humbjes së dëgjimit:",
                        "ul-1": "<li><b>Humbje e Lehtë e Dëgjimit</b></li><ul><li>Vështirësi në kuptimin e të folurit normal, veçanërisht me zhurmë sfondi</li></ul>" +
                                "<li><b>Humbje e Moderuar e Dëgjimit</b></li><ul><li>Vështirësi në kuptimin e shumicës së të folurit normal edhe pa zhurmë sfondi. Mund të nevojitet aparat dëgjimi</li></ul>" +
                                "<li><b>Humbje e Rëndë e Dëgjimit</b></li><ul><li>Vështirësi në kuptimin e të folurit të zëshëm dhe paaftësi për të perceptuar shumicën e tingujve</li></ul>" +
                                "<li><b>Humbje e Thellë e Dëgjimit</b></li><ul><li>Paaftësi për të perceptuar të folurit e zëshëm dhe tingujt</li></ul>",
                        "h3-3": "Llojet e Çrregullimeve të Dëgjimit",
                        "ul-2": "<li><b>Humbje e Dëgjimit Përçuese</b></li><ul><li>Dëmtimi i veshit të jashtëm ose të mesëm pengon hyrjen e tingujve në veshin e mesëm</li></ul>" +
                                "<li><b>Humbje e Dëgjimit Sensorineurale</b></li><ul><li>Ndodh për shkak të dëmtimit të veshit të brendshëm, nervit dëgjimor ose kokleas</li></ul>" +
                                "<li><b>Tinitusi</b></li><ul><li>Një tingull ziljeje ose buçitjeje në vesh që ndodh për shkak të moshës ose dëmtimeve nga periudha të gjata të zhurmave të larta</li></ul>" +
                                "<li><b>Hiperakuzi</b></li><ul><li>Një ndjeshmëri ekstreme ndaj frekuencave dhe niveleve të caktuara të volumit</li></ul>",
                        "h3-4": "Teknologjia për Aksesueshmërinë e të Shurdhërve",
                        "p-4": "Ata që kanë vështirësi dëgjimi mbështeten në disa teknologji ndihmëse për t'iu mundësuar përdorimin më të lehtë të uebit. Teknologjia kryesore quhet <b>Njohje Automatike e Fjalës (ASR)</b>.",
                        "p-5": "Këtu janë vetëm dy shembuj të platformave kryesore ASR:",
                        "ul-3": "<li><b>Google Live Transcribe</b></li><ul><li>Përdor njohjen e fjalës së Google për të dhënë pasqyrë mbi bisedat që zhvillohen rreth përdoruesve me vështirësi dëgjimi dhe mund të ruajë bisedat për referim të mëvonshëm. Kjo teknologji punon me mbi 70 gjuhë të ndryshme</li></ul>" +
                                "<li><b>Roger Voice</b></li><ul><li>Lejon përdoruesit të angazhohen në thirrje zanore me titra në kohë reale, i disponueshëm si në iOS ashtu edhe në Android</li></ul>",
                        "h3-5": "Përmirësimi i Aksesueshmërisë së Uebit për Paaftësi të Dëgjimit",
                        "ul-4": "<li><h4>Ofro Mënyra të Shumta Për Kontakt</h4></li><ul><li>Mos ofro vetëm një numër telefoni në informacionet e kontaktit. Përfshi mundësi të tjera si një adresë emaili ose ndoshta edhe Live Chat</li></ul>" +
                                "<li><h4>Shto Kontrolla për Lojtarët e Mediave</h4></li><ul><li>Sigurohu që lojtarët e mediave të kenë kontrolle për të aktivizuar titrat dhe rregulluar volumin</li></ul>" +
                                "<li><h4>Fut Tituj & Titra</h4></li><ul><li>Gjithmonë siguro titra ose tituj për përmbajtjen audio dhe video në faqen tënde</li></ul>" +
                                "<li><h4>Përmbledh Përmbajtjen</h4></li><ul><li>Siguro përmbledhje të qarta dhe pa zhargon për të gjithë përmbajtjen audio ose video</li></ul>" +
                                "<li><h4>Përdor Gjuhë të Thjeshtë</h4></li><ul><li>Përdor gjuhë të thjeshtë për të siguruar që përmbajtja të jetë e kuptueshme për ata me vështirësi dëgjimi ose ata për të cilët gjuha e përmbajtjes është gjuhë e dytë</li></ul>" +
                                "<li><h4>Siguro që Alarmet të Kenë Tregues Vizualë</h4></li><ul><li>Përdor alarmet audio me tregues vizualë për të mos u humbur nga përdoruesit me vështirësi dëgjimi</li></ul>"
                            }
                        },
                    "test": [
                        {
                            "question": "Cili prej këtyre nuk është një lloj humbje dëgjimi?",
                            "options": ["Humbje dëgjimi e moderuar", "Humbje dëgjimi e rëndë", "Humbje dëgjimi e rëndësishme"],
                            "answer": 1
                        },
                        {
                            "question": "Çfarë kërkohet që përmbajtja video të jetë e aksesueshme për përdoruesit e shurdhër?",
                            "options": ["Muzikë sfondi", "Titra", "Audio me cilësi të lartë"],
                            "answer": 1
                        },
                        {
                            "question": "Cilin format duhet të ofrosh për përmbajtjen vetëm audio?",
                            "options": ["Regjistrim video", "Transkript", "Gjuhë shenjash"],
                            "answer": 1
                        },
                        {
                            "question": "Çfarë duhet të shoqërojë alarmet audio në faqet e internetit?",
                            "options": ["Tregues vizualë", "Tinguj më të lartë", "Alarmet e përsëritura"],
                            "answer": 0
                        }
                    ]
            },
            {
                id: 6,
                title: "Paaftësitë Motorike",
                image: "/UOH-AWA/assets/images/motor-disabilities.webp",
                description: "Mësoni bazat e aksesit në ueb për përdoruesit me paaftësi të ndryshme motorike.",
                estimatedTime: 40,
                prerequisites: [5],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-6.html",
                    "htmlVars": {
                        "h3-1": "Hyrje",
                        "p-1": "Paaftësitë motorike mund të jenë rezultat i shumë shkaqesh të ndryshme, duke shkaktuar sfida të ngjashme për përdoruesit kur ata navigojnë në internet.",
                        "p-2": "Ideja kryesore e aksesueshmërisë në ueb për njerëzit me paaftësi motorike është ta bëjmë uebsajtin <strong>Funksional</strong>, pasi jo të gjithë mund të përdorin një maus, të klikojnë mbi linke të vegjël ose të kontrollojnë lehtësisht veçoritë interaktive. Kjo pjesë do të fokusohet në atë çfarë mund të bëjmë për të ndërtuar një produkt uebi të aksesueshëm për njerëzit me paaftësi motorike.",
                        "h3-2": "Teknologjitë Ndihmëse",
                        "p-3": "Ekzistojnë shumë teknologji ndihmëse që mund të përdoren për të lehtësuar navigimin në internet për njerëzit me paaftësi motorike. Disa prej tyre përfshijnë:",
                        "ul-1": "<li>Shkop kokor</li>\n" +
                            "            <li>Shkop goje</li>\n" +
                            "            <li>Çelësa frymëmarrje dhe fryrje</li>\n" +
                            "            <li>Çelësa të vetëm</li>",
                        "p-4": "Megjithatë, këto teknologji ndihmëse vetëm nuk janë të mjaftueshme për të bërë internetin të aksesueshëm për përdoruesit me paaftësi. Ja tre mënyra për të përmirësuar aksesueshmërinë:",
                        "h3-3": "1. Mbështetni Navigimin Efektiv me Tastierë",
                        "p-5": "Njerëzit me paaftësi motorike shpesh e kanë të pamundur të përdorin një maus. Duke e bërë faqen tuaj të përdorshme efektivisht me tastierë, ju hapni mundësi për përdoruesit e këtyre teknologjive ndihmëse. Veçanërisht, sigurohuni që elementët e fokusit të tastierës të jenë të dukshëm në faqen tuaj duke përdorur CSS.",
                        "h3-4": "2. Reduktoni Veprimet që Kërkojnë Shumë Shtypje Tastash",
                        "p-6": "Shumica e mjeteve ndihmëse motorike mbështeten në grupe muskujsh të vegjël dhe specifikë. Për shembull:",
                        "ul-2": "<li>Përdoruesit e shkopit kokor mbështeten në muskujt e qafës për çdo veprim.</li>\n" +
                                "<li>Përdoruesit e shkopit të gojës përdorin lëvizjet e gojës për të zgjedhur tastet në një tastierë virtuale.</li>",
                        "p-7": "Për të reduktuar lodhjen, ofroni mënyra praktike për të naviguar në faqen tuaj me më pak veprime. Për shembull:",
                        "ul-3": "<li>Lejoni kalimin në fund të faqeve ose listave të gjata me një klikim të vetëm.</li>\n" +
                                "<li>Strukturoni menutë e navigimit si pemë me nivele të shumëfishta.</li>",
                        "h3-5": "3. Shtoni Një Fushë Kërkimi në Faqen Tuaj",
                        "p-8": "Disa përdorues me paaftësi motorike mbështeten në sistemet e njohjes së zërit. Ndërsa këto sisteme e thjeshtojnë navigimin, zakonisht është më e lehtë të shkruhet një frazë në një fushë teksti duke përdorur njohjen e zërit sesa të zgjedhësh elemente specifike në faqe me komandat e zërit.",
                        "p-9": "Optimizoni funksionalitetin e kërkimit duke siguruar që faqet tuaja të jenë të indeksuara dhe rezultatet e kërkimit të jenë të renditura në mënyrë të përshtatshme për përdoruesin.",
                        "h5-1": "Ja një video e shkurtër që diskuton praktikat më të mira për ta bërë aplikacionin tuaj më të lehtë për t'u përdorur dhe flet për testimin e aksesueshmërisë për të përmirësuar përvojën e përdoruesve të aplikacionit tuaj."
                    }
                },
                test: [
                    { question: "Cili është parimi kryesor i aksesit në ueb për përdoruesit me aftësi të kufizuara motorike?", options: ["E operueshme", "E përpiktë", "E perceptueshme", "E kuptueshme"], answer: 0 },
                    { question: "Cila nga këto NUK është një mënyrë për t'i bërë faqet e internetit të aksesueshme?", options: ["Mbështetni navigimin efektiv të tastierës", "Zvogëloni veprimet që kërkojnë shumë shtypje të tasteve", "Shtoni një fushë kërkimi në faqen tuaj të internetit", "Përdorni linke të vegjël"], answer: 3 },
                    { question: "Cila teknologji ndihmëse mbështetet në lëvizjet e muskujve të qafës për navigim?", options: ["Çelës me thithje dhe frymë", "Shkop koke", "Levë goje", "çelës tek"], answer: 1 }
                ]
            },
            {
                id: 7,
                title: "Teknologjitë ndihmëse",
                image: "/UOH-AWA/assets/images/assistive-tech.webp",
                description: "Njihuni me teknologjitë e ndryshme ndihmëse të përdorura për aksesin në ueb.",
                estimatedTime: 45,
                prerequisites: [1, 2],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-7.html",
                    "htmlVars": {
                        "h5-1": "Hyrje",
                        "p-1": "Aftësitë motorike të kufizuara mund të jenë rezultat i shumë shkaqeve të ndryshme, duke shkaktuar sfida të ngjashme për përdoruesit kur navigojnë në internet.",
                        "p-2": "Ideja kryesore e aksesit në ueb për personat me aftësi motorike të kufizuara është të bëjmë faqet e internetit <strong> të operueshme </strong>, pasi jo të gjithë mund të përdorin maus, të klikojnë mbi linqet e vogla ose të kontrollojnë lehtësisht veçoritë interaktive. Ky seksion do të fokusohet në atë që mund të bëjmë për të ndërtuar një produkt uebi të aksesueshëm për personat me aftësi motorike të kufizuara.",
                        "h3-1": "Teknologjitë ndihmëse",
                        "p-3": "Ekzistojnë shumë teknologji ndihmëse që mund të përdoren për ta bërë më të lehtë për personat me aftësi motorike të kufizuara të navigojnë në internet. Disa prej tyre përfshijnë:",
                        "ul-1": "<li>Shkop koke</li>\n" +
                            "            <li>Levë goje</li>\n" +
                            "            <li>Çelës me thithje dhe frymë</li>\n" +
                            "            <li>Çelës tek</li>",
                        "p-4": "Megjithatë, këto teknologji ndihmëse nuk janë të mjaftueshme për ta bërë uebin të aksesueshëm për përdoruesit me aftësi të kufizuara. Këtu janë tre mënyra për të përmirësuar aksesueshmërinë::",
                        "h4-1": "1. Mbështetni Navigimin Efektiv me Tastierë",
                        "p-5": "Personat me aftësi motorike të kufizuara shpesh e kanë të pamundur përdorimin e mausit. Duke bërë faqen tuaj të internetit të përdorshme në mënyrë efektive me tastierë, ju krijoni aksesin për përdoruesit e këtyre teknologjive ndihmëse. Në mënyrë specifike, sigurohuni që elementet e fokusit të tastierës të jenë të dukshme në faqen tuaj duke përdorur CSS.",
                        "h4-2": "2. Reduktoni Veprimet që Kërkojnë Shumë Shtypje të Tasteve",
                        "p-6": "Shumica e mjeteve ndihmëse motorike mbështeten në grupe muskujsh të vogla dhe specifike. Për shembull:",
                        "ul-2": "<li>Përdoruesit e shkopit për kokë mbështeten në muskujt e qafës për çdo veprim.</li>\n" +
                            "            <li>Përdoruesit e shkopit për gojë përdorin lëvizjet e gojës për të zgjedhur taste në një tastierë virtuale.</li>",
                        "p-7": "Për të reduktuar lodhjen, ofroni mënyra praktike për të naviguar në faqen tuaj me më pak veprime. Për shembull:",
                        "ul-3": "<li>Lejoni kalimin në fund të faqeve ose listave të gjata me një klikim të vetëm.</li>\n" +
                            "            <li>Strukturojini menutë e navigimit si pemë me shumë nivele.</li>",
                        "h4-3": "3. Shtoni një Fushë Kërkimi në Faqen tuaj të Internetit",
                        "p-8": "Disa përdorues me aftësi motorike të kufizuara mbështeten te sistemet e njohjes së zërit. Ndërsa këto sisteme e thjeshtojnë navigimin, zakonisht është më e lehtë të shkruhet një frazë në një fushë teksti duke përdorur njohjen e zërit sesa të zgjidhen elemente specifike në faqe me komanda zanore.",
                        "p-9": "Optimizoni funksionalitetin e kërkimit duke siguruar që faqet tuaja të jenë të indeksuara dhe rezultatet e kërkimit të jenë të renditura në një mënyrë miqësore për përdoruesin.",
                        "h5-2": "Ja një video e shkurtër që diskuton praktikat më të mira për ta bërë aplikacionin tuaj më të lehtë për t’u përdorur dhe për të folur mbi testimin e qasjeshmërisë për të përmirësuar përvojën e përdoruesit për të gjithë përdoruesit."
                    }
                },
                test: [
                    {
                        question: "Cili është qëllimi kryesor i një lexuesi ekrani?",
                        options: ["Për ta bërë tekstin më të madh", "Për ta kthyer tekstin në fjalë", "Për të ndryshuar kontrastin e ngjyrave"],
                        answer: 1
                    },
                    {
                        question: "Për çfarë përdoret ARIA në zhvillimin e uebit?",
                        options: ["Për stilizimin e elementeve", "Për të ofruar kontekst shtesë për teknologjitë ndihmëse", "Për të shtuar animacione"],
                        answer: 1
                    },
                    {
                        question: "Cili prej këtyre ndihmon përdoruesit vetëm me tastierë të navigojnë një faqe interneti?",
                        options: ["Lidhjet për kalim", "Efektet e kalimit me miun", "Imazhet e sfondit"],
                        answer: 0
                    },
                    {
                        question: "Me çfarë duhet të testojnë zhvilluesit faqet e tyre të internetit?",
                        options: ["Vetëm me shfletues të ndryshëm", "Me lexues ekrani dhe navigimin me tastierë", "Vetëm me pajisje mobile"],
                        answer: 1
                    }
                ]
            },                
            {
                id: 8,
                title: "Dizajni i ngjyrave",
                image: "/UOH-AWA/assets/images/color-design.webp",
                description: "Mësoni rreth mënyrave të ndryshme se si mund të përdorni ngjyrat për ta bërë produktin tuaj të internetit më të aksesueshëm.",
                estimatedTime: 40,
                prerequisites: [3, 4],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-8.html",
                    "htmlVars": {
                        "h3-1": "Hyrje",
                        "p-1": "Ngjyra ka një rol të rëndësishëm në dizajnin e uebit, duke ndikuar në estetikën, përdorshmërinë dhe aksesueshmërinë.",
                        "p-2": "Dizajnimi me mendjen te aksesueshmëria siguron që produkti juaj të jetë i përdorshëm nga një audiencë e larmishme, përfshirë persona me aftësi vizuale të kufizuara ose deficit në perceptimin e ngjyrave.",
                        "p-3": "Ky seksion do të fokusohet në parimet kryesore dhe praktikat më të mira për krijimin e një dizajni ngjyrash të aksesueshëm për produktet e uebit.",
                        "h3-2": "Kontrasti i Ngjyrave",
                        "p-4": "Teksti dhe elementet interaktive duhet të kenë një raport të lartë kontrasti kundrejt sfondit të tyre për të siguruar lexueshmërinë për përdoruesit me shikim të dobët ose daltonik. Disa prej tyre përfshijnë:",
                        "ul-1": "<li>Për tekstin normal, rekomandohet një raport kontrasti të paktën 4.5:1</li>\n" +
                            "<li>Për tekstin e madh (18pt ose më të madh), një raport 3:1 është i pranueshëm</li>",
                        "p-5": "Mjetet si WebAIM Color Contrast Checker mund të ndihmojnë në vlerësimin dhe rregullimin e niveleve të kontrastit.",
                        "h3-3": "Shmangni Varësinë e Plotë nga Ngjyra për të Shprehur Informacion",
                        "p-6": "shfaqja-e-informacionit",
                        "p-7": "Varësia vetëm nga ngjyra mund ta bëjë të vështirë për këta përdorues të kuptojnë përmbajtjen.",
                        "p-8": "Për ta arritur këtë, duhet të përdorni:",
                        "ul-2": "<li>etiketat e tekstit</li>\n" +
                            "<li>modele</li>\n" +
                            "<li>ikona</li>\n" +
                            "<li>forma</li>",
                        "p-9": "Për shembull, një mesazh paralajmërimi i kuq duhet gjithashtu të përfshijë një simbol si një shenjë për të shprehur alarm ose fjalën \"Paralajmërim\" në tekst.",
                        "h3-4": "Përdorni Kombinime Ngjyrash që Janë Aksesueshëm për Përdoruesit Daltonik",
                        "p-10": "Disa kombinime ngjyrash, si të kuqe dhe jeshile ose blu dhe e verdhë, janë problematike për përdoruesit me verbëri ngjyrash.",
                        "p11": "Për të siguruar që produkti juaj i uebit është i aksesueshëm për të gjithë, duhet të:",
                        "ul-3": "<li>Testoni paletat e ngjyrave duke përdorur simulues të daltonizmit për të siguruar që zgjedhjet tuaja të ngjyrave janë të dallueshme për përdoruesit me lloje të ndryshme të deficiteve të perceptimit të ngjyrave.</li>\n" +
                            "<li>Përdorni mjete si Color Oracle ose Coblis (Simuluesi i Verbërisë së Ngjyrave) për t'ju ndihmuar të identifikoni kombinimet problematike.</li>",
                        "h3-5": "Merrni Parasysh Kontekstin e Ngjyrave",
                        "p-12": "Kuptimi dhe efikasiteti i ngjyrës mund të ndryshojnë në varësi të ngjyrave rrethues dhe kontekstit të dizajnit.",
                        "p-13": "Gjithmonë kontrolloni si ndërveprojnë ngjyrat me njëra-tjetrën, duke siguruar që ato të mos shkaktojnë konfuzion vizual ose mbingarkesë.",
                        "p14": "Për shembull, shmangni vendosjen e dy ngjyrave me kontrast të lartë pranë njëra-tjetrës, pasi ato mund të krijojnë pakënaqësi vizuale ose lodhje.",
                        "h3-6": "Ofroni Opsione Personalizimi",
                        "p-15": "Opsionet e personalizimit mund të ofrojnë fleksibilitet për përdoruesit dhe të ndihmojnë për të adresuar një gamë të gjerë nevojash dhe preferencash individuale, të cilat mund të ndryshojnë ndjeshëm mes përdoruesve.",
                        "p-16": "Për të mundësuar që përdoruesit të rregullojnë skemat e ngjyrave mund të bëjë një faqe interneti më të aksesueshme për personat me nevoja ose preferenca të veçanta.",
                        "p-17": "Për të siguruar që produkti juaj i uebit është i aksesueshëm për të gjithë, duhet të:",
                        "ul-4": "<li>Implementoni tema të personalizueshme</li>\n" +
                            "<li>Përfshini mundësi me kontrast të lartë ose modalitet të errët</li>\n" +
                            "<li>Ofroni udhëzime të qarta se si përdoruesit mund të kalojnë mes këtyre mundësive</li>\n" +
                            "<li>Siguroni që këto mundësi të mos ndërhyjnë me lexueshmërinë e përmbajtjes ose funksionalitetin</li>",
                        "h3-7": "Praktikat më të Mira",
                        "p-18": "Ja një video e shkurtër që diskuton praktikat më të mira për ta bërë aplikacionin tuaj më të lehtë për t'u përdorur dhe shpjegon si testimi për aksesueshmërinë mund të përmirësojë përvojën e përdoruesit për të gjithë përdoruesit."
                    }
                },
                test: [
                    {
                        "question": "Përse është e rëndësishme të ofrohen opsione personalizimi për përdoruesit e uebit?",
                        "options": ["Për ta bërë dizajnin më tërheqës vizualisht për përdoruesin", "Për të adresuar një gamë të gjerë nevojash individuale, siç janë paaftësitë vizuale dhe paaftësitë e perceptimit", "Për të rritur shpejtësinë e ngarkimit të faqes së internetit", "Për të reduktuar madhësinë e faqes dhe ta bëjë atë më efikase"],
                        "answer": 1
                    },
                    {
                        "question": "Cili nga të mëposhtmet është një përfitim i opsioneve të personalizimit për përdoruesit me shikim të dobët?",
                        "options": ["Ata mund të ndryshojnë dizajnin e faqes së internetit në një dizajn më kompleks", "Ata mund të përshpejtojnë kohën e ngarkimit të faqeve", "Ata mund të rregullojnë madhësinë e tekstit, kontrastin dhe ngjyrën e sfondit për lexueshmëri më të mirë", "Ata mund të ndryshojnë estetiken e përgjithshme të faqes për t'i përshtatur me trendet aktuale"],
                        "answer": 2
                    },
                    {
                        "question": "Cila është një parim kyç i dizajnit të aksesueshëm të uebit në lidhje me ngjyrat?",
                        "options": ["Ngjyra duhet të përdoret për të bërë dizajnin vizualisht kompleks", "Zgjedhjet e ngjyrave duhet të mbështeten vetëm në preferenca estetike", "Kombinimet e ngjyrave duhet të zgjidhen për t'u dalluar nga përdoruesit me verbëri ngjyrash", "Të gjitha elementet e dizajnit duhet të jenë të njëjtat ngjyrë për të shmangur konfuzionin"],
                        "answer": 2
                    }
                    
                ]
            },
            {
                id: 9,
                title: "Aspektet Ligjore të Aksesueshmërisë",
                image: "/UOH-AWA/assets/images/accessibility-law.webp",
                description: "Learn about the legal component of accessibility with particular focus on the United Nations'" +
                    "Convention on the Rights of Persons with Disabilities (2008) and the UK's Equality Act (2010)",
                estimatedTime: 60,
                prerequisites: [1],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-9.html",
                    "htmlVars":{
                       "h5-1": "Hyrje",
                        "p-1": "Ka një argument të qartë etik për të bërë përmbajtjen dixhitale të aksesueshme për të gjithë, pavarësisht aftësive.\n" +
                            "Dizajni i teknologjive dixhitale për të gjithë përmendet madje në disa Kodi Profesionalet të Përdorimit. Megjithatë,\n" +
                            "etika\n" +
                            "dhe ligji nuk shkojnë gjithmonë bashkë. Ky seksion do të fokusohet në ligjshmërinë që lidhet me aksesueshmërinë dixhitale.",
                        "h5-2": "Kongresa për të Drejtat e Personave me Aftësi të Kufizuara (CRPD)",
                        "p-2": "CRPD është një traktat ndërkombëtar që u miratua nga Asambleja e Përgjithshme e Kombeve të Bashkuara në vitin 2006. Qëllimi i\n" +
                            "konventës është:",
                        "blq-1": "Të promovojë, mbrojë dhe sigurojë shijimin e plotë dhe të barabartë të të gjitha të drejtave të njeriut dhe lirisë themelore nga të gjithë personat me aftësi të kufizuara, dhe të promovojë respektin për dinjitetin e tyre të natyrshëm.",
                        "p-3": "Traktati ka disa parime kryesore:",
                        "ul-1": "<li>Respektimi i dinjitetit të natyrshëm, autonomisë individuale përfshirë lirinë për të bërë zgjedhje dhe pavarësinë e personave</li>\n" +
                            "<li>Pabesi</li>\n" +
                            "<li>Pjesëmarrja dhe përfshirja e plotë dhe efektive në shoqëri</li>\n" +
                            "<li>Respektimi i ndryshimit dhe pranimi i personave me aftësi të kufizuara si pjesë e diversitetit dhe njerëzimit</li>\n" +
                            "<li>Barazia e mundësive</li>\n" +
                            "<li><b>Aksesueshmëria</b></li>\n" +
                            "<li>Barazia mes burrave dhe grave</li>\n" +
                            "<li>Respektimi i aftësive në zhvillim të fëmijëve me aftësi të kufizuara dhe respektimi i të drejtës së fëmijëve me aftësi të kufizuara për të ruajtur identitetet e tyre</li>",
                        "p-4": "Ja një video e shkurtër që përmbledh CRPD:"
                    }
                },
                test: [
                    {
                        question: "Cili është qëllimi kryesor i Kongresit për të Drejtat e Personave me Aftësi të Kufizuara (CRPD)?",
                        options: ["Për të ofruar ndihmë financiare", "Për të siguruar të drejta dhe liri të barabarta për personat me aftësi të kufizuara", "Për të vendosur standarde mjekësore"],
                        answer: 1
                    },
                    {
                        question: "Cili nga këto është një nga parimet kryesore të CRPD?",
                        options: ["Rritja ekonomike", "Aksesueshmëria", "Mbrojtja e mjedisit"],
                        answer: 1
                    },
                    {
                        question: "Kur u miratua CRPD nga Asambleja e Përgjithshme e Kombeve të Bashkuara?",
                        options: ["2004", "2006", "2008"],
                        answer: 1
                    }
                ]
            },
            {
                id: 10,
                title: "Udhëzimet për Aksesueshmërinë e Përmbajtjes së Uebit (WCAG)",
                image: "/UOH-AWA/assets/images/guidelines.webp",
                description: "Mësoni rreth udhëzimeve për aksesueshmërinë e përmbajtjes së uebit që zhvilluesit duhet t’i ndjekin",
                estimatedTime: 45,
                prerequisites: [9],
                learningMaterials: {
                    "filePath": "/UOH-AWA/components/learning-materials/topic-10.html",
                    "htmlVars": {
                        "h3-1": "Hyrje në Udhëzimet e Aksesueshmërisë së Përmbajtjes së Uebit (WCAG)",
                        "p-1": "Udhëzimet e Aksesueshmërisë së Përmbajtjes së Uebit (WCAG) ofrojnë një standard global për ta bërë përmbajtjen e uebit më të aksesueshme për të gjithë, duke përfshirë edhe personat me paaftësi. Të zhvilluara nga Konsorciumi Botëror i Uebit (W3C), WCAG synon të sigurojë që faqet dhe platformat dixhitale të jenë të përdorshme dhe gjithëpërfshirëse. Kjo seksion do të eksplorojë parimet kryesore të WCAG dhe rëndësinë e tyre për dizajnin e aksesueshëm të uebit.",
                        "h3-2": "Katër Parimet e WCAG",
                        "p-2": "WCAG bazohet në katër parime thelbësore, shpesh të referuara me akronimin <b>POUR</b>:",
                        "ul-1": "<li><b>Perceptueshmëri</b>: Informacioni dhe komponentët e ndërfaqes së përdoruesit duhet të paraqiten në mënyra që përdoruesit t'i perceptojnë. Për shembull, duke ofruar alternativa teksti për imazhet dhe titra për videot.</li>" +
                                "<li><b>Operueshmëri</b>: Komponentët e ndërfaqes së përdoruesit dhe navigimi duhet të jenë të operueshëm. Për shembull, sigurimi që të gjitha funksionalitetet të jenë të aksesueshme përmes tastierës dhe që përdoruesit të kenë kohë të mjaftueshme për të përfunduar detyrat.</li>" +
                                "<li><b>Kuptueshmëri</b>: Informacioni dhe funksionimi i ndërfaqes së përdoruesit duhet të jenë të kuptueshme. Kjo përfshin udhëzime të qarta dhe shmangien e strukturave apo ndërveprimeve tepër komplekse.</li>" +
                                "<li><b>Qëndrueshmëri</b>: Përmbajtja duhet të jetë e qëndrueshme për t'u interpretuar në mënyrë të besueshme nga teknologjitë ndihmëse. Për shembull, sigurimi i përputhshmërisë me lexuesit e ekranit dhe mjetet e tjera.</li>",
                        "h3-3": "Kriteret e Suksesit të WCAG",
                        "p-3": "WCAG ofron kritere të suksesshme të testueshme për të përmbushur standardet e aksesueshmërisë. Këto janë të organizuara në tre nivele pajtueshmërie:",
                        "ul-2": "<li><b>A</b>: Niveli minimal i pajtueshmërisë, duke trajtuar pengesat më kritike për akses.</li>" +
                                "<li><b>AA</b>: Niveli ndërmjetës, duke u përqendruar në përmirësime më të gjera për një gamë të larmishme përdoruesish.</li>" +
                                "<li><b>AAA</b>: Niveli më i lartë, duke përmirësuar aksesueshmërinë në masën më të madhe të mundshme, megjithëse mund të mos jetë i realizueshëm për të gjitha faqet e internetit.</li>",
                        "h3-4": "Pse është e Rëndësishme WCAG?",
                        "p-4": "Zbatimi i WCAG siguron që përmbajtja dixhitale të jetë e aksesueshme për një audiencë më të gjerë, duke promovuar gjithëpërfshirjen dhe përputhshmërinë ligjore. Shumë qeveri dhe organizata në mbarë botën kanë adoptuar WCAG si pikë referimi për standardet e aksesueshmërisë. Zbatimi i WCAG mund të ndihmojë bizneset të shmangin paditë dhe të tregojnë një angazhim për përgjegjësinë sociale.",
                        "h3-5": "Si të Zbatojmë WCAG?",
                        "p-5": "Këtu janë disa hapa praktikë për të përshtatur përmbajtjen tuaj dixhitale me WCAG:",
                        "ul-3": "<li><b>Siguro Alternativa</b>: Përfshi tekst alt për imazhet, transkripta për audion dhe titra për videot.</li>" +
                                "<li><b>Siguro Aksesueshmëri përmes Tastierës</b>: E gjithë funksionaliteti duhet të jetë i operueshëm përmes tastierës.</li>" +
                                "<li><b>Ruaj Kontrastin e Lartë</b>: Përdor kontrast të mjaftueshëm të ngjyrave për t'i bërë tekstet dhe elementët interaktivë lehtësisht të dallueshëm.</li>" +
                                "<li><b>Strukturo Përmbajtjen në Mënyrë të Duhur</b>: Përdor HTML semantik dhe siguro një rend logjik të leximit.</li>" +
                                "<li><b>Testo me Përdoruesit</b>: Kryej testime përdorshmërie me persona me paaftësi për të identifikuar pengesa të mundshme.</li>",
                        "h3-6": "Burime Shtesë",
                        "p-6": "Për informacion më të detajuar, vizitoni udhëzimet zyrtare të WCAG në <a href='https://www.w3.org/WAI/standards-guidelines/wcag/' class='in-text-a'>faqen e internetit të W3C</a>."
                        }
                    },
                    "test": [
                        {
                            "question": "Cili është qëllimi i WCAG?",
                            "options": ["Për të vendosur tendencat globale të dizajnit të uebit", "Për të ofruar udhëzime për aksesueshmërinë e uebit", "Për të zbatuar penalitete ligjore për faqet e paaksesueshme"],
                            "answer": 1
                        },
                        {
                            "question": "Çfarë përfaqëson akronimi POUR në WCAG?",
                            "options": ["Perceptueshmëri, Operueshmëri, Kuptueshmëri, Qëndrueshmëri", "Parashikueshmëri, Organizim, Përdorshmëri, Besueshmëri", "Praktik, I Hapur, Unik, I Përgjegjshëm"],
                            "answer": 0
                        },
                        {
                            "question": "Në cilin nivel pajtueshmërie të WCAG kërkohet kontrast i mjaftueshëm ngjyrash?",
                            "options": ["A", "AA", "AAA"],
                            "answer": 1
                        },
                        {
                            "question": "Cili është një shembull për ta bërë përmbajtjen perceptueshme sipas udhëzimeve të WCAG?",
                            "options": ["Sigurimi që e gjithë funksionaliteti të jetë i aksesueshëm përmes tastierës", "Testimi me përdorues që kanë paaftësi", "Sigurimi i tekstit alt për imazhet"],
                            "answer": 2
                        }
                    ]
                }
            // Add more topics here...
        ],
    },
    "metadata": {"tagId": "al-AL", "flag": "fi fi-al", "displayName":"AL"}
}