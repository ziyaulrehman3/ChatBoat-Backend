export const KnowledgeBase = {
  company: {
    name: "YoungLabs",
    description:
      "YoungLabs is an edtech company providing foundational skill courses such as English, handwriting, and Vedic maths for children aged 5–14.",
    customerCare: "+91 9289029696",
    trustInfo:
      "Over 1000+ students taught. Demo classes, live feedback, and 900+ real reviews.",
    discount: "Contact us for ongoing offers.",
    timingInfo: "Classes are scheduled as per your availability.",
  },

  entries: [
    // 🔤 Course Overview
    {
      type: "course",
      course: "English Holistic Development",
      audience: "Ages 5–14",
      description:
        "Covers phonics, grammar, creative writing, reading, public speaking, and more. Customized based on age group.",
    },

    // 🧒 Age Group Specific Focus
    {
      type: "age_focus",
      course: "English Holistic Development",
      ageGroup: "5–7 years",
      focusAreas: ["Phonics", "Reading"],
      remarks:
        "Less grammar focus, emphasis on sound decoding and basic fluency.",
    },
    {
      type: "age_focus",
      course: "English Holistic Development",
      ageGroup: "8–10 years",
      focusAreas: ["Grammar", "Creative Writing Basics"],
      remarks:
        "Can read fluently, but struggles with combining ideas and writing.",
    },

    // 📘 Module: Phonics
    {
      type: "module",
      course: "English Holistic Development",
      module: "Phonics",
      topics: [
        "44 synthetic phonemes",
        "Short and long vowels",
        "Blends (bl, cl, gr, fr)",
        "Digraphs (ch, sh)",
        "Sight words",
        "Voice modulation",
      ],
    },

    // 📣 Module: Public Speaking
    {
      type: "module",
      course: "English Holistic Development",
      module: "Public Speaking",
      topics: [
        "Forming sentences using grammar",
        "Debates",
        "Picture description",
        "Speech delivery",
        "Similes & oxymorons",
        "Overcoming stage fear",
      ],
    },

    // 🎯 Methodology
    {
      type: "methodology",
      course: "English Holistic Development",
      framework: "PWAP (Presentation, Weakness ID, Assessment, Progress)",
      sessionStructure: "30 + 30 mins structure with interactive teaching",
      tools: ["Rating panel", "Visual progress reports", "Live feedback"],
    },

    // 🌟 Selling Points
    {
      type: "benefits",
      course: "English Holistic Development",
      points: [
        "Live sessions (not recorded)",
        "Flexible timings",
        "1:1 attention",
        "900+ genuine parent reviews",
        "Trusted by influencers",
      ],
    },

    // 🧾 Sales Pitch
    {
      type: "sales_pitch",
      course: "English Holistic Development",
      script:
        "Hey, I'm [Name] from YoungLabs. You showed interest in our English course. Can I explain how it helps with phonics, grammar, writing, and speaking?",
      question:
        "Could you rate your child (1–5) in: Phonics, Reading, Listening, Speaking, Writing?",
      outcome:
        "We generate a personalized plan and provide live demo + tracking.",
    },

    // ✍️ Another Course
    {
      type: "course",
      course: "Handwriting Improvement",
      audience: "Ages 5–10",
      description:
        "Focuses on clarity, speed, cursive practice, and improving letter consistency.",
    },

    {
      type: "module",
      course: "Handwriting Improvement",
      module: "Cursive Writing",
      topics: [
        "Letter joins",
        "Slant correction",
        "Word spacing",
        "Writing flow",
      ],
    },

    {
      type: "methodology",
      course: "Handwriting Improvement",
      framework: "Daily guided practice + weekly evaluations",
      tools: ["Before-after samples", "Progress sheets"],
    },
  ],
};
