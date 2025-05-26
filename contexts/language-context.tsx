"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  "Use Cases": "Anwendungsfälle",
  Pricing: "Preise",
  Contact: "Kontakt",
  EN: "DE",
  "Sign Up": "Registrieren",
  Login: "Anmelden",
  "Discover what matters": "Entdecken, was wirklich zählt",
  "Skip the manual review. Get immediate conversation insights that drive smarter, faster decisions.":
    "Sparen Sie sich die manuelle Prüfung. Erhalten Sie sofortige Gesprächseinblicke für intelligentere und schnellere Entscheidungen.",
  "Go To App": "Zur App",
  "Request a Demo": "Demo anfordern",
  "Time Efficiency": "Zeiteffizienz",
  "98% Time Savings": "98 % Zeitersparnis",
  "Eliminate manual transcription and analysis. What used to take weeks now takes minutes.":
    "Eliminieren Sie manuelle Transkription und Analyse. Was früher Wochen dauerte, erledigen Sie jetzt in Minuten.",
  "8x faster insights": "8x schnellere Einblicke",
  "Cost Efficiency": "Kosteneffizienz",
  "Reduce Costs by 97%": "Kosten um 97 % senken",
  "Lower your research costs dramatically by automating expensive manual processes.":
    "Senken Sie Ihre Forschungskosten drastisch durch die Automatisierung teurer manueller Prozesse.",
  "Higher ROI on research": "Höherer ROI Ihrer Forschung",
  "Strategic Value": "Strategischer Mehrwert",
  "Make Better Decisions": "Bessere Entscheidungen treffen",
  "Uncover hidden patterns and insights across multiple interviews. Discover demographic trends that transform your research into actionable strategy.":
    "Entdecken Sie verborgene Muster in Interviews und demografische Trends, die Ihre Forschung in umsetzbare Strategien verwandeln.",
  "Data-driven strategy": "Datengestützte Strategie",
  "Industry leading powerful AI-Driven features": "Branchenführende, leistungsstarke KI-Funktionen",
  "Perfect Transcription": "Präzise Transkription",
  "Convert audio & video to text with very high accuracy in any language, saving time and ensuring precise data capture.":
    "Wandeln Sie Audio & Video mit höchster Genauigkeit in jeder Sprache in Text um – das spart Zeit und sichert präzise Daten.",
  T: "T",
  "00:03 - 00:10 | Thomas": "00:03 - 00:10 | Thomas",
  "Mehr müssen wir gar nicht machen. Magst du was trinken?|":
    "Mehr müssen wir gar nicht machen. Magst du was trinken?|",
  S: "S",
  "00:11 - 00:15 | Sarah": "00:11 - 00:15 | Sarah",
  "Ja, gerne. Vielleicht ein Wasser?|": "Ja, gerne. Vielleicht ein Wasser?|",
  "00:16 - 00:22 | Thomas": "00:16 - 00:22 | Thomas",
  "Wir haben auch Saft oder Kaffee, wenn du möchtest.|": "Wir haben auch Saft oder Kaffee, wenn du möchtest.|",
  "Experience Real-Time Transcription": "Echtzeit-Transkription erleben",
  "Press play to hear the audio and watch as our AI transcribes it with perfect accuracy, even with a challenging audio":
    "Drücken Sie Play, um die Audiodatei anzuhören und zu beobachten, wie unsere KI sie auch bei schwierigen Aufnahmen präzise transkribiert.",
  "0:00": "0:00",
  "Speaker Identification": "Sprechererkennung",
  "Accurately distinguish between different speakers in conversations for targeted insights, even in big focus groups.":
    "Unterscheiden Sie präzise zwischen verschiedenen Sprechern in Gesprächen für gezielte Einblicke – selbst in großen Fokusgruppen.",
  "👩": "👩",
  Sarah: "Sarah",
  "Marketing Manager": "Marketingmanagerin",
  "Focus Group: Cosmetic Products and Sustainability": "Fokusgruppe: Kosmetikprodukte und Nachhaltigkeit",
  "Age: 35": "Alter: 35",
  Female: "Weiblich",
  "Married, 1 kid": "Verheiratet, 1 Kind",
  "Values high-quality packaging for premium products and observes trends in the cosmetics industry.":
    "Legt Wert auf hochwertige Verpackungen für Premiumprodukte und beobachtet Trends in der Kosmetikindustrie.",
  "👨": "👨",
  Thomas: "Thomas",
  "Environmental Engineer": "Umweltingenieur",
  "Age: 28": "Alter: 28",
  Male: "Männlich",
  Single: "Ledig",
  "Emphasizes the importance of sustainability and environmentally friendly packaging in the cosmetics industry.":
    "Betont die Bedeutung von Nachhaltigkeit und umweltfreundlichen Verpackungen in der Kosmetikindustrie.",
  "In-depth Analysis": "Tiefenanalyse",
  "Dive deep into specific topics with comprehensive analysis and structured insights from your research data.":
    "Tauchen Sie mit umfassenden Analysen und strukturierten Erkenntnissen aus Ihren Forschungsdaten tief in spezifische Themen ein.",
  "Deep Analysis": "Tiefenanalyse",
  "Product Selection": "Produktauswahl",
  "Packaging and Functionality": "Verpackung und Funktionalität",
  Sustainability: "Nachhaltigkeit",
  "For luxury cosmetics, there's a balance between aesthetics and functionality in packaging. While high-quality packaging is expected for expensive products, functionality often takes precedence.":
    "Bei Luxuskosmetik besteht ein Gleichgewicht zwischen Ästhetik und Funktionalität der Verpackung. Obwohl bei teuren Produkten eine hochwertige Verpackung erwartet wird, hat die Funktionalität oft Vorrang.",
  "Packaging Preferences": "Verpackungspräferenzen",
  Aspect: "Aspekt",
  Importance: "Wichtigkeit",
  Functionality: "Funktionalität",
  High: "Hoch",
  Aesthetics: "Ästhetik",
  Medium: "Mittel",
  Material: "Material",
  Increasing: "Zunehmend",
  '"With a high-quality product, the packaging is very important to me. If I’m buying something expensive, I also want beautiful and premium packaging."':
    '"Bei einem hochwertigen Produkt, ist mir die Verpackung sehr wichtig. Wenn ich ein teures Produkt kaufe, will ich auch eine schöne und hochwertige Verpackung."',
  T6: "T6",
  "Concept Analysis": "Konzeptanalyse",
  "Easier compare participant perspectives on key concepts across demographics to identify patterns and preferences.":
    "Vergleichen Sie mühelos Teilnehmerperspektiven zu Schlüsselkonzepten über verschiedene Demografien hinweg, um Muster und Präferenzen zu erkennen.",
  "Negative Opinion": "Negative Meinung",
  "Positive Opinion": "Positive Meinung",
  Concept: "Konzept",
  "Sarah\n35, Female": "Sarah\n35, weiblich",
  "Thomas\n28, Male": "Thomas\n28, männlich",
  Ingredients: "Inhaltsstoffe",
  "No animal testing": "Ohne Tierversuche",
  "Product dependent": "Produktabhängig",
  Packaging: "Verpackung",
  "High-quality for expensive products": "Hochwertig bei teuren Produkten",
  "Less plastic is better": "Weniger Plastik ist besser",
  "Trend towards more sustainability": "Trend zu mehr Nachhaltigkeit",
  "Good for conscience": "Gut für das Gewissen",
  "Price-Performance": "Preis-Leistung",
  "Willing to pay more for quality": "Bereitschaft, mehr für Qualität zu zahlen",
  "Important purchase criterion": "Wichtiges Kaufkriterium",
  Effectiveness: "Wirksamkeit",
  "Expected in premium products": "Erwartet bei Premiumprodukten",
  "Depends on product type": "Abhängig vom Produkttyp",
  "Multi-Interview Analysis": "Multi-Interview-Analyse",
  "Analyze multiple interviews simultaneously to identify broader patterns and insights across different sessions and participant groups.":
    "Analysieren Sie mehrere Interviews gleichzeitig, um übergreifende Muster und Erkenntnisse aus verschiedenen Sitzungen und Teilnehmergruppen zu gewinnen.",
  "Unified\nAnalysis": "Einheitliche\nAnalyse",
  "22 participants": "22 Teilnehmende",
  "Focus Group 1": "Fokusgruppe 1",
  "5 participants": "5 Teilnehmende",
  "Focus Group 2": "Fokusgruppe 2",
  "6 participants": "6 Teilnehmende",
  "Expert Interviews": "Experteninterviews",
  "3 participants": "3 Teilnehmende",
  "User Testing": "Nutzer-Tests",
  "8 participants": "8 Teilnehmende",
  "Custom Analysis": "Individuelle Analyse",
  "Define your own research questions and get the most accurate AI-powered insights tailored to your specific needs and interests.":
    "Definieren Sie Ihre eigenen Forschungsfragen und erhalten Sie präzise, KI-gestützte Einblicke, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.",
  "Analysis Settings": "Analyse-Einstellungen",
  "What would you like to deep dive into?": "In welches Thema möchten Sie tiefer eintauchen?",
  "Comparison of consumer perceptions of sustainability in premium vs. regular cosmetics":
    "Vergleich der Konsumentenwahrnehmung von Nachhaltigkeit bei Premium- vs. Standardkosmetik",
  "Suggested Topics": "Themenvorschläge",
  "Examination of perceived barriers to adopting more sustainable cosmetic products":
    "Untersuchung wahrgenommener Barrieren bei der Akzeptanz nachhaltigerer Kosmetikprodukte",
  "Multi-dimensional analysis of the interplay between product efficacy, sustainability, packaging aesthetics, and price in consumer decision-making for luxury cosmetics":
    "Multidimensionale Analyse des Zusammenspiels von Produktwirksamkeit, Nachhaltigkeit, Verpackungsästhetik und Preis bei Kaufentscheidungen für Luxuskosmetik",
  "Analysis Type": "Analysetyp",
  Concise: "Kompakt",
  Comprehensive: "Umfassend",
  Analyze: "Analysieren",
  "Analyzing...": "Analysiere...",
  "Start your journey today": "Starten Sie noch heute",
  "Ready to Transform Your Research?": "Bereit, Ihre Forschung zu transformieren?",
  "Join the AI revolution and unlock unprecedented insights that drive smarter, faster decisions.":
    "Werden Sie Teil der KI-Revolution und gewinnen Sie einzigartige Einblicke für intelligentere und schnellere Entscheidungen.",
  "Request a Demo\n→": "Demo anfordern\n→",
  "Contact Us": "Kontakt",
  "+49 17758440003": "+49 17758440003",
  "info@semanticmap.com": "info@semanticmap.com",
  "North Rhine-Westphalia,\nGermany": "Nordrhein-Westfalen,\nDeutschland",
  "Quick Links": "Quick Links",
  Legal: "Rechtliches",
  "Data Privacy Policy": "Datenschutzerklärung",
  "Terms of Service": "Nutzungsbedingungen",
  Imprint: "Impressum",
  "© 2025 Semantic Map Inc. All rights reserved.": "© 2025 Semantic Map Inc. Alle Rechte vorbehalten.",
  "Analysis Results": "Analyseergebnisse",
  "Analysis results for: Comparison of consumer perceptions of sustainability in premium vs. regular cosmetics":
    "Analyseergebnisse für: Vergleich der Konsumentenwahrnehmung von Nachhaltigkeit bei Premium- vs. Standardkosmetik",
  "Here's a concise analysis comparing consumer perceptions of sustainability in premium vs. regular cosmetics:":
    "Hier ist eine kompakte Analyse zum Vergleich der Konsumentenwahrnehmung von Nachhaltigkeit bei Premium- vs. Standardkosmetik:",
  "Limited awareness of sustainability in premium cosmetics:":
    "Geringes Bewusstsein für Nachhaltigkeit bei Premiumkosmetik:",
  "Participants generally didn't perceive premium cosmetics as more sustainable than regular ones.":
    "Teilnehmende nahmen Premiumkosmetik im Allgemeinen nicht als nachhaltiger wahr als Standardkosmetik.",
  "There was little mention of sustainability initiatives by premium brands.":
    "Nachhaltigkeitsinitiativen von Premiummarken wurden kaum erwähnt.",
  "Packaging expectations:": "Verpackungserwartungen:",
  "Premium cosmetics were associated with more luxurious, often less sustainable packaging (e.g., heavy glass containers).":
    "Premiumkosmetik wurde mit luxuriöseren, oft weniger nachhaltigen Verpackungen (z. B. schweren Glasbehältern) assoziiert.",
  "Participants noted a slight trend towards reducing excess packaging in premium products, but didn't see it as a major focus.":
    "Teilnehmende bemerkten einen leichten Trend zur Reduzierung von Überverpackungen bei Premiumprodukten, sahen dies jedoch nicht als Hauptaugenmerk.",
  "Key Factors in Product Selection:": "Schlüsselfaktoren bei der Produktauswahl:",
  "The following table summarizes the key factors that influence consumer decisions when choosing between premium and regular cosmetic products:":
    "Die folgende Tabelle fasst die Schlüsselfaktoren zusammen, die Kaufentscheidungen von Konsumenten bei der Wahl zwischen Premium- und Standardkosmetik beeinflussen:",
  Factor: "Faktor",
  "Consumer Preference": "Kundenpräferenz",
  "Natural, vegan, no animal testing": "Natürlich, vegan, ohne Tierversuche",
  "Value for money": "Preis-Leistungs-Verhältnis",
  "Brand Reputation": "Markenreputation",
  "Trusted brands preferred": "Bevorzugung vertrauenswürdiger Marken",
  "Environmental Impact": "Umweltauswirkungen",
  "Sustainable products gaining popularity": "Nachhaltige Produkte gewinnen an Beliebtheit",
  "Functional, attractive for premium products": "Funktional und attraktiv bei Premiumprodukten",
  "Low to Medium": "Niedrig bis Mittel",
  "Key Insight": "Kernaussage",
  "There's a significant opportunity for premium brands to differentiate by emphasizing sustainability, as consumers currently don't associate premium pricing with more sustainable practices.":
    "Für Premiummarken besteht eine große Chance, sich durch die Betonung von Nachhaltigkeit zu differenzieren, da Konsumenten derzeit Premiumpreise nicht mit nachhaltigeren Praktiken verbinden.",
  "From Raw Conversations to Actionable Strategy": "Von Rohdaten zu handlungsorientierter Strategie",
  "Skip the manual review. Get immediate conversation insights from your interviews that drive smarter, faster decisions.":
    "Sparen Sie sich die manuelle Prüfung. Erhalten Sie sofortige Gesprächseinblicke aus Ihren Interviews für intelligentere und schnellere Entscheidungen.",
  "Market Research & Consumer Insights": "Marktforschung & Consumer Insights",
  "Understanding true customer needs, perceptions, and market trends from hours of focus group discussions or in-depth interviews is slow and requires significant manual effort. Identifying subtle patterns across demographics is difficult.":
    "Echte Kundenbedürfnisse, Wahrnehmungen und Markttrends aus stundenlangen Fokusgruppen oder Tiefeninterviews zu verstehen, ist langsam und erfordert erheblichen manuellen Aufwand. Subtile Muster über Demografien hinweg zu erkennen, ist schwierig.",
  "Click to collapse": "Einklappen",
  "User Experience (UX) & Product Feedback": "User Experience (UX) & Produktfeedback",
  "Manually reviewing usability test recordings, user interviews, or feedback sessions to identify pain points, feature requests, and usability issues is tedious and prone to missing crucial details.":
    "Die manuelle Auswertung von Usability-Tests, Nutzerinterviews oder Feedbackgesprächen zur Identifizierung von Schwachstellen, Feature-Wünschen und Usability-Problemen ist mühsam und wichtige Details können leicht übersehen werden.",
  "Click to explore": "Mehr erfahren",
  "Product Development & Innovation": "Produktentwicklung & Innovation",
  "Evaluating consumer reactions to new concepts, packaging designs, or feature ideas requires careful analysis of nuanced feedback, often across multiple rounds of research.":
    "Die Bewertung von Kundenreaktionen auf neue Konzepte, Verpackungsdesigns oder Produktideen erfordert eine sorgfältige Analyse differenzierten Feedbacks, oft über mehrere Forschungsrunden hinweg.",
  "Brand Perception & Competitive Analysis": "Markenwahrnehmung & Wettbewerbsanalyse",
  "Understanding how your brand is perceived compared to competitors, tracking shifts in brand sentiment, and identifying key brand associations from qualitative discussions requires meticulous coding and analysis.":
    "Zu verstehen, wie Ihre Marke im Vergleich zu Wettbewerbern wahrgenommen wird, Stimmungsveränderungen zu verfolgen und wichtige Markenassoziationen aus qualitativen Diskussionen zu identifizieren, erfordert sorgfältige Kodierung und Analyse.",
  "Academic Research & Qualitative Studies": "Wissenschaftliche Forschung & Qualitative Studien",
  "Academic researchers often work with extensive qualitative datasets from interviews, ethnographic studies, focus groups, or archival texts. The manual process of transcribing, coding, and identifying themes is incredibly time-consuming and can be a bottleneck in research timelines (dissertations, publications, grant reporting). Ensuring analytical rigor and systematically exploring complex phenomena across large datasets presents a significant challenge.":
    "Wissenschaftler arbeiten oft mit umfangreichen qualitativen Datensätzen aus Interviews, ethnographischen Studien, Fokusgruppen oder Archivtexten. Das manuelle Transkribieren, Kodieren und Identifizieren von Themen ist extrem zeitaufwendig und kann Forschungszeitpläne (Dissertationen, Publikationen, Berichte) blockieren. Analytische Sorgfalt und die systematische Untersuchung komplexer Phänomene in großen Datensätzen stellen eine große Herausforderung dar.",
  "Sales Call Analysis & Customer Success Insights": "Vertriebsgesprächsanalyse & Customer Success Insights",
  "Sales teams and customer success managers have countless conversations with prospects and customers. Manually reviewing call recordings to identify successful strategies, understand customer objections, monitor rep performance, pinpoint churn risks, or extract key insights for product improvement is impractical at scale. Valuable information often remains locked within individual calls.":
    "Vertriebs- und Customer-Success-Teams führen unzählige Gespräche mit Interessenten und Kunden. Die manuelle Auswertung von Gesprächsaufzeichnungen zur Identifizierung erfolgreicher Strategien, dem Verständnis von Kundeneinwänden, der Leistungsüberwachung, der Erkennung von Abwanderungsrisiken oder der Gewinnung von Produktverbesserungsideen ist in großem Umfang unpraktikabel. Wertvolle Informationen bleiben oft ungenutzt.",
  "The Challenge": "Die Herausforderung",
  "Our Solution": "Unsere Lösung",
  "Automatically transcribe and analyze large volumes of discussion data. Use Deep Analysis to pinpoint key themes, sentiment towards brands/products, and unmet needs. Leverage Concept Analysis to compare perspectives across different consumer segments. Utilize Speaker Identification to track individual contributions accurately, even in large groups.":
    "Transkribieren und analysieren Sie automatisch große Mengen an Gesprächsdaten. Nutzen Sie Tiefenanalyse, um Schlüsselthemen, die Stimmung gegenüber Marken/Produkten und unerfüllte Bedürfnisse zu identifizieren. Vergleichen Sie mit Konzeptanalyse Perspektiven verschiedener Kundensegmente. Verwenden Sie Sprechererkennung, um individuelle Beiträge präzise zu verfolgen, selbst in großen Gruppen.",
  "Key Benefits": "Ihre Vorteile",
  "Drastically reduce analysis time by 98%": "Analysezeit drastisch um 98 % reduzieren.",
  "Gain deeper, unbiased understanding of consumer motivations":
    "Tieferes, unvoreingenommenes Verständnis der Kundenmotivationen gewinnen.",
  "Identify emerging trends faster": "Aufkommende Trends schneller erkennen.",
  "Validate hypotheses with qualitative data": "Hypothesen mit qualitativen Daten validieren.",
  "Make data-driven marketing and strategy decisions": "Datengestützte Marketing- und Strategieentscheidungen treffen.",
  "Key Features": "Top-Funktionen",
  "Core AI Features": "KI-Kernfunktionen",
  "Our powerful AI features work seamlessly across all use cases, providing consistent value regardless of your specific research needs.":
    "Unsere leistungsstarken KI-Funktionen arbeiten nahtlos über alle Anwendungsfälle hinweg und bieten konsistenten Mehrwert, unabhängig von Ihren spezifischen Forschungsanforderungen.",
  "Compare insights across multiple studies, sessions, or participant groups to identify broader patterns and trends that might be missed when analyzing interviews in isolation.":
    "Vergleichen Sie Erkenntnisse aus verschiedenen Studien, Sitzungen oder Teilnehmergruppen, um übergreifende Muster und Trends zu erkennen, die bei isolierter Analyse von Interviews möglicherweise übersehen werden.",
  "Ask specific research questions and get AI-powered insights tailored to your unique needs. Explore specific themes, test hypotheses, or investigate emerging patterns with precision.":
    "Stellen Sie spezifische Forschungsfragen und erhalten Sie KI-gestützte Einblicke, die auf Ihre individuellen Bedürfnisse zugeschnitten sind. Untersuchen Sie präzise bestimmte Themen, testen Sie Hypothesen oder erforschen Sie neue Muster.",
  "Our AI delivers highly accurate transcriptions in any language, even with challenging audio, ensuring your analysis is built on a solid foundation of reliable data.":
    "Unsere KI liefert hochpräzise Transkriptionen in jeder Sprache, selbst bei schwierigen Audioaufnahmen, und stellt sicher, dass Ihre Analyse auf einer soliden Basis zuverlässiger Daten aufbaut.",
  "Analyze feedback from concept testing sessions or co-creation workshops. Use Deep Analysis to explore reactions to specific elements. Compare reactions between different concepts or prototypes using Multi-Interview Analysis. Use Custom Analysis to ask specific questions about adoption barriers or perceived value.":
    "Analysieren Sie Feedback aus Konzepttests oder Co-Creation-Workshops. Nutzen Sie Tiefenanalyse, um Reaktionen auf spezifische Elemente zu untersuchen. Vergleichen Sie Reaktionen zwischen verschiedenen Konzepten oder Prototypen mit der Multi-Interview-Analyse. Stellen Sie mit der individuellen Analyse spezifische Fragen zu Akzeptanzhürden oder dem wahrgenommenen Wert.",
  "Accelerate the innovation cycle": "Innovationszyklen beschleunigen.",
  "Understand the 'why' behind preferences": "Das „Warum“ hinter Präferenzen verstehen.",
  "Optimize product features, messaging, and packaging based on detailed feedback":
    "Produktmerkmale, Botschaften und Verpackungen basierend auf detailliertem Feedback optimieren.",
  "Identify key differentiators and value propositions early on":
    "Wichtige Unterscheidungsmerkmale und Wertversprechen frühzeitig erkennen.",
  "Make better decisions with comprehensive insights": "Bessere Entscheidungen mit umfassenden Einblicken treffen.",
  "Significantly reduce the time spent on transcription and initial thematic analysis":
    "Zeitaufwand für Transkription und initiale thematische Analyse erheblich reduzieren.",
  "Enhance the rigor and transparency of qualitative analysis through systematic AI-driven insights":
    "Genauigkeit und Transparenz der qualitativen Analyse durch systematische KI-Einblicke verbessern.",
  "Facilitate the management and exploration of large, complex datasets":
    "Verwaltung und Untersuchung großer, komplexer Datensätze erleichtern.",
  "Uncover nuanced findings and complex interrelationships within the data more efficiently":
    "Differenzierte Ergebnisse und komplexe Zusammenhänge in den Daten effizienter aufdecken.",
  "Accelerate progress towards publications, thesis completion, and grant milestones":
    "Fortschritte bei Publikationen, Abschlussarbeiten und Förderprojekten beschleunigen.",
  "Get Perfect Transcriptions of user sessions. Automatically identify mentions of specific features, usability problems, or moments of delight/frustration using Deep Analysis. Use Speaker Identification to separate facilitator questions from user responses. Analyze sentiment towards specific product aspects.":
    "Erhalten Sie präzise Transkriptionen von Nutzersitzungen. Identifizieren Sie automatisch Erwähnungen spezifischer Funktionen, Usability-Probleme oder positive/negative Momente mittels Tiefenanalyse. Trennen Sie mit Sprechererkennung Moderatorenfragen von Nutzerantworten. Analysieren Sie die Stimmung zu spezifischen Produktaspekten.",
  "Quickly pinpoint critical usability issues": "Kritische Usability-Probleme schnell identifizieren.",
  "Understand user journeys and friction points more effectively":
    "User Journeys und Reibungspunkte effektiver verstehen.",
  "Prioritize product development based on direct user feedback":
    "Produktentwicklung basierend auf direktem Nutzerfeedback priorisieren.",
  "Share clear, data-backed insights with design and development teams":
    "Klare, datengestützte Einblicke mit Design- und Entwicklungsteams teilen.",
  "Reduce research costs by 97%": "Forschungskosten um 97 % senken.",
  "Analyze interviews or focus groups where brand perceptions or competitor comparisons are discussed. Use Deep Analysis to track sentiment associated with your brand and competitors. Identify key themes related to brand values, strengths, or weaknesses. Use Concept Analysis to see how different demographics perceive the brand landscape.":
    "Analysieren Sie Interviews oder Fokusgruppen, in denen Markenwahrnehmung oder Wettbewerbsvergleiche diskutiert werden. Verfolgen Sie mit Tiefenanalyse die Stimmung zu Ihrer Marke und Ihren Wettbewerbern. Identifizieren Sie Schlüsselthemen zu Markenwerten, Stärken oder Schwächen. Sehen Sie mit Konzeptanalyse, wie verschiedene Demografien die Markenlandschaft wahrnehmen.",
  "Gain objective insights into brand health": "Objektive Einblicke in die Markengesundheit gewinnen.",
  "Understand your competitive positioning from the customer's perspective":
    "Ihre Wettbewerbsposition aus Kundensicht verstehen.",
  "Identify opportunities to strengthen brand messaging": "Möglichkeiten zur Stärkung der Markenbotschaft erkennen.",
  "Inform strategic planning with rich qualitative context":
    "Strategische Planung mit reichhaltigem qualitativem Kontext untermauern.",
  "Track brand perception changes over time": "Veränderungen der Markenwahrnehmung im Zeitverlauf verfolgen.",
  "Automatically transcribe sales calls, discovery sessions, demo recordings, and customer check-in calls using Perfect Transcription. Apply Deep Analysis to identify patterns in successful deals vs. lost opportunities – what topics were discussed? What questions were asked? What objections were raised and how were they handled? Track mentions of competitors, feature requests, budget constraints, or specific pain points. Use Speaker Identification to analyze talk ratios and interaction dynamics. Leverage Concept Analysis to understand how different customer segments discuss value or ROI. Utilize Multi-Interview Analysis to compare approaches across different sales reps or success managers.":
    "Transkribieren Sie Verkaufsgespräche, Discovery Sessions, Demos und Kundengespräche automatisch und präzise. Identifizieren Sie mit Tiefenanalyse Muster erfolgreicher vs. verlorener Deals: Welche Themen wurden besprochen? Welche Fragen gestellt? Welche Einwände wie behandelt? Verfolgen Sie Erwähnungen von Wettbewerbern, Feature-Wünsche, Budgetgrenzen oder Pain Points. Analysieren Sie Gesprächsanteile und Interaktionsdynamiken mit Sprechererkennung. Verstehen Sie mit Konzeptanalyse, wie verschiedene Kundensegmente Wert oder ROI diskutieren. Vergleichen Sie mit Multi-Interview-Analyse Ansätze verschiedener Vertriebs- oder Success-Manager.",
  "Identify winning sales tactics and objection-handling techniques to replicate across the team":
    "Erfolgreiche Verkaufstaktiken und Einwandbehandlungstechniken zur teamweiten Nutzung identifizieren.",
  "Improve sales coaching and onboarding by providing data-backed examples of effective communication":
    "Vertriebscoaching und Onboarding durch datengestützte Beispiele effektiver Kommunikation verbessern.",
  "Gain faster insights into common customer pain points and needs to inform product development":
    "Schnellere Einblicke in häufige Kundenprobleme und -bedürfnisse für die Produktentwicklung gewinnen.",
  "Proactively identify customers at risk of churn based on conversational cues or expressed concerns":
    "Abwanderungsgefährdete Kunden proaktiv anhand von Gesprächshinweisen erkennen.",
  "Enhance customer success strategies by understanding what truly drives value for different client segments":
    "Customer-Success-Strategien verbessern, indem der wahre Wert für verschiedene Kundensegmente verstanden wird.",
  "Shorten sales cycles and improve win rates through optimized strategies":
    "Verkaufszyklen verkürzen und Abschlussquoten durch optimierte Strategien verbessern.",
  "Pricing Plans": "Preispläne",
  "Choose the perfect plan to elevate your market research with Semantic Map":
    "Wählen Sie den perfekten Plan, um Ihre Marktforschung mit Semantic Map auf ein neues Level zu heben.",
  Trial: "Testversion",
  Free: "Kostenlos",
  "1 project": "1 Projekt",
  "500 minutes of audio": "500 Minuten Audio",
  "Core features": "Kernfunktionen",
  "Start Free Trial": "Kostenlose Testversion starten",
  "Pay-as-you-go": "Pay-as-you-go",
  "€0.15/minute audio": "€0,15/Minute Audio",
  "Unlimited projects": "Unbegrenzte Projekte",
  "Unlimited minutes of audio": "Unbegrenzte Audiominuten",
  "Basic support": "Basis-Support",
  "All features": "Alle Funktionen",
  "Get Started": "Jetzt starten",
  Enterprise: "Unternehmen",
  Custom: "Individuell",
  "Unlimited audio": "Unbegrenzte Audiodaten",
  "24/7 dedicated support": "24/7 persönlicher Support",
  "Custom features": "Individuelle Funktionen",
  "On-premise option": "On-Premise-Option",
  "Not sure which plan is right for you?": "Sie sind unsicher, welcher Plan der richtige für Sie ist?",
  "Our team is here to help you find the perfect solution for your needs.":
    "Unser Team hilft Ihnen gerne, die perfekte Lösung für Ihre Anforderungen zu finden.",
  "Ready to Transform Your Research?\nJoin the AI revolution and unlock unprecedented insights.":
    "Bereit, Ihre Forschung zu revolutionieren?\nWerden Sie Teil der KI-Revolution und gewinnen Sie einzigartige Einblicke.",
  Name: "Name",
  Email: "E-Mail",
  Company: "Unternehmen",
  Message: "Nachricht",
  "By submitting your information to our website you agree to the terms outlined in our Privacy Policy.":
    "Durch die Übermittlung Ihrer Daten an unsere Website stimmen Sie den Bedingungen in unserer Datenschutzerklärung zu.",
  "Get in Touch": "Kontakt aufnehmen",
  "Have questions about our platform or need a personalized demo? Our team is here to help you get the most out of Semantic Map.":
    "Haben Sie Fragen zu unserer Plattform oder wünschen eine persönliche Demo? Unser Team hilft Ihnen gerne, das Beste aus Semantic Map herauszuholen.",
  Phone: "Telefon",
  Location: "Standort",
  "Thank You!": "Vielen Dank!",
  "We've received your request and will get back to you shortly.":
    "Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.",
  Close: "Schließen",
  "Submitting...": "Wird gesendet...",
  "What do you usually look for in luxury cosmetics packaging?":
    "Worauf achten Sie normalerweise bei der Verpackung von Luxuskosmetik?",
  "Honestly, it should look nice on my shelf, but if it's hard to open or messy, I won't buy it again.":
    "Ehrlich gesagt sollte es gut in meinem Regal aussehen, aber wenn es schwer zu öffnen oder unordentlich ist, kaufe ich es nicht wieder.",
  "So would you say functionality outweighs aesthetics when you're making a purchase?":
    "Würden Sie also sagen, dass Funktionalität wichtiger ist als Ästhetik, wenn Sie einen Kauf tätigen?",
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "de")) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Translation function
  const t = (key: string): string => {
    if (language === "en") return key
    return translations[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
