const knowldgeBaseNew = {
  company: {
    name: "YoungLabs",
    description:
      "YoungLabs is an educational company focused on skill development for children and young learners. We provide customized courses designed for specific age groups with flexible learning plans.",
    contact: {
      phone: "+91-9289029696",
      website: "https://www.younglabs.in/",
    },
  },

  frequentlyAskedQuestions: [
    {
      question: "Benefits of Maths Learning Course",
      answer:
        "YoungLabs Maths Learning Course strengthens number sense, logical reasoning, and problem-solving. It is age-specific, includes interactive sessions, and ensures conceptual clarity—from basic operations to algebra and geometry building confidence for lifelong mathematical success",
    },
    {
      question: "Acedamic Excellance Program",
      answer:
        "YoungLabs' Academic Excellence Program is a structured online tuition solution for students from Class 1 to 12. It covers subjects like Maths, English, Science (Physics, Chemistry, Biology), Hindi, Social Studies, Business Studies, and Commerce. Available in 36, 72, and 144 sessions for 3, 6, and 12 months",
    },
    {
      question: "Benefits of Handwritting Improvement Course",
      answer:
        "YoungLabs Handwriting Improvement Course enhances writing speed, legibility, and posture. Through structured strokes, word joining, and sentence practice, children build confidence and fluency improving both academic performance and presentation skills across subjects",
    },
    {
      question: "Benefits of English Wholistic Learning Program",
      answer:
        "YoungLabs' English Wholistic Learning Program builds strong foundations in reading, grammar, vocabulary, creative writing, and public speaking. It enhances communication skills, boosts confidence, and nurtures overall language development tailored to your child's age and learning level",
    },
    {
      question: "Why I choose YoungLabs",
      answer:
        "YoungLabs offers age-specific, skill-based learning with flexible plans. Their courses are interactive, personalized, and designed to build strong academic foundations in Maths, English, and more making learning effective, engaging, and result-driven for children.",
    },
    {
      question: "How can i contact your team?",
      answer:
        "Sure! You can reach our team on WhatsApp at +91 9289029696. We're here to help!",
    },
    {
      question: "Cancellation & Refund Policy",
      answer:
        "To cancel your enrollment, send a written request via email or WhatsApp at least 24 hours before the course starts for a full refund. Cancellations made within 24 hours of the start are subject to a 25% cancellation fee. Refunds are prorated based on course completion. No refunds for completed courses. If YoungLabs cancels a course, you receive a full refund. Refunds are processed within 5–7 business days.For assistance, contact us at contact@younglabs.in or +91 9289029696",
    },
  ],

  courseTypes: {
    rapid: {
      name: "Rapid Course",
      sessions: [
        {
          count: 12,
          duration: "1 month",
          description: "Quick skill building in focused areas",
        },
        {
          count: 24,
          duration: "2 months",
          description: "Comprehensive rapid learning experience",
        },
      ],
    },
    foundational: {
      name: "Foundational  Course",
      sessions: [
        {
          count: 36,
          duration: "3 months",
          description: "Structured learning with detailed curriculum",
        },
        {
          count: 72,
          duration: "6 months",
          description: "In-depth academic development",
        },
        {
          count: 108,
          duration: "1 year",
          description: "Complete mastery program",
        },
      ],
    },
    academicExcellenceProgram: {
      name: "Academic Excellence Program",
      sessions: [
        {
          count: 36,
          duration: "3 months",
          description: "Structured learning with detailed curriculum",
        },
        {
          count: 72,
          duration: "6 months",
          description: "In-depth academic development",
        },
        {
          count: 144,
          duration: "1 year",
          description: "Complete mastery program",
        },
      ],
    },
  },

  rapidCourses: [
    {
      name: "English Cursive Handwriting",
      availableBatchTypes: ["Solo Batch", "Group Batch"],
      sessions12: {
        topics: [
          "Basic Strokes",
          "Pen Holding",
          "Posture",
          "Words Joining",
          "Sentence Practice",
          "Paragraph Practice",
          "Speed sessions",
        ],
      },
      sessions24: {
        topics: [
          "Basic Strokes",
          "Pen Holding",
          "Posture",
          "Words Joining",
          "Sentence Practice",
          "Paragraph Practice",
          "Speed Sessions",
          "Speed Practice Extra",
          "Punctuation Marks",
          "Exam Preparation",
          "Competition",
        ],
      },
    },
    {
      name: "Spelling Power Pack",
      availableBatchTypes: ["Solo Batch"],
      sessions12: {
        topics: [
          "Letter Formation Practice",
          "Basic Spelling Rules",
          "Commonly Misspelled Words (1-50)",
          "Short Vowel Sounds and Spellings",
          "Word Families and Patterns",
          "Phonics-Based Spelling Practice",
          "Simple Word Building Exercises",
          "Introduction to Sight Words",
          "Spelling with Fun Games",
          "Practice Worksheets and Drills",
          "Dictation and Oral Spelling Practice",
          "Confidence Building with Spelling",
        ],
      },
      sessions24: {
        topics: [
          "Letter Formation Practice",
          "Basic Spelling Rules",
          "Commonly Misspelled Words (1-100)",
          "Short Vowel Sounds and Spellings",
          "Word Families and Patterns",
          "Phonics-Based Spelling Practice",
          "Simple Word Building Exercises",
          "Introduction to Sight Words",
          "Spelling with Fun Games",
          "Practice Worksheets and Drills",
          "Dictation and Oral Spelling Practice",
          "Confidence Building with Spelling",
          "Advanced Spelling Patterns",
          "Silent Letters in Words",
          "Prefixes, Suffixes, and Spellings",
          "Homophones and Homonyms Practice",
          "Root Words and Word Formation",
          "Long Vowel Sounds and Spellings",
          "Irregular Spellings and Exceptions",
          "Spelling Bee Style Practice",
          "Word Application in Sentences",
          "Punctuation and Spelling Accuracy",
          "Exam-Oriented Spelling Practice",
          "Competition Preparation Techniques",
        ],
      },
    },
    {
      name: "Maths Tables Mastery",
      availableBatchTypes: ["Solo Batch"],
      sessions12: {
        topics: [
          "Introduction to Tables (1 to 10)",
          "Understanding Multiplication Concepts",
          "Skip Counting Techniques",
          "Memorization Strategies",
          "Fun with Table Patterns",
          "Chanting and Repetition Exercises",
          "Quick Recall Practice",
          "Tables in Daily Life Examples",
          "Flash Card Activities",
          "Oral Test Practice",
          "Confidence Building with Tables",
        ],
      },
      sessions24: {
        topics: [
          "Complete Tables (1 to 20)",
          "Advanced Multiplication Concepts",
          "Speed Recall Activities",
          "Challenging Table Patterns",
          "Advanced Multiplication Tricks",
          "Application in Word Problems",
          "Competition Style Practice",
          "Mixed Table Drills",
          "Rapid Fire Table Rounds",
          "Timed Practice Sessions",
          "Mental Math Strategies",
          "Confidence Under Pressure Practice",
        ],
      },
    },
    {
      name: "General Knowledge For Kids",
      availableBatchTypes: ["Solo Batch", "Group Batch"],
      sessions12: {
        topics: [
          "Introduction to General Knowledge",
          "Famous Personalities",
          "National Symbols of India",
          "Basic World Capitals & Countries",
          "Famous Monuments",
          "Important Days and Festivals",
          "Our Solar System - Basic Facts",
          "Continents and Oceans",
          "Animal Kingdom Basics",
          "Fruits and Vegetables Knowledge",
          "Simple Science Facts",
          "Confidence Building with GK Quizzes",
        ],
      },
      sessions24: {
        topics: [
          "Comprehensive Indian Knowledge",
          "World Geography Essentials",
          "Historical Events and Personalities",
          "Scientific Discoveries",
          "Sports and Games",
          "Art and Culture",
          "Current Affairs Basics",
          "Environmental Awareness",
          "Technology and Innovation",
          "Quiz Competition Preparation",
          "Rapid Fire GK Practice",
          "Critical Thinking with Facts",
        ],
      },
    },
    {
      name: "Grammar Mastery",
      availableBatchTypes: ["Solo Batch"],
      sessions12: {
        topics: {
          age_group_5_7: [
            "Introduction to Phonics: Lay the foundation for English language skills through interactive phonics activities.",
            "Basic Reading Readiness: Foster early reading habits and introduce fundamental reading comprehension strategies.",
            "Confidence Building in Public Speaking: Initiate confidence-building exercises to ease young learners into expressing themselves in a supportive environment.",
            "Vocabulary Expansion: Expand vocabulary through engaging activities and exposure to age-appropriate literature.",
          ],
          age_group_8_10: [
            "Introduction to Phonics and Reading: Develop foundational phonics skills and cultivate a love for reading through engaging activities.",
            "Grammar Fundamentals: Lay the groundwork for strong grammar skills, focusing on essential concepts for effective communication.",
            "Initiation to Public Speaking: Build confidence in expressing ideas, overcoming fear, and mastering basic public speaking techniques.",
            "Creative Writing Basics: Introduce the fundamentals of creative writing, encouraging imaginative expression and storytelling.",
            "Holistic English Development: Foster a well-rounded English development approach, incorporating key language skills in a comprehensive manner.",
          ],
          age_group_11_14: [
            "Build Fundamental Skills: Develop a strong foundation in reading, grammar, public speaking, and creative writing for overall English language proficiency.",
            "Enhance Vocabulary and Comprehension: Expand vocabulary and improve comprehension skills through engaging activities and exercises.",
            "Introduction to Public Speaking: Introduce basic principles of public speaking, focusing on overcoming fear, building confidence, and effective communication.",
            "Creative Writing Basics: Explore the fundamentals of creative writing, including storytelling, descriptive writing, and character development.",
          ],
        },
      },
      sessions36: {
        topics: {
          age_group_5_7: [
            "Phonics Mastery: Develop strong phonics skills for enhanced reading and spelling proficiency.",
            "Comprehensive Reading Skills: Advance reading comprehension abilities through varied texts and discussions.",
            "Public Speaking Fluency: Build fluency in public speaking with structured exercises and presentations.",
            "Grammar Fundamentals: Introduce and reinforce foundational grammar concepts for effective communication.",
          ],
          age_group_8_10: [
            "Advanced Phonics Mastery: Dive deeper into phonics, refining pronunciation and decoding skills for increased reading fluency.",
            "Comprehensive Reading Strategies: Develop advanced reading comprehension techniques and strategies for diverse literary genres.",
            "Grammar Proficiency: Strengthen grammatical knowledge, emphasizing complex structures and usage in various contexts.",
            "Elevated Public Speaking Skills: Enhance public speaking proficiency, covering advanced techniques, persuasive communication, and effective audience engagement.",
            "Creative Writing Excellence: Hone creative writing skills with a focus on crafting compelling narratives, descriptive language, and storytelling elements.",
          ],
          age_group_11_14: [
            "Comprehensive Language Mastery: Delve deeper into reading, grammar, public speaking, and creative writing to achieve a comprehensive understanding and mastery of the English language.",
            "Advanced Vocabulary Development: Expand and refine vocabulary for more sophisticated expression in both spoken and written communication.",
            "Advanced Public Speaking Techniques: Explore advanced public speaking techniques, including persuasive speaking, audience engagement, and effective presentation skills.",
            "Advanced Creative Writing Techniques: Hone advanced creative writing skills, such as plot development, dialogue writing, and thematic exploration.",
          ],
        },
      },
      sessions72: {
        topics: {
          age_group_5_7: [
            "Advanced Phonics and Word Recognition: Master advanced phonics patterns and improve word recognition skills.",
            "Critical Thinking in Reading: Foster critical thinking skills through in-depth analysis of diverse texts.",
            "Advanced Public Speaking Techniques: Hone advanced public speaking techniques, including body language and audience engagement.",
            "Creative Writing Exploration: Encourage creativity and self-expression through guided creative writing activities.",
          ],
          age_group_8_10: [
            "Phonics Mastery and Application: Achieve mastery in phonics and apply acquired skills to diverse reading materials, building advanced language proficiency.",
            "Literary Exploration and Analysis: Explore and analyze classic and contemporary literature, fostering a deeper understanding of literary elements and themes.",
            "Grammar Mastery and Application: Attain a high level of grammatical proficiency, applying advanced grammar rules to enhance written and spoken communication.",
            "Mastering the Art of Persuasion: Delve into advanced public speaking techniques, persuasive communication, and effective speech delivery for various audiences.",
            "Creative Writing Masterclass: Engage in an immersive creative writing masterclass, refining writing styles, exploring diverse genres, and polishing storytelling skills.",
          ],
          age_group_11_14: [
            "Expert-Level Proficiency: Attain expert-level proficiency in reading, grammar, public speaking, and creative writing through an extended and intensive learning journey.",
            "Extensive Vocabulary Mastery: Master an extensive vocabulary range to articulate ideas with precision and eloquence.",
            "Mastery of Public Speaking Dynamics: Achieve mastery in public speaking dynamics, including impromptu speaking, effective use of visuals, and adapting to diverse audiences.",
            "Advanced Creative Writing Mastery: Achieve mastery in advanced creative writing techniques, enabling participants to create compelling and nuanced narratives.",
          ],
        },
      },
    },
  ],

  foundationalCourses: [
    {
      name: "English Wholistic Development Course",
      availableBatchTypes: ["Solo Batch"],
      sessions36: {
        topics: {
          age_group_5_7: [
            "Introduction to Phonics: Lay the foundation for English language skills through interactive phonics activities.",
            "Basic Reading Readiness: Foster early reading habits and introduce fundamental reading comprehension strategies.",
            "Confidence Building in Public Speaking: Initiate confidence-building exercises to ease young learners into expressing themselves in a supportive environment.",
            "Vocabulary Expansion: Expand vocabulary through engaging activities and exposure to age-appropriate literature.",
          ],
          age_group_8_10: [
            "Introduction to Phonics and Reading: Develop foundational phonics skills and cultivate a love for reading through engaging activities.",
            "Grammar Fundamentals: Lay the groundwork for strong grammar skills, focusing on essential concepts for effective communication.",
            "Initiation to Public Speaking: Build confidence in expressing ideas, overcoming fear, and mastering basic public speaking techniques.",
            "Creative Writing Basics: Introduce the fundamentals of creative writing, encouraging imaginative expression and storytelling.",
            "Holistic English Development: Foster a well-rounded English development approach, incorporating key language skills in a comprehensive manner.",
          ],
          age_group_11_14: [
            "Build Fundamental Skills: Develop a strong foundation in reading, grammar, public speaking, and creative writing for overall English language proficiency.",
            "Enhance Vocabulary and Comprehension: Expand vocabulary and improve comprehension skills through engaging activities and exercises.",
            "Introduction to Public Speaking: Introduce basic principles of public speaking, focusing on overcoming fear, building confidence, and effective communication.",
            "Creative Writing Basics: Explore the fundamentals of creative writing, including storytelling, descriptive writing, and character development.",
          ],
        },
      },
      sessions72: {
        topics: {
          age_group_5_7: [
            "Phonics Mastery: Develop strong phonics skills for enhanced reading and spelling proficiency.",
            "Comprehensive Reading Skills: Advance reading comprehension abilities through varied texts and discussions.",
            "Public Speaking Fluency: Build fluency in public speaking with structured exercises and presentations.",
            "Grammar Fundamentals: Introduce and reinforce foundational grammar concepts for effective communication.",
          ],
          age_group_8_10: [
            "Advanced Phonics Mastery: Dive deeper into phonics, refining pronunciation and decoding skills for increased reading fluency.",
            "Comprehensive Reading Strategies: Develop advanced reading comprehension techniques and strategies for diverse literary genres.",
            "Grammar Proficiency: Strengthen grammatical knowledge, emphasizing complex structures and usage in various contexts.",
            "Elevated Public Speaking Skills: Enhance public speaking proficiency, covering advanced techniques, persuasive communication, and effective audience engagement.",
            "Creative Writing Excellence: Hone creative writing skills with a focus on crafting compelling narratives, descriptive language, and storytelling elements.",
          ],
          age_group_11_14: [
            [
              "Comprehensive Language Mastery: Delve deeper into reading, grammar, public speaking, and creative writing to achieve a comprehensive understanding and mastery of the English language.",
              "Advanced Vocabulary Development: Expand and refine vocabulary for more sophisticated expression in both spoken and written communication.",
              "Advanced Public Speaking Techniques: Explore advanced public speaking techniques, including persuasive speaking, audience engagement, and effective presentation skills.",
              "Advanced Creative Writing Techniques: Hone advanced creative writing skills, such as plot development, dialogue writing, and thematic exploration.",
            ],
          ],
        },
      },
      sessions108: {
        topics: {
          age_group_5_7: [
            "Advanced Phonics and Word Recognition: Master advanced phonics patterns and improve word recognition skills.",
            "Critical Thinking in Reading: Foster critical thinking skills through in-depth analysis of diverse texts.",
            "Advanced Public Speaking Techniques: Hone advanced public speaking techniques, including body language and audience engagement.",
            "Creative Writing Exploration: Encourage creativity and self-expression through guided creative writing activities.",
          ],
          age_group_8_10: [
            [
              "Phonics Mastery and Application: Achieve mastery in phonics and apply acquired skills to diverse reading materials, building advanced language proficiency.",
              "Literary Exploration and Analysis: Explore and analyze classic and contemporary literature, fostering a deeper understanding of literary elements and themes.",
              "Grammar Mastery and Application: Attain a high level of grammatical proficiency, applying advanced grammar rules to enhance written and spoken communication.",
              "Mastering the Art of Persuasion: Delve into advanced public speaking techniques, persuasive communication, and effective speech delivery for various audiences.",
              "Creative Writing Masterclass: Engage in an immersive creative writing masterclass, refining writing styles, exploring diverse genres, and polishing storytelling skills.",
            ],
          ],
          age_group_11_14: [
            "Expert-Level Proficiency: Attain expert-level proficiency in reading, grammar, public speaking, and creative writing through an extended and intensive learning journey.",
            "Extensive Vocabulary Mastery: Master an extensive vocabulary range to articulate ideas with precision and eloquence.",
            "Mastery of Public Speaking Dynamics: Achieve mastery in public speaking dynamics, including impromptu speaking, effective use of visuals, and adapting to diverse audiences.",
            "Advanced Creative Writing Mastery: Achieve mastery in advanced creative writing techniques, enabling participants to create compelling and nuanced narratives.",
          ],
        },
      },
    },
    {
      name: "Maths Learning",
      availableBatchTypes: ["Solo Batch"],
      sessions36: {
        topics: {
          age_group_5_7: [
            "Shapes",
            "Patterns",
            "Assessments",
            "Number Sense",
            "Introduction to Tables",
          ],
          age_group_8_10: [
            "Place Values",
            "Number Words",
            "Logical Reasoning",
            "Intro to Multiplication",
            "Intro to Time and Money",
          ],
          age_group_11_14: [
            "Number System",
            "Algebra",
            "Fractions And Decimals",
            "Integers",
            "Rational Numbers",
          ],
        },
      },
      sessions72: {
        topics: {
          age_group_5_7: [
            "Introduction To Numbers",
            "Basic Operations (Addition & Subtraction)",
            "Shapes And Patterns",
            "Measurement And Time",
            "Data And Graphs",
          ],
          age_group_8_10: [
            "Place Value",
            "Addition & Subtraction",
            "Fractions And Decimals",
            "Geometry & Measurement",
            "Data And Statistics",
            "Ratio & Proportion",
          ],
          age_group_11_14: [
            "Number System",
            "Algebra",
            "Fractions And Decimals",
            "Integers",
            "Rational Numbers",
            "Algebraic Expressions And Equations",
            "Exponents And Powers",
          ],
        },
      },
      sessions108: {
        topics: {
          age_group_5_7: [
            "Place Value",
            "Addition & Subtraction",
            "Fractions And Decimals",
            "Geometry & Measurement",
            "Data And Statistics",
            "Ratio & Proportion",
            "Statistics And Probability",
            "Coordinate Geometry",
          ],
          age_group_8_10: [
            "Place Value",
            "Addition & Subtraction",
            "Fractions And Decimals",
            "Geometry & Measurement",
            "Data And Statistics",
            "Ratio & Proportion",
            "Time And Money",
            "Algebraic Thinking",
          ],
          age_group_11_14: [
            "Number System",
            "Algebra",
            "Fractions And Decimals",
            "Integers",
            "Rational Numbers",
            "Algebraic Expressions And Equations",
            "Exponents And Powers",
            "Statistics And Probability",
            "Coordinate Geometry",
          ],
        },
      },
    },
  ],

  academicExcellenceProgramCourses: [
    {
      name: "English Learning",
      availableBatchTypes: ["Solo Batch"],
    },
    {
      name: "Maths Learning",
      availableBatchTypes: ["Solo Batch"],
    },
    {
      name: "Hindi Learning",
      availableBatchTypes: ["Solo Batch"],
    },
    {
      name: "Science Learning",
      availableBatchTypes: ["Solo Batch"],
    },
    {
      name: "Social Science Learning",
      availableBatchTypes: ["Solo Batch"],
    },
    {
      name: "Physics Learning",
      availableBatchTypes: ["Solo Batch"],
    },
    {
      name: "Chemistry Learning",
      availableBatchTypes: ["Solo Batch"],
    },
    {
      name: "Biology Learning",
      availableBatchTypes: ["Solo Batch"],
    },
  ],

  sales_script: [
    "Hi! Welcome to YoungLabs. Are you looking for courses that build your child's skills in English, Maths, or General Knowledge?",
    "We offer two types of courses: Rapid Courses (12 sessions/1 month or 24 sessions/2 months) for quick skill building in specific areas like Cursive Handwriting, Spelling, Tables, GK, and Grammar. We also have Foundational Courses (36 sessions/3 months, 72 sessions/6 months, or 144 sessions/1 year) for comprehensive development in English and Mathematics.",
    "Our courses are interactive, skill-based, and focus on building strong foundations and advanced skills depending on your child's learning goals.",
    "Would you like to know more about our Rapid Courses for quick skill building or our Academic Courses for comprehensive development?",
  ],
};
