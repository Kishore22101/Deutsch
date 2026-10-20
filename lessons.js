// lessons.js – All 65 A1 German lessons
const LESSONS = [
  {
    id: 1,
    title: "Greetings",
    german: "Begrüßungen",
    english: "Greetings",
    phonetic: "buh-GRÜH-sun-gen",
    examples: [
      { de: "Hallo! Wie geht es dir?", en: "Hello! How are you?" },
      { de: "Grüß Gott! / Grüß Sie!", en: "Hello! (Southern German formal)" }
    ],
    vocab: [
      { de: "Hallo!", en: "Hello!" },
      { de: "Guten Tag!", en: "Good day!" },
      { de: "Guten Morgen!", en: "Good morning!" },
      { de: "Guten Abend!", en: "Good evening!" },
      { de: "Gute Nacht!", en: "Good night!" },
      { de: "Grüß Gott!", en: "Hello! (formal, southern)" },
      { de: "Grüß Sie!", en: "Hello! (formal, singular)" },
      { de: "Grüß dich!", en: "Hello! (informal, singular)" },
      { de: "Servus!", en: "Hello! / Bye! (informal)" },
      { de: "Tschüs! / Tschüss!", en: "Bye!" },
      { de: "Auf Wiedersehen!", en: "See you again! (Goodbye)" },
      { de: "Auf Wiederhören!", en: "Bye! (on telephone)" },
      { de: "Bis bald!", en: "See you soon!" },
      { de: "Bis später!", en: "See you later!" }
    ]
  },
  {
    id: 2,
    title: "Common Phrases",
    german: "Häufige Redemittel",
    english: "Common Phrases",
    phonetic: "HOY-fi-guh REH-duh-mit-el",
    examples: [
      { de: "Entschuldigen Sie, bitte!", en: "Excuse me please! (formal)" },
      { de: "Sprechen Sie Deutsch? / Englisch?", en: "Do you speak German? / English?" }
    ],
    vocab: [
      { de: "Danke! / Danke schön!", en: "Thanks! / Thank you!" },
      { de: "Vielen Dank!", en: "Thank you very much!" },
      { de: "Bitte / Bitte schön!", en: "You are welcome! / Please!" },
      { de: "Entschuldigen Sie, bitte!", en: "Excuse me please! (formal)" },
      { de: "Entschuldigung, bitte!", en: "Excuse me please! (informal)" },
      { de: "Es tut mir leid!", en: "I am sorry!" },
      { de: "Wie bitte?", en: "I beg your pardon?" },
      { de: "Noch einmal, bitte!", en: "Once again please!" },
      { de: "Bitte wiederholen Sie!", en: "Please repeat!" },
      { de: "Ich spreche kein Deutsch.", en: "I don't speak German." },
      { de: "Ich spreche etwas Deutsch.", en: "I speak a bit of German." },
      { de: "Ich verstehe nicht.", en: "I don't understand." },
      { de: "Ich weiß nicht.", en: "I don't know." },
      { de: "Keine Ahnung!", en: "No idea!" },
      { de: "Kein Problem!", en: "No problem!" },
      { de: "Einen Moment, bitte!", en: "Just a moment, please!" },
      { de: "Ja / Nein / Vielleicht", en: "Yes / No / Maybe" }
    ]
  },
  {
    id: 3,
    title: "Numbers 0–20",
    german: "Zahlen 0–20",
    english: "Numbers 0–20",
    phonetic: "TSAH-len null bis TSVANT-sikh",
    examples: [
      { de: "Wie ist Ihre Handynummer? (formal)", en: "What is your mobile number?" },
      { de: "Meine Handynummer ist 638512770 9.", en: "My mobile number is 638512770 9." }
    ],
    vocab: [
      { de: "0 – null", en: "zero" },
      { de: "1 – eins", en: "one" },
      { de: "2 – zwei", en: "two" },
      { de: "3 – drei", en: "three" },
      { de: "4 – vier", en: "four" },
      { de: "5 – fünf", en: "five" },
      { de: "6 – sechs", en: "six" },
      { de: "7 – sieben", en: "seven" },
      { de: "8 – acht", en: "eight" },
      { de: "9 – neun", en: "nine" },
      { de: "10 – zehn", en: "ten" },
      { de: "11 – elf", en: "eleven" },
      { de: "12 – zwölf", en: "twelve" },
      { de: "13 – dreizehn (drei + zehn)", en: "thirteen" },
      { de: "14 – vierzehn", en: "fourteen" },
      { de: "15 – fünfzehn", en: "fifteen" },
      { de: "16 – sechzehn", en: "sixteen" },
      { de: "17 – siebzehn", en: "seventeen" },
      { de: "18 – achtzehn", en: "eighteen" },
      { de: "19 – neunzehn", en: "nineteen" },
      { de: "20 – zwanzig", en: "twenty" }
    ]
  },
  {
    id: 4,
    title: "Numbers 21–100",
    german: "Zahlen 21–100",
    english: "Numbers 21–100",
    phonetic: "TSAH-len ayn-unt-TSVANT-sikh bis HUN-dert",
    examples: [
      { de: "21 → eins + und + zwanzig = einundzwanzig", en: "21 = twenty-one" },
      { de: "100 → (ein)hundert", en: "100 = one hundred" }
    ],
    vocab: [
      { de: "21 – einundzwanzig", en: "twenty-one" },
      { de: "22 – zweiundzwanzig", en: "twenty-two" },
      { de: "23 – dreiundzwanzig", en: "twenty-three" },
      { de: "24 – vierundzwanzig", en: "twenty-four" },
      { de: "25 – fünfundzwanzig", en: "twenty-five" },
      { de: "26 – sechsundzwanzig", en: "twenty-six" },
      { de: "27 – siebenundzwanzig", en: "twenty-seven" },
      { de: "28 – achtundzwanzig", en: "twenty-eight" },
      { de: "29 – neunundzwanzig", en: "twenty-nine" },
      { de: "30 – dreißig", en: "thirty" },
      { de: "40 – vierzig", en: "forty" },
      { de: "50 – fünfzig", en: "fifty" },
      { de: "60 – sechzig", en: "sixty" },
      { de: "70 – siebzig", en: "seventy" },
      { de: "80 – achtzig", en: "eighty" },
      { de: "90 – neunzig", en: "ninety" },
      { de: "100 – (ein)hundert", en: "one hundred" }
    ]
  },
  {
    id: 5,
    title: "The Alphabet",
    german: "Das Alphabet",
    english: "The Alphabet",
    phonetic: "dahs al-fah-BET",
    examples: [
      { de: "A wie Apfel (aa) – apple", en: "A as in Apple" },
      { de: "Ä (eyy) – Bär = Bear | ß (es-tset) – Füße = foot", en: "Umlauts & special characters" }
    ],
    vocab: [
      { de: "A – Apfel (aa)", en: "Apple" },
      { de: "B – Banane (bay)", en: "Banana" },
      { de: "C – Couch (tsay)", en: "Couch" },
      { de: "D – Deutschland (day)", en: "Germany" },
      { de: "E – Elefant (ey)", en: "Elephant" },
      { de: "F – Fisch (off)", en: "Fish" },
      { de: "G – Gitarre (gay)", en: "Guitar" },
      { de: "H – Haus (ha)", en: "House" },
      { de: "I – Igel (e)", en: "Hedgehog" },
      { de: "J – Joghurt (yott)", en: "Yoghurt" },
      { de: "K – Kaffee (ka)", en: "Coffee" },
      { de: "L – Liebe (ell)", en: "Love" },
      { de: "M – Mann (emm)", en: "Man" },
      { de: "N – Nagel (en)", en: "Nail" },
      { de: "O – Orange (o)", en: "Orange" },
      { de: "P – Pinguin (pay)", en: "Penguin" },
      { de: "Q – Quiz (ku)", en: "Quiz" },
      { de: "R – Rot (err)", en: "Red" },
      { de: "S – Sonne (ess)", en: "Sun" },
      { de: "T – Tee (tay)", en: "Tea" },
      { de: "U – Uhr (uu)", en: "Clock" },
      { de: "V – Vögel (fau)", en: "Bird" },
      { de: "W – Wolke (way)", en: "Cloud" },
      { de: "X – Xylofon (iks)", en: "Xylophone" },
      { de: "Y – Yak (upsilon)", en: "Yak" },
      { de: "Z – Zebra (tset)", en: "Zebra" },
      { de: "Ä (eyy) – Bär", en: "Bear (Umlaut Ä)" },
      { de: "Ö (eyo/oil) – Öl", en: "Oil (Umlaut Ö)" },
      { de: "Ü (eyu/fünf) – Füße", en: "Foot (Umlaut Ü)" },
      { de: "ß (es-tset) – Füße", en: "Foot (sharp S = ss)" }
    ]
  },
  {
    id: 6,
    title: "Introducing Yourself",
    german: "Sich Vorstellen",
    english: "Introducing Yourself",
    phonetic: "zikh for-SHTEL-en",
    examples: [
      { de: "Ich heiße Kishore. / Ich bin Kishore.", en: "My name is Kishore. / I am Kishore." },
      { de: "Ich komme aus Indien. Ich wohne in Minjur.", en: "I come from India. I live in Minjur." }
    ],
    vocab: [
      { de: "Ich heiße...", en: "My name is..." },
      { de: "Ich bin...", en: "I am..." },
      { de: "Mein Name ist...", en: "My name is..." },
      { de: "Mein Familienname ist...", en: "My surname is..." },
      { de: "Ich komme aus Indien.", en: "I come from India." },
      { de: "Ich wohne in...", en: "I live in..." },
      { de: "Ich spreche Deutsch und Englisch.", en: "I speak German and English." },
      { de: "Ich kann Deutsch und Englisch.", en: "I know German and English." },
      { de: "Ich bin 20 Jahre alt.", en: "I am 20 years old." },
      { de: "Ich bin Student / Studentin.", en: "I am a student (m/f)." },
      { de: "Ich bin Schüler / Schülerin.", en: "I am a school student (m/f)." },
      { de: "Ich bin Lehrer / Lehrerin.", en: "I am a teacher (m/f)." },
      { de: "Ich bin ledig.", en: "I am single." },
      { de: "Ich bin verheiratet.", en: "I am married." },
      { de: "Ich habe ein Kind.", en: "I have one child." },
      { de: "Meine Hobbys sind Zeichnen und Musik hören.", en: "My hobbies are drawing and listening to music." }
    ]
  },
  {
    id: 7,
    title: "Getting to Know Someone",
    german: "Jemanden Kennenlernen",
    english: "Getting to Know Someone",
    phonetic: "YEH-mahn-den KEN-en-ler-nen",
    examples: [
      { de: "Wie heißen Sie? / Wie heißt du?", en: "What is your name? (formal / informal)" },
      { de: "Woher kommen Sie? / Woher kommst du?", en: "Where are you from?" }
    ],
    vocab: [
      { de: "Sie = You (formal) / du = You (informal)", en: "Formal vs Informal 'you'" },
      { de: "Wie heißen Sie? / Wie heißt du?", en: "What is your name?" },
      { de: "Wie ist Ihr Familienname? / Wie ist dein Familienname?", en: "What is your last name?" },
      { de: "Woher kommen Sie? / Woher kommst du?", en: "Where are you from?" },
      { de: "Wo wohnen Sie? / Wo wohnst du?", en: "Where do you live?" },
      { de: "Wie alt sind Sie? / Wie alt bist du?", en: "How old are you?" },
      { de: "Welche Sprachen sprechen Sie?", en: "Which languages do you speak?" },
      { de: "Was machen Sie beruflich?", en: "What do you do for a living?" },
      { de: "Was sind Ihre Hobbys?", en: "What are your hobbies?" },
      { de: "Sind Sie verheiratet? / Bist du verheiratet?", en: "Are you married?" },
      { de: "Haben Sie Kinder? / Hast du Kinder?", en: "Do you have children?" }
    ]
  },
  {
    id: 8,
    title: "How Are You?",
    german: "Wie geht's?",
    english: "How Are You?",
    phonetic: "vee GATE'S",
    examples: [
      { de: "Wie geht es Ihnen? – Mir geht es gut!", en: "How are you? (formal) – I am fine!" },
      { de: "Und Ihnen? / Und dir? – Auch gut, danke!", en: "And you? – Also good, thanks!" }
    ],
    vocab: [
      { de: "Wie geht's? / Wie geht es Ihnen?", en: "How are you? (informal / formal)" },
      { de: "Wie geht es dir?", en: "How are you? (informal)" },
      { de: "Mir geht es gut!", en: "I am fine!" },
      { de: "Mir geht es sehr gut!", en: "I am very well!" },
      { de: "Super!", en: "Super!" },
      { de: "Wunderbar!", en: "Wonderful!" },
      { de: "Ausgezeichnet!", en: "Excellent!" },
      { de: "Toll!", en: "Awesome!" },
      { de: "Prima!", en: "Great!" },
      { de: "Fantastisch!", en: "Fantastic!" },
      { de: "Es geht!", en: "Not too bad / So-so!" },
      { de: "Mir geht es schlecht!", en: "I am not doing well!" },
      { de: "Mir geht es sehr schlecht!", en: "I am feeling very bad!" },
      { de: "Miserabel!", en: "Miserable!" },
      { de: "Furchtbar!", en: "Awful!" },
      { de: "Ich bin müde.", en: "I am tired." },
      { de: "Ich bin krank.", en: "I am unwell." }
    ]
  },
  {
    id: 9,
    title: "Sentence Structure & Questions",
    german: "Satzstruktur & W-Fragen",
    english: "Sentence Structure & W-Questions",
    phonetic: "ZATS-shtruk-toor unt VEH-frah-gen",
    examples: [
      { de: "Ich heiße Kishore. (Subject → Verb → Object)", en: "My name is Kishore. Verb = 2nd position!" },
      { de: "Wo wohnen Sie? / Wie heißen Sie?", en: "Where do you live? / What is your name? (W-Questions)" }
    ],
    vocab: [
      { de: "Verb steht auf Position 2", en: "Verb is always in 2nd position (in statements)" },
      { de: "Subjekt ist vor dem Verb", en: "Subject comes before the verb" },
      { de: "Wie?", en: "How?" },
      { de: "Was?", en: "What?" },
      { de: "Woher?", en: "Where from?" },
      { de: "Welche?", en: "Which?" },
      { de: "Wo?", en: "Where?" },
      { de: "Wie viel?", en: "How much?" },
      { de: "Haben Sie Kinder? (Ja/Nein-Frage)", en: "Do you have children? (Yes/No Q)" },
      { de: "Wohnst du in München?", en: "Do you live in Munich?" },
      { de: "Sind Sie verheiratet?", en: "Are you married?" },
      { de: "Spielen sie Fußball?", en: "Do they play football?" },
      { de: "Sprechen sie Italienisch?", en: "Do they speak Italian?" },
      { de: "Verstehen sie mich?", en: "Do they understand me?" },
      { de: "Haben sie Zeit?", en: "Do they have time?" }
    ]
  },
  {

    id: 10,
    title: "Plural Forms",
    german: "Der Plural",
    english: "Plural Forms",
    phonetic: "der PLOO-rahl",
    examples: [
      { de: "Das sind zwei Bücher.", en: "These are two books." },
      { de: "Die Kinder spielen draußen.", en: "The children play outside." }
    ],
    vocab: [
      { de: "das Buch → die Bücher", en: "book → books" },
      { de: "das Kind → die Kinder", en: "child → children" },
      { de: "der Tisch → die Tische", en: "table → tables" },
      { de: "die Frau → die Frauen", en: "woman → women" },
      { de: "der Mann → die Männer", en: "man → men" }
    ]
  },
  {
    id: 11,
    title: "Personal Pronouns",
    german: "Personalpronomen",
    english: "Personal Pronouns",
    phonetic: "per-zoh-NAHL-proh-noh-men",
    examples: [
      { de: "Wir lernen Deutsch.", en: "We are learning German." },
      { de: "Sie wohnt in Berlin.", en: "She lives in Berlin." }
    ],
    vocab: [
      { de: "ich", en: "I" },
      { de: "du", en: "you (informal)" },
      { de: "er / sie / es", en: "he / she / it" },
      { de: "wir", en: "we" },
      { de: "ihr", en: "you (plural)" },
      { de: "sie / Sie", en: "they / You (formal)" }
    ]
  },
  {
    id: 12,
    title: "Verb: sein (to be)",
    german: "Das Verb 'sein'",
    english: "The verb 'to be'",
    phonetic: "dahs Verb 'zyn'",
    examples: [
      { de: "Ich bin Lehrer.", en: "I am a teacher." },
      { de: "Wir sind müde.", en: "We are tired." }
    ],
    vocab: [
      { de: "ich bin", en: "I am" },
      { de: "du bist", en: "you are" },
      { de: "er/sie/es ist", en: "he/she/it is" },
      { de: "wir sind", en: "we are" },
      { de: "ihr seid", en: "you all are" },
      { de: "sie/Sie sind", en: "they/You are" }
    ]
  },
  {
    id: 13,
    title: "Verb: haben (to have)",
    german: "Das Verb 'haben'",
    english: "The verb 'to have'",
    phonetic: "dahs Verb 'HAH-ben'",
    examples: [
      { de: "Ich habe ein Auto.", en: "I have a car." },
      { de: "Hast du Zeit?", en: "Do you have time?" }
    ],
    vocab: [
      { de: "ich habe", en: "I have" },
      { de: "du hast", en: "you have" },
      { de: "er/sie/es hat", en: "he/she/it has" },
      { de: "wir haben", en: "we have" },
      { de: "ihr habt", en: "you all have" },
      { de: "sie/Sie haben", en: "they/You have" }
    ]
  },
  {
    id: 14,
    title: "Modal Verbs: können & wollen",
    german: "Modalverben",
    english: "Modal Verbs",
    phonetic: "moh-DAHL-ver-ben",
    examples: [
      { de: "Ich kann Deutsch sprechen.", en: "I can speak German." },
      { de: "Ich will Wasser trinken.", en: "I want to drink water." }
    ],
    vocab: [
      { de: "können", en: "can / to be able to" },
      { de: "wollen", en: "to want to" },
      { de: "müssen", en: "to have to / must" },
      { de: "dürfen", en: "to be allowed to" },
      { de: "sollen", en: "to be supposed to" },
      { de: "möchten", en: "would like to" }
    ]
  },
  {
    id: 15,
    title: "Regular Verbs",
    german: "Regelmäßige Verben",
    english: "Regular Verbs",
    phonetic: "REH-gel-meh-si-guh VER-ben",
    examples: [
      { de: "Ich wohne in München.", en: "I live in Munich." },
      { de: "Sie lernt jeden Tag.", en: "She learns every day." }
    ],
    vocab: [
      { de: "wohnen", en: "to live" },
      { de: "lernen", en: "to learn" },
      { de: "spielen", en: "to play" },
      { de: "arbeiten", en: "to work" },
      { de: "kaufen", en: "to buy" },
      { de: "trinken", en: "to drink" },
      { de: "essen", en: "to eat" }
    ]
  },
  {
    id: 16,
    title: "Negation: nicht & kein",
    german: "Verneinung",
    english: "Negation",
    phonetic: "fer-NY-gung",
    examples: [
      { de: "Ich bin nicht müde.", en: "I am not tired." },
      { de: "Ich habe kein Auto.", en: "I don't have a car." }
    ],
    vocab: [
      { de: "nicht", en: "not" },
      { de: "kein / keine / kein", en: "no / not any" },
      { de: "Ich verstehe nicht.", en: "I don't understand." },
      { de: "Das ist nicht richtig.", en: "That is not right." }
    ]
  },
  {
    id: 17,
    title: "Question Words (W-Fragen)",
    german: "W-Fragen",
    english: "Question Words",
    phonetic: "veh-FRAH-gen",
    examples: [
      { de: "Wo wohnst du?", en: "Where do you live?" },
      { de: "Wann kommst du?", en: "When are you coming?" }
    ],
    vocab: [
      { de: "Wer?", en: "Who?" },
      { de: "Was?", en: "What?" },
      { de: "Wo?", en: "Where?" },
      { de: "Wann?", en: "When?" },
      { de: "Warum?", en: "Why?" },
      { de: "Wie?", en: "How?" },
      { de: "Wie viel?", en: "How much?" },
      { de: "Woher?", en: "Where from?" }
    ]
  },
  {
    id: 18,
    title: "Nominative Case",
    german: "Der Nominativ",
    english: "The Nominative Case",
    phonetic: "der noh-mee-nah-TEEF",
    examples: [
      { de: "Der Mann liest ein Buch.", en: "The man reads a book." },
      { de: "Die Katze schläft.", en: "The cat sleeps." }
    ],
    vocab: [
      { de: "der (masc.)", en: "the – subject" },
      { de: "die (fem.)", en: "the – subject" },
      { de: "das (neut.)", en: "the – subject" },
      { de: "ein / eine / ein", en: "a/an – subject" }
    ]
  },
  {
    id: 19,
    title: "Accusative Case",
    german: "Der Akkusativ",
    english: "The Accusative Case",
    phonetic: "der ah-koo-za-TEEF",
    examples: [
      { de: "Ich sehe den Mann.", en: "I see the man." },
      { de: "Er kauft einen Apfel.", en: "He buys an apple." }
    ],
    vocab: [
      { de: "den (masc.)", en: "the – direct object" },
      { de: "die (fem.)", en: "the – direct object" },
      { de: "das (neut.)", en: "the – direct object" },
      { de: "einen / eine / ein", en: "a/an – direct object" }
    ]
  },
  {
    id: 20,
    title: "Dative Case",
    german: "Der Dativ",
    english: "The Dative Case",
    phonetic: "der DAH-teef",
    examples: [
      { de: "Ich helfe dem Mann.", en: "I help the man." },
      { de: "Sie gibt der Frau ein Buch.", en: "She gives the woman a book." }
    ],
    vocab: [
      { de: "dem (masc.)", en: "the – indirect object" },
      { de: "der (fem.)", en: "the – indirect object" },
      { de: "dem (neut.)", en: "the – indirect object" },
      { de: "einem / einer / einem", en: "a/an – indirect object" }
    ]
  },
  {
    id: 21,
    title: "Adjectives Basics",
    german: "Adjektive",
    english: "Adjectives",
    phonetic: "ahd-yek-TEE-vuh",
    examples: [
      { de: "Das Haus ist groß.", en: "The house is big." },
      { de: "Sie hat schöne Augen.", en: "She has beautiful eyes." }
    ],
    vocab: [
      { de: "groß / klein", en: "big / small" },
      { de: "alt / jung", en: "old / young" },
      { de: "gut / schlecht", en: "good / bad" },
      { de: "schön / hässlich", en: "beautiful / ugly" },
      { de: "schnell / langsam", en: "fast / slow" },
      { de: "warm / kalt", en: "warm / cold" }
    ]
  },
  {
    id: 22,
    title: "Possessive Pronouns",
    german: "Possessivpronomen",
    english: "Possessive Pronouns",
    phonetic: "poh-ze-SEEF-proh-noh-men",
    examples: [
      { de: "Das ist mein Buch.", en: "That is my book." },
      { de: "Wo ist deine Tasche?", en: "Where is your bag?" }
    ],
    vocab: [
      { de: "mein / meine", en: "my" },
      { de: "dein / deine", en: "your" },
      { de: "sein / seine", en: "his" },
      { de: "ihr / ihre", en: "her" },
      { de: "unser / unsere", en: "our" },
      { de: "ihr / ihre", en: "their" }
    ]
  },
  {
    id: 23,
    title: "Family Members",
    german: "Die Familie",
    english: "The Family",
    phonetic: "dee fah-MEE-lyuh",
    examples: [
      { de: "Meine Mutter heißt Anna.", en: "My mother's name is Anna." },
      { de: "Ich habe zwei Geschwister.", en: "I have two siblings." }
    ],
    vocab: [
      { de: "die Mutter", en: "mother" },
      { de: "der Vater", en: "father" },
      { de: "die Schwester", en: "sister" },
      { de: "der Bruder", en: "brother" },
      { de: "die Großmutter", en: "grandmother" },
      { de: "der Großvater", en: "grandfather" },
      { de: "das Kind", en: "child" }
    ]
  },
  {
    id: 24,
    title: "Describing People",
    german: "Personen beschreiben",
    english: "Describing People",
    phonetic: "per-ZOH-nen be-SHRY-ben",
    examples: [
      { de: "Er ist groß und schlank.", en: "He is tall and slim." },
      { de: "Sie hat lange, braune Haare.", en: "She has long, brown hair." }
    ],
    vocab: [
      { de: "groß / klein", en: "tall / short" },
      { de: "schlank / dick", en: "slim / fat" },
      { de: "jung / alt", en: "young / old" },
      { de: "die Haare", en: "hair" },
      { de: "die Augen", en: "eyes" },
      { de: "freundlich", en: "friendly" }
    ]
  },
  {
    id: 25,
    title: "Hobbies & Free Time",
    german: "Hobbys & Freizeit",
    english: "Hobbies & Free Time",
    phonetic: "HOB-ees unt FRY-tsyt",
    examples: [
      { de: "In meiner Freizeit lese ich.", en: "In my free time I read." },
      { de: "Mein Hobby ist Musik hören.", en: "My hobby is listening to music." }
    ],
    vocab: [
      { de: "das Hobby", en: "hobby" },
      { de: "lesen", en: "to read" },
      { de: "Musik hören", en: "to listen to music" },
      { de: "Filme schauen", en: "to watch films" },
      { de: "kochen", en: "to cook" },
      { de: "reisen", en: "to travel" },
      { de: "zeichnen", en: "to draw" }
    ]
  },
  {
    id: 26,
    title: "Sports",
    german: "Sport",
    english: "Sports",
    phonetic: "shport",
    examples: [
      { de: "Ich spiele Fußball.", en: "I play football." },
      { de: "Sie schwimmt jeden Morgen.", en: "She swims every morning." }
    ],
    vocab: [
      { de: "der Fußball", en: "football / soccer" },
      { de: "schwimmen", en: "to swim" },
      { de: "laufen", en: "to run" },
      { de: "Tennis spielen", en: "to play tennis" },
      { de: "Fahrrad fahren", en: "to ride a bike" },
      { de: "trainieren", en: "to train" }
    ]
  },
  {
    id: 27,
    title: "Food & Drinks",
    german: "Essen & Trinken",
    english: "Food & Drinks",
    phonetic: "ES-en unt TRIN-ken",
    examples: [
      { de: "Ich esse gern Pizza.", en: "I like eating pizza." },
      { de: "Was möchten Sie trinken?", en: "What would you like to drink?" }
    ],
    vocab: [
      { de: "das Brot", en: "bread" },
      { de: "die Suppe", en: "soup" },
      { de: "das Fleisch", en: "meat" },
      { de: "der Fisch", en: "fish" },
      { de: "der Käse", en: "cheese" },
      { de: "das Wasser", en: "water" },
      { de: "der Saft", en: "juice" }
    ]
  },
  {
    id: 28,
    title: "Ordering Food",
    german: "Essen bestellen",
    english: "Ordering Food",
    phonetic: "ES-en be-SHTEL-en",
    examples: [
      { de: "Ich hätte gern eine Suppe.", en: "I would like a soup." },
      { de: "Die Speisekarte, bitte.", en: "The menu, please." }
    ],
    vocab: [
      { de: "die Speisekarte", en: "menu" },
      { de: "bestellen", en: "to order" },
      { de: "Ich hätte gern...", en: "I would like..." },
      { de: "die Rechnung", en: "the bill" },
      { de: "der Kellner", en: "waiter" },
      { de: "die Kellnerin", en: "waitress" }
    ]
  },
  {
    id: 29,
    title: "At the Restaurant",
    german: "Im Restaurant",
    english: "At the Restaurant",
    phonetic: "im res-toh-RAHNT",
    examples: [
      { de: "Einen Tisch für zwei, bitte.", en: "A table for two, please." },
      { de: "Hat es Ihnen geschmeckt?", en: "Did you enjoy your meal?" }
    ],
    vocab: [
      { de: "der Tisch", en: "table" },
      { de: "reservieren", en: "to reserve" },
      { de: "die Vorspeise", en: "starter" },
      { de: "das Hauptgericht", en: "main course" },
      { de: "das Dessert", en: "dessert" },
      { de: "die Empfehlung", en: "recommendation" }
    ]
  },
  {
    id: 30,
    title: "Cooking Basics",
    german: "Kochen",
    english: "Cooking",
    phonetic: "KOH-khen",
    examples: [
      { de: "Ich koche heute Abend.", en: "I am cooking this evening." },
      { de: "Das Rezept ist sehr einfach.", en: "The recipe is very easy." }
    ],
    vocab: [
      { de: "kochen", en: "to cook" },
      { de: "das Rezept", en: "recipe" },
      { de: "die Zutat", en: "ingredient" },
      { de: "braten", en: "to fry" },
      { de: "backen", en: "to bake" },
      { de: "schneiden", en: "to cut" },
      { de: "mischen", en: "to mix" }
    ]
  },
  {
    id: 31,
    title: "Kitchen Vocabulary",
    german: "Die Küche",
    english: "The Kitchen",
    phonetic: "dee KÜH-khe",
    examples: [
      { de: "Der Herd ist heiß.", en: "The stove is hot." },
      { de: "Wo ist der Topf?", en: "Where is the pot?" }
    ],
    vocab: [
      { de: "der Herd", en: "stove" },
      { de: "der Kühlschrank", en: "refrigerator" },
      { de: "der Topf", en: "pot" },
      { de: "die Pfanne", en: "pan" },
      { de: "das Messer", en: "knife" },
      { de: "der Löffel", en: "spoon" },
      { de: "die Gabel", en: "fork" }
    ]
  },
  {
    id: 32,
    title: "Breakfast Items",
    german: "Das Frühstück",
    english: "Breakfast",
    phonetic: "dahs FRÜH-shtük",
    examples: [
      { de: "Zum Frühstück esse ich Müsli.", en: "For breakfast I eat muesli." },
      { de: "Möchtest du Kaffee oder Tee?", en: "Would you like coffee or tea?" }
    ],
    vocab: [
      { de: "das Müsli", en: "muesli / cereal" },
      { de: "das Ei", en: "egg" },
      { de: "die Butter", en: "butter" },
      { de: "die Marmelade", en: "jam" },
      { de: "der Kaffee", en: "coffee" },
      { de: "der Tee", en: "tea" },
      { de: "der Orangensaft", en: "orange juice" }
    ]
  },
  {
    id: 33,
    title: "Fruits & Vegetables",
    german: "Obst & Gemüse",
    english: "Fruits & Vegetables",
    phonetic: "ohpst unt guh-MÜ-zuh",
    examples: [
      { de: "Ich kaufe frisches Obst.", en: "I buy fresh fruit." },
      { de: "Karotten sind gesund.", en: "Carrots are healthy." }
    ],
    vocab: [
      { de: "der Apfel", en: "apple" },
      { de: "die Banane", en: "banana" },
      { de: "die Tomate", en: "tomato" },
      { de: "die Karotte", en: "carrot" },
      { de: "der Salat", en: "lettuce / salad" },
      { de: "die Erdbeere", en: "strawberry" },
      { de: "die Kartoffel", en: "potato" }
    ]
  },
  {
    id: 34,
    title: "Drinks",
    german: "Getränke",
    english: "Drinks",
    phonetic: "guh-TREN-kuh",
    examples: [
      { de: "Ich trinke gern Mineralwasser.", en: "I like to drink mineral water." },
      { de: "Ein Bier, bitte.", en: "A beer, please." }
    ],
    vocab: [
      { de: "das Wasser", en: "water" },
      { de: "das Bier", en: "beer" },
      { de: "der Wein", en: "wine" },
      { de: "der Kaffee", en: "coffee" },
      { de: "die Milch", en: "milk" },
      { de: "der Saft", en: "juice" },
      { de: "die Limonade", en: "lemonade" }
    ]
  },
  {
    id: 35,
    title: "At the Supermarket",
    german: "Im Supermarkt",
    english: "At the Supermarket",
    phonetic: "im ZOO-per-markt",
    examples: [
      { de: "Ich brauche Milch und Brot.", en: "I need milk and bread." },
      { de: "Wo ist die Kasse?", en: "Where is the checkout?" }
    ],
    vocab: [
      { de: "der Supermarkt", en: "supermarket" },
      { de: "die Kasse", en: "checkout / cash register" },
      { de: "der Einkaufswagen", en: "shopping cart" },
      { de: "das Angebot", en: "offer / deal" },
      { de: "der Preis", en: "price" },
      { de: "bezahlen", en: "to pay" }
    ]
  },
  {
    id: 36,
    title: "Apartments & Rooms",
    german: "Die Wohnung & Zimmer",
    english: "Apartments & Rooms",
    phonetic: "dee VOH-nung unt TSIM-er",
    examples: [
      { de: "Ich wohne in einer Wohnung.", en: "I live in an apartment." },
      { de: "Das Schlafzimmer ist groß.", en: "The bedroom is large." }
    ],
    vocab: [
      { de: "die Wohnung", en: "apartment" },
      { de: "das Haus", en: "house" },
      { de: "das Zimmer", en: "room" },
      { de: "das Schlafzimmer", en: "bedroom" },
      { de: "das Wohnzimmer", en: "living room" },
      { de: "das Badezimmer", en: "bathroom" },
      { de: "die Küche", en: "kitchen" }
    ]
  },
  {
    id: 37,
    title: "Furniture",
    german: "Die Möbel",
    english: "Furniture",
    phonetic: "dee MÖ-bel",
    examples: [
      { de: "Das Sofa ist sehr bequem.", en: "The sofa is very comfortable." },
      { de: "Der Tisch steht im Wohnzimmer.", en: "The table is in the living room." }
    ],
    vocab: [
      { de: "das Sofa", en: "sofa" },
      { de: "der Tisch", en: "table" },
      { de: "der Stuhl", en: "chair" },
      { de: "das Bett", en: "bed" },
      { de: "der Schrank", en: "wardrobe" },
      { de: "das Regal", en: "shelf" },
      { de: "die Lampe", en: "lamp" }
    ]
  },
  {
    id: 38,
    title: "Household Items",
    german: "Haushaltsgegenstände",
    english: "Household Items",
    phonetic: "HOWS-halts-geh-gen-shten-duh",
    examples: [
      { de: "Wo ist die Fernbedienung?", en: "Where is the remote control?" },
      { de: "Das Handtuch hängt im Bad.", en: "The towel is hanging in the bathroom." }
    ],
    vocab: [
      { de: "das Handtuch", en: "towel" },
      { de: "die Fernbedienung", en: "remote control" },
      { de: "der Staubsauger", en: "vacuum cleaner" },
      { de: "die Waschmaschine", en: "washing machine" },
      { de: "der Spiegel", en: "mirror" }
    ]
  },
  {
    id: 39,
    title: "Renting an Apartment",
    german: "Wohnung mieten",
    english: "Renting an Apartment",
    phonetic: "VOH-nung MEE-ten",
    examples: [
      { de: "Ich suche eine Wohnung.", en: "I am looking for an apartment." },
      { de: "Wie hoch ist die Miete?", en: "How high is the rent?" }
    ],
    vocab: [
      { de: "mieten", en: "to rent" },
      { de: "die Miete", en: "rent" },
      { de: "der Vermieter", en: "landlord" },
      { de: "der Mietvertrag", en: "rental contract" },
      { de: "die Kaution", en: "deposit" },
      { de: "die Nebenkosten", en: "utility costs" }
    ]
  },
  {
    id: 40,
    title: "Neighborhoods & Places",
    german: "Die Nachbarschaft",
    english: "Neighborhoods & Places",
    phonetic: "dee NAKH-bar-shaft",
    examples: [
      { de: "Das Café ist um die Ecke.", en: "The café is around the corner." },
      { de: "Es gibt einen Park in der Nähe.", en: "There is a park nearby." }
    ],
    vocab: [
      { de: "die Straße", en: "street" },
      { de: "der Park", en: "park" },
      { de: "das Café", en: "café" },
      { de: "die Bibliothek", en: "library" },
      { de: "die Schule", en: "school" },
      { de: "das Krankenhaus", en: "hospital" },
      { de: "der Bahnhof", en: "train station" }
    ]
  },
  {
    id: 41,
    title: "Countries & Nationalities",
    german: "Länder & Nationalitäten",
    english: "Countries & Nationalities",
    phonetic: "LEN-der unt nah-tsyoh-nah-lee-TÄ-ten",
    examples: [
      { de: "Ich komme aus Indien.", en: "I come from India." },
      { de: "Er ist Deutscher.", en: "He is German." }
    ],
    vocab: [
      { de: "Deutschland", en: "Germany" },
      { de: "Österreich", en: "Austria" },
      { de: "die Schweiz", en: "Switzerland" },
      { de: "Indien", en: "India" },
      { de: "Frankreich", en: "France" },
      { de: "Spanien", en: "Spain" },
      { de: "die USA", en: "the USA" }
    ]
  },
  {
    id: 42,
    title: "Languages",
    german: "Sprachen",
    english: "Languages",
    phonetic: "SHPRA-khen",
    examples: [
      { de: "Ich spreche Deutsch und Englisch.", en: "I speak German and English." },
      { de: "Lernst du eine neue Sprache?", en: "Are you learning a new language?" }
    ],
    vocab: [
      { de: "Deutsch", en: "German" },
      { de: "Englisch", en: "English" },
      { de: "Französisch", en: "French" },
      { de: "Spanisch", en: "Spanish" },
      { de: "sprechen", en: "to speak" },
      { de: "verstehen", en: "to understand" }
    ]
  },
  {
    id: 43,
    title: "Professions",
    german: "Berufe",
    english: "Professions",
    phonetic: "buh-ROO-fuh",
    examples: [
      { de: "Ich bin Arzt von Beruf.", en: "I am a doctor by profession." },
      { de: "Sie arbeitet als Lehrerin.", en: "She works as a teacher." }
    ],
    vocab: [
      { de: "der Arzt / die Ärztin", en: "doctor" },
      { de: "der Lehrer / die Lehrerin", en: "teacher" },
      { de: "der Ingenieur", en: "engineer" },
      { de: "der Koch / die Köchin", en: "cook" },
      { de: "der Polizist", en: "police officer" },
      { de: "der Pilot", en: "pilot" }
    ]
  },
  {
    id: 44,
    title: "Asking for Help",
    german: "Um Hilfe bitten",
    english: "Asking for Help",
    phonetic: "um HIL-fuh BIT-en",
    examples: [
      { de: "Können Sie mir bitte helfen?", en: "Can you please help me?" },
      { de: "Ich habe ein Problem.", en: "I have a problem." }
    ],
    vocab: [
      { de: "Hilfe!", en: "Help!" },
      { de: "Können Sie helfen?", en: "Can you help?" },
      { de: "Ich verstehe nicht.", en: "I don't understand." },
      { de: "Sprechen Sie langsamer?", en: "Could you speak more slowly?" },
      { de: "Wiederholen Sie bitte.", en: "Please repeat." }
    ]
  },
  {
    id: 45,
    title: "Weather",
    german: "Das Wetter",
    english: "The Weather",
    phonetic: "dahs VET-er",
    examples: [
      { de: "Heute scheint die Sonne.", en: "The sun is shining today." },
      { de: "Es regnet stark.", en: "It is raining heavily." }
    ],
    vocab: [
      { de: "die Sonne", en: "sun" },
      { de: "der Regen", en: "rain" },
      { de: "der Schnee", en: "snow" },
      { de: "der Wind", en: "wind" },
      { de: "das Gewitter", en: "thunderstorm" },
      { de: "sonnig", en: "sunny" },
      { de: "bewölkt", en: "cloudy" }
    ]
  },
  {
    id: 46,
    title: "Seasons",
    german: "Die Jahreszeiten",
    english: "The Seasons",
    phonetic: "dee YAH-res-tsy-ten",
    examples: [
      { de: "Im Sommer ist es heiß.", en: "In summer it is hot." },
      { de: "Im Winter schneit es oft.", en: "In winter it often snows." }
    ],
    vocab: [
      { de: "der Frühling", en: "spring" },
      { de: "der Sommer", en: "summer" },
      { de: "der Herbst", en: "autumn" },
      { de: "der Winter", en: "winter" },
      { de: "heiß / kalt", en: "hot / cold" },
      { de: "warm / kühl", en: "warm / cool" }
    ]
  },
  {
    id: 47,
    title: "Clothes",
    german: "Kleidung",
    english: "Clothes",
    phonetic: "KLY-dung",
    examples: [
      { de: "Ich trage heute eine Jacke.", en: "I am wearing a jacket today." },
      { de: "Die Hose ist zu eng.", en: "The trousers are too tight." }
    ],
    vocab: [
      { de: "die Jacke", en: "jacket" },
      { de: "die Hose", en: "trousers" },
      { de: "das Hemd", en: "shirt" },
      { de: "das Kleid", en: "dress" },
      { de: "der Rock", en: "skirt" },
      { de: "die Schuhe", en: "shoes" },
      { de: "die Mütze", en: "hat / beanie" }
    ]
  },
  {
    id: 48,
    title: "Colors",
    german: "Farben",
    english: "Colors",
    phonetic: "FAR-ben",
    examples: [
      { de: "Mein Auto ist blau.", en: "My car is blue." },
      { de: "Das rote Kleid ist schön.", en: "The red dress is beautiful." }
    ],
    vocab: [
      { de: "rot", en: "red" },
      { de: "blau", en: "blue" },
      { de: "grün", en: "green" },
      { de: "gelb", en: "yellow" },
      { de: "schwarz", en: "black" },
      { de: "weiß", en: "white" },
      { de: "grau", en: "grey" },
      { de: "braun", en: "brown" }
    ]
  },
  {
    id: 49,
    title: "Shopping",
    german: "Einkaufen",
    english: "Shopping",
    phonetic: "YN-kow-fen",
    examples: [
      { de: "Ich möchte das kaufen.", en: "I would like to buy this." },
      { de: "Haben Sie das in Größe M?", en: "Do you have this in size M?" }
    ],
    vocab: [
      { de: "kaufen", en: "to buy" },
      { de: "das Geschäft", en: "shop / store" },
      { de: "die Größe", en: "size" },
      { de: "die Umkleidekabine", en: "changing room" },
      { de: "der Rabatt", en: "discount" },
      { de: "das Sonderangebot", en: "special offer" }
    ]
  },
  {
    id: 50,
    title: "Prices & Money",
    german: "Preise & Geld",
    english: "Prices & Money",
    phonetic: "PRY-zuh unt gelt",
    examples: [
      { de: "Wie viel kostet das?", en: "How much does that cost?" },
      { de: "Kann ich mit Karte zahlen?", en: "Can I pay by card?" }
    ],
    vocab: [
      { de: "der Euro", en: "euro" },
      { de: "der Cent", en: "cent" },
      { de: "das Bargeld", en: "cash" },
      { de: "die Karte", en: "card" },
      { de: "teuer", en: "expensive" },
      { de: "günstig / billig", en: "cheap / inexpensive" },
      { de: "das Wechselgeld", en: "change (money)" }
    ]
  },
  {
    id: 51,
    title: "Post Office",
    german: "Die Post",
    english: "The Post Office",
    phonetic: "dee posht",
    examples: [
      { de: "Ich möchte einen Brief schicken.", en: "I would like to send a letter." },
      { de: "Wo ist der nächste Briefkasten?", en: "Where is the nearest postbox?" }
    ],
    vocab: [
      { de: "die Post", en: "post office / mail" },
      { de: "der Brief", en: "letter" },
      { de: "das Paket", en: "parcel" },
      { de: "die Briefmarke", en: "stamp" },
      { de: "schicken", en: "to send" },
      { de: "das Porto", en: "postage" }
    ]
  },
  {
    id: 52,
    title: "Bank Vocabulary",
    german: "Die Bank",
    english: "At the Bank",
    phonetic: "dee bank",
    examples: [
      { de: "Ich möchte Geld abheben.", en: "I would like to withdraw money." },
      { de: "Kann ich ein Konto eröffnen?", en: "Can I open an account?" }
    ],
    vocab: [
      { de: "die Bank", en: "bank" },
      { de: "das Konto", en: "account" },
      { de: "abheben", en: "to withdraw" },
      { de: "einzahlen", en: "to deposit" },
      { de: "überweisen", en: "to transfer" },
      { de: "der Geldautomat", en: "ATM" }
    ]
  },
  {
    id: 53,
    title: "Pharmacy",
    german: "Die Apotheke",
    english: "The Pharmacy",
    phonetic: "dee ah-poh-TEH-kuh",
    examples: [
      { de: "Haben Sie etwas gegen Kopfschmerzen?", en: "Do you have something for headaches?" },
      { de: "Ich brauche ein Rezept.", en: "I need a prescription." }
    ],
    vocab: [
      { de: "die Apotheke", en: "pharmacy" },
      { de: "das Medikament", en: "medication" },
      { de: "das Rezept", en: "prescription" },
      { de: "die Tablette", en: "tablet" },
      { de: "der Hustensaft", en: "cough syrup" },
      { de: "das Pflaster", en: "plaster / bandage" }
    ]
  },
  {
    id: 54,
    title: "Doctor Visit",
    german: "Beim Arzt",
    english: "At the Doctor",
    phonetic: "bym artst",
    examples: [
      { de: "Ich fühle mich nicht gut.", en: "I don't feel well." },
      { de: "Ich habe Fieber.", en: "I have a fever." }
    ],
    vocab: [
      { de: "der Arzt", en: "doctor" },
      { de: "das Krankenhaus", en: "hospital" },
      { de: "schmerzen", en: "to hurt" },
      { de: "das Fieber", en: "fever" },
      { de: "die Erkältung", en: "cold" },
      { de: "der Termin", en: "appointment" }
    ]
  },
  {
    id: 55,
    title: "Body Parts",
    german: "Der Körper",
    english: "Body Parts",
    phonetic: "der KÖR-per",
    examples: [
      { de: "Mein Kopf tut weh.", en: "My head hurts." },
      { de: "Ich habe Rückenschmerzen.", en: "I have back pain." }
    ],
    vocab: [
      { de: "der Kopf", en: "head" },
      { de: "das Auge", en: "eye" },
      { de: "die Nase", en: "nose" },
      { de: "der Mund", en: "mouth" },
      { de: "der Arm", en: "arm" },
      { de: "das Bein", en: "leg" },
      { de: "der Bauch", en: "stomach" }
    ]
  },
  {
    id: 56,
    title: "Feelings & Emotions",
    german: "Gefühle",
    english: "Feelings & Emotions",
    phonetic: "guh-FÜH-luh",
    examples: [
      { de: "Ich bin glücklich!", en: "I am happy!" },
      { de: "Sie ist sehr traurig.", en: "She is very sad." }
    ],
    vocab: [
      { de: "glücklich", en: "happy" },
      { de: "traurig", en: "sad" },
      { de: "aufgeregt", en: "excited" },
      { de: "müde", en: "tired" },
      { de: "wütend", en: "angry" },
      { de: "nervös", en: "nervous" },
      { de: "überrascht", en: "surprised" }
    ]
  },
  {
    id: 57,
    title: "Politeness & Manners",
    german: "Höflichkeit",
    english: "Politeness & Manners",
    phonetic: "HÖF-likh-kyt",
    examples: [
      { de: "Bitte und Danke sind wichtig.", en: "Please and thank you are important." },
      { de: "Entschuldigung, darf ich?", en: "Excuse me, may I?" }
    ],
    vocab: [
      { de: "bitte", en: "please" },
      { de: "danke", en: "thank you" },
      { de: "bitte sehr", en: "you're welcome" },
      { de: "Entschuldigung", en: "excuse me / sorry" },
      { de: "Es tut mir leid.", en: "I'm sorry." },
      { de: "Kein Problem.", en: "No problem." }
    ]
  },
  {
    id: 58,
    title: "Asking & Giving Directions",
    german: "Den Weg fragen",
    english: "Asking & Giving Directions",
    phonetic: "den veg FRAH-gen",
    examples: [
      { de: "Wie komme ich zum Bahnhof?", en: "How do I get to the train station?" },
      { de: "Gehen Sie geradeaus.", en: "Go straight ahead." }
    ],
    vocab: [
      { de: "links", en: "left" },
      { de: "rechts", en: "right" },
      { de: "geradeaus", en: "straight ahead" },
      { de: "die Ampel", en: "traffic light" },
      { de: "abbiegen", en: "to turn" },
      { de: "in der Nähe", en: "nearby" }
    ]
  },
  {
    id: 59,
    title: "Public Transport",
    german: "Öffentliche Verkehrsmittel",
    english: "Public Transport",
    phonetic: "ÖF-fent-li-khuh fer-KERS-mit-el",
    examples: [
      { de: "Ich fahre mit der U-Bahn.", en: "I travel by underground." },
      { de: "Der Bus kommt in 5 Minuten.", en: "The bus comes in 5 minutes." }
    ],
    vocab: [
      { de: "die U-Bahn", en: "underground / subway" },
      { de: "der Bus", en: "bus" },
      { de: "die Straßenbahn", en: "tram" },
      { de: "die Haltestelle", en: "stop" },
      { de: "das Ticket", en: "ticket" },
      { de: "einsteigen", en: "to board" },
      { de: "aussteigen", en: "to get off" }
    ]
  },
  {
    id: 60,
    title: "At the Train Station",
    german: "Am Bahnhof",
    english: "At the Train Station",
    phonetic: "am BAHN-hof",
    examples: [
      { de: "Wann fährt der nächste Zug?", en: "When does the next train leave?" },
      { de: "Eine Fahrkarte nach Berlin, bitte.", en: "One ticket to Berlin, please." }
    ],
    vocab: [
      { de: "der Zug", en: "train" },
      { de: "die Fahrkarte", en: "ticket" },
      { de: "der Bahnsteig", en: "platform" },
      { de: "abfahren", en: "to depart" },
      { de: "ankommen", en: "to arrive" },
      { de: "der Verspätung", en: "delay" }
    ]
  },
  {
    id: 61,
    title: "At the Airport",
    german: "Am Flughafen",
    english: "At the Airport",
    phonetic: "am FLOOK-hah-fen",
    examples: [
      { de: "Wo ist das Abfluggate?", en: "Where is the departure gate?" },
      { de: "Mein Koffer ist weg.", en: "My suitcase is gone." }
    ],
    vocab: [
      { de: "der Flughafen", en: "airport" },
      { de: "das Flugzeug", en: "airplane" },
      { de: "das Gate", en: "gate" },
      { de: "einchecken", en: "to check in" },
      { de: "der Koffer", en: "suitcase" },
      { de: "der Reisepass", en: "passport" }
    ]
  },
  {
    id: 62,
    title: "Traveling",
    german: "Reisen",
    english: "Traveling",
    phonetic: "RY-zen",
    examples: [
      { de: "Ich reise gerne.", en: "I love to travel." },
      { de: "Wir buchen ein Hotel.", en: "We are booking a hotel." }
    ],
    vocab: [
      { de: "reisen", en: "to travel" },
      { de: "das Hotel", en: "hotel" },
      { de: "buchen", en: "to book" },
      { de: "die Unterkunft", en: "accommodation" },
      { de: "die Sehenswürdigkeit", en: "tourist attraction" },
      { de: "die Karte", en: "map" }
    ]
  },
  {
    id: 63,
    title: "School & Education",
    german: "Schule & Bildung",
    english: "School & Education",
    phonetic: "SHOO-luh unt BIL-dung",
    examples: [
      { de: "Ich lerne in der Schule.", en: "I learn at school." },
      { de: "Er studiert an der Universität.", en: "He studies at university." }
    ],
    vocab: [
      { de: "die Schule", en: "school" },
      { de: "die Universität", en: "university" },
      { de: "der Lehrer", en: "teacher" },
      { de: "der Schüler", en: "pupil" },
      { de: "das Heft", en: "notebook" },
      { de: "der Stift", en: "pen / pencil" },
      { de: "die Hausaufgaben", en: "homework" }
    ]
  },
  {
    id: 64,
    title: "Work & Office",
    german: "Arbeit & Büro",
    english: "Work & Office",
    phonetic: "AR-byt unt BÜ-roh",
    examples: [
      { de: "Ich arbeite im Büro.", en: "I work in the office." },
      { de: "Das Meeting beginnt um 9 Uhr.", en: "The meeting starts at 9 o'clock." }
    ],
    vocab: [
      { de: "das Büro", en: "office" },
      { de: "der Computer", en: "computer" },
      { de: "das Meeting", en: "meeting" },
      { de: "die E-Mail", en: "email" },
      { de: "der Chef", en: "boss" },
      { de: "der Kollege", en: "colleague" },
      { de: "arbeiten", en: "to work" }
    ]
  },
  {
    id: 65,
    title: "Review & Auf Wiedersehen!",
    german: "Auf Wiedersehen!",
    english: "Goodbye! Keep Learning!",
    phonetic: "owf VEE-der-zeh-en",
    examples: [
      { de: "Herzlichen Glückwunsch! Du hast A1 geschafft!", en: "Congratulations! You have completed A1!" },
      { de: "Mach weiter so! Du bist toll!", en: "Keep it up! You are great!" }
    ],
    vocab: [
      { de: "Herzlichen Glückwunsch!", en: "Congratulations!" },
      { de: "Auf Wiedersehen", en: "Goodbye" },
      { de: "Bis bald", en: "See you soon" },
      { de: "Weiter so!", en: "Keep it up!" },
      { de: "Ich habe es geschafft!", en: "I did it!" },
      { de: "Danke fürs Lernen!", en: "Thanks for learning!" }
    ]
  }
];
