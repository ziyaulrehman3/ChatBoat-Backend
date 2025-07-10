export const KnowledgeBase = {
  company: {
    name: "YoungLabs",
    customerCareNumber: "+91 9289029696",
    trustInfo:
      "You can trust YoungLabs—we've helped 1000+ students with expert courses. Demo classes and real results available.",
    website: "https://younglabs.in",
    pitch:
      "We are an e-learning company that provides foundational skill development courses for children in areas like handwriting, English, Vedic maths, and more.",
    discount: "Contact our team for discount",
    time: "Class time will be arrange accoring to your avilability",
  },

  courses: [
    {
      name: "English Holistic Development",
      ageGroups: {
        "5-7": {
          focus: ["Phonics", "Reading"],
          remarks: "Less grammar, focus on reading and sounds",
        },
        "8-10": {
          focus: ["Grammar", "Creative writing basics"],
          remarks: "Struggles with joining words or sentence flow",
        },
        "11-14": {
          focus: ["Advanced Grammar", "Public Speaking", "Creative Writing"],
          remarks: "Ready for debates and storytelling with structure",
        },
      },
      modules: [
        {
          name: "Phonics",
          topics: [
            "44 synthetic sounds (phonemes)",
            "Short & long vowels",
            "Blends (bl, cl, gr, fr)",
            "Digraphs (ch, sh)",
            "Sight words (the, do, with)",
            "Voice modulation",
          ],
        },
        {
          name: "Reading",
          topics: [
            "3-6 letter word reading",
            "Sentence to story reading",
            "Poems, Comprehension",
            "Vocabulary boosters",
            "Voice modulation with punctuation",
          ],
        },
        {
          name: "Grammar",
          topics: [
            "8 Parts of Speech",
            "Tenses (Past, Present, Future)",
            "Articles, Prepositions",
            "Tools to make grammar fun",
          ],
          painPoints: [
            "Grammar is boring but essential",
            "Students can't form correct sentences",
          ],
        },
        {
          name: "Public Speaking",
          topics: [
            "Sentence formation",
            "Debates, Speeches",
            "Picture description",
            "Similes & Oxymoron",
            "Confidence building",
          ],
          painPoints: ["Stage fear", "Introversion", "Poor sentence clarity"],
        },
        {
          name: "Creative Writing",
          topics: [
            "Ideation",
            "Paragraph & Essay writing",
            "Letter, Notice, Report",
            "Story & Dialogue writing",
            "Genre-based writing",
          ],
        },
      ],

      methodology: {
        framework: "PWAP (Presentation, Weakness ID, Assessment, Progress)",
        sessionFlow: "30-30 min structure with fun, interactive sessions",
        tools: ["Rating panel", "Visual reports", "Homework support"],
      },
      sellingPoints: [
        "Live sessions (not recorded)",
        "Flexible timings",
        "Parent involvement",
        "900+ genuine reviews",
        "Influencer-affiliated & trusted brand",
      ],
      salesPitch: {
        script:
          "Hey, I'm [Name] from YoungLabs. You showed interest in the English Language Course. Can I explain how it can help your child improve in phonics, reading, grammar, speaking, and writing?",
        sampleQuestion:
          "Could you rate your child (1–5) in these 5 areas: Phonics, Reading, Listening, Speaking, Writing?",
        outcome:
          "We generate a plan based on your inputs and provide demo + progress tracking.",
      },
    },

    // Add other courses below
    {
      name: "Handwriting Improvement",
      ageGroups: {
        "5-10": {
          focus: ["Clarity", "Letter formation", "Speed"],
        },
      },
      modules: [
        {
          name: "Stroke Practice",
          topics: ["Curves", "Loops", "Consistency", "Spacing"],
        },
        {
          name: "Cursive Writing",
          topics: ["Letter joins", "Slant correction", "Word flow"],
        },
      ],
      methodology: {
        framework: "Daily practice with personalized tracking",
        tools: ["Handwriting sample rating", "Progress tracker"],
      },
      sellingPoints: [
        "Visible improvement within weeks",
        "Demo + before/after comparison",
        "Live feedback during writing",
      ],
    },
  ],
};
