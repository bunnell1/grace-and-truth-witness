const situations = [
  {
    id: "good-person",
    title: "I'm a good person",
    principles: "People naturally measure themselves by other people or by their own intentions. Scripture measures us by God's holy standard. No one is righteous by works (Romans 3:10-12, 23). The gospel is that Christ lived the perfect life we could not live and died the death we deserved.",
    scriptures: ["Romans 3:10-12", "Romans 3:23", "Isaiah 64:6", "Ephesians 2:8-9"],
    responses: [
      "I understand. Most of us think of ourselves as reasonably good. Can I ask—good compared to what? Compared to other people, or compared to God's perfect standard?",
      "The Bible says none of us meets that standard. That's why we need a Savior, not just a better version of ourselves."
    ],
    furtherReading: [
      { title: "The Gospel for Real Life", url: "https://www.amazon.com/dp/1576835073" },
      { title: "What Is the Gospel?", url: "https://www.amazon.com/What-Gospel-9Marks-Greg-Gilbert/dp/1433515008" }
    ]
  },
  {
    id: "problem-of-evil",
    title: "Why would a good God allow evil?",
    principles: "Scripture does not give a full philosophical answer, but it does tell us that God is sovereign, that evil is real, and that He has acted in Christ to overcome it. The cross is the place where a good God entered suffering rather than remaining distant from it.",
    scriptures: ["Romans 8:28", "Genesis 50:20", "John 16:33", "Revelation 21:4"],
    responses: [
      "That's a hard question. The Bible doesn't give us a neat explanation for every instance of suffering, but it does show us a God who entered suffering Himself on the cross.",
      "If God is good and sovereign, then even the worst evil is not outside His purpose—and He has promised to make all things new."
    ],
    furtherReading: [
      { title: "The Problem of Pain", url: "https://www.amazon.com/Problem-Pain-C-S-Lewis/dp/0060652969" }
    ]
  },
  {
    id: "all-religions",
    title: "All religions lead to God",
    principles: "Jesus claimed to be the only way (John 14:6). The gospel is exclusive in its claim about Christ and inclusive in its invitation to every person. Other religions offer different paths; Christianity offers a Savior.",
    scriptures: ["John 14:6", "Acts 4:12", "1 Timothy 2:5"],
    responses: [
      "I hear that a lot. Jesus said He is the way, the truth, and the life, and that no one comes to the Father except through Him. That's a strong claim. What do you make of it?",
      "If all religions lead to the same place, then Jesus was either wrong or a liar. The gospel says He is the only Savior."
    ],
    furtherReading: [
      { title: "The Reason for God", url: "https://www.amazon.com/Reason-God-Belief-Age-Skepticism/dp/1594483493" }
    ]
  },
  {
    id: "bible-errors",
    title: "The Bible has errors",
    principles: "The Bible claims to be God-breathed and trustworthy (2 Timothy 3:16). Apparent difficulties are best examined with the text itself, historical context, and the consistent testimony of the church.",
    scriptures: ["2 Timothy 3:16", "Psalm 19:7", "John 10:35"],
    responses: [
      "Which parts do you have in mind? I'd rather look at a specific passage than talk about 'errors' in general.",
      "The Bible has been carefully preserved. Many of the so-called errors are differences in detail that don't affect the main message."
    ],
    furtherReading: [
      { title: "Taking God at His Word", url: "https://www.amazon.com/Taking-God-His-Word-Necessary-ebook/dp/B00IFG0EPM" }
    ]
  }
];

const modules = [
  { id: "listening", title: "Listening Well Before You Speak", summary: "Most people need to be heard before they will hear." },
  { id: "gospel-clarity", title: "Explaining the Gospel Simply", summary: "God, man, Christ, response." },
  { id: "rejection", title: "Handling Rejection", summary: "Rejection of the message is not rejection of you." },
  { id: "sovereignty", title: "Sovereign and Human Responsibility", summary: "God is sovereign in salvation; we are responsible to speak." }
];

const toolkitItems = [
  { id: "conversation-prep", title: "Conversation Prep Notes", summary: "What they said, what you heard, Scriptures to open, and a next step." },
  { id: "follow-up", title: "Follow-up Notes", summary: "What was said, what you offered, and a next step." }
];