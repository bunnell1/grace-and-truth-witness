const situations = [
  {
    id: "good-person",
    title: "I'm a good person",
    principles: "People naturally measure themselves by other people or by their own intentions. Scripture measures us by God's holy standard. No one is righteous by works (Romans 3:10-12, 23). The gospel is that Christ lived the perfect life we could not live and died the death we deserved.",
    scriptures: ["Romans 3:10-12", "Romans 3:23", "Isaiah 64:6", "Ephesians 2:8-9"],
    responses: ["I understand. Most of us think of ourselves as reasonably good. Can I ask—good compared to what? Compared to other people, or compared to God's perfect standard?", "The Bible says none of us meets that standard. That's why we need a Savior, not just a better version of ourselves."],
    furtherReading: [{ title: "What Is the Gospel? by Greg Gilbert", url: "https://www.amazon.com/What-Gospel-9Marks-Greg-Gilbert/dp/1433515008" }, { title: "The Gospel for Real Life", url: "https://www.amazon.com/dp/1576835073" }]
  },
  {
    id: "all-religions",
    title: "All religions lead to God",
    principles: "Jesus claimed to be the only way (John 14:6). The gospel is exclusive in its claim about Christ and inclusive in its invitation to every person.",
    scriptures: ["John 14:6", "Acts 4:12", "1 Timothy 2:5"],
    responses: ["I hear that a lot. Jesus said He is the way, the truth, and the life, and that no one comes to the Father except through Him. That's a strong claim. What do you make of it?"],
    furtherReading: [{ title: "Jesus Among Other Gods by Ravi Zacharias", url: "https://www.amazon.com/Jesus-Among-Other-Gods-Provocative/dp/0849943272" }]
  },
  {
    id: "bible-contradictions",
    title: "The Bible is full of contradictions",
    principles: "Apparent difficulties are best examined with the text itself. The Bible has been carefully preserved and the main message is clear.",
    scriptures: ["2 Timothy 3:16", "Psalm 19:7"],
    responses: ["Which parts do you have in mind? I'd rather look at a specific passage than talk about contradictions in general."],
    furtherReading: [{ title: "Can We Trust the Gospels? by Peter J. Williams", url: "https://www.amazon.com/Can-Trust-Gospels-Peter-Williams/dp/1433552954" }]
  },
  {
    id: "problem-of-evil",
    title: "If God is good, why is there so much suffering?",
    principles: "Scripture shows that God is sovereign, that evil is real, and that He has acted in Christ to overcome it. The cross is where a good God entered suffering.",
    scriptures: ["Romans 8:28", "Genesis 50:20", "John 16:33"],
    responses: ["That's a hard question. The Bible doesn't give us a neat explanation for every instance of suffering, but it does show us a God who entered suffering Himself on the cross."],
    furtherReading: [{ title: "The Problem of Pain by C.S. Lewis", url: "https://www.amazon.com/Problem-Pain-C-S-Lewis/dp/0060652969" }]
  },
  {
    id: "spiritual-not-religious",
    title: "I'm spiritual but not religious",
    principles: "Jesus calls people into relationship with Himself and into the church. Spirituality without the gospel is incomplete.",
    scriptures: ["John 4:24", "Acts 2:42", "Hebrews 10:25"],
    responses: ["What do you mean by spiritual? Jesus said true worshipers worship the Father in spirit and truth."],
    furtherReading: [{ title: "The Reason for God by Timothy Keller", url: "https://www.amazon.com/Reason-God-Belief-Age-Skepticism/dp/1594483493" }]
  },
  {
    id: "bible-outdated",
    title: "The Bible is outdated",
    principles: "The Bible addresses the human heart, which does not change. Its message is as relevant today as when it was written.",
    scriptures: ["Hebrews 4:12", "Isaiah 40:8"],
    responses: ["Which parts feel outdated to you? The Bible's diagnosis of the human heart and its offer of a Savior still match what we see."],
    furtherReading: [{ title: "Taking God at His Word by Kevin DeYoung", url: "https://www.amazon.com/Taking-God-His-Word-Necessary-ebook/dp/B00IFG0EPM" }]
  },
  {
    id: "science-faith",
    title: "Science and faith can't both be true",
    principles: "The God who made the world is the God who reveals Himself in Scripture. Science describes the creation; the Bible tells us why it exists and who made it.",
    scriptures: ["Genesis 1:1", "Psalm 19:1", "Colossians 1:16"],
    responses: ["Many scientists are Christians. The question is not whether science and faith can coexist, but whether the God of the Bible is the God who made the world science studies."],
    furtherReading: [{ title: "The Case for a Creator by Lee Strobel", url: "https://www.amazon.com/Case-Creator-Journalist-Investigates-Scientific/dp/0310241448" }]
  },
  {
    id: "hypocrites",
    title: "The church is full of hypocrites",
    principles: "The church is made of sinners who are being changed. Hypocrisy is real, but it does not change the truth of the gospel or the character of Christ.",
    scriptures: ["Romans 3:23", "1 John 1:8-9"],
    responses: ["You're right that the church is full of imperfect people. So am I. Point people to Jesus, not to imperfect followers."],
    furtherReading: [{ title: "The Prodigal God by Timothy Keller", url: "https://www.amazon.com/Prodigal-God-Recovering-Heart-Christian-ebook/dp/B0017SYNZM" }]
  },
  {
    id: "hell",
    title: "A loving God wouldn't send people to hell",
    principles: "Hell is the just consequence of rejecting God. God's love is shown in providing a way of escape through Christ.",
    scriptures: ["Matthew 25:46", "John 3:16", "2 Peter 3:9"],
    responses: ["Hell is a hard doctrine. The Bible presents it as the just consequence of rejecting the God who made us. The good news is that God has provided a way of escape."],
    furtherReading: [{ title: "Erasing Hell by Francis Chan", url: "https://www.amazon.com/Erasing-Hell-What-God-About/dp/0781407257" }]
  }
];

const modules = [
  {
    id: "listening",
    title: "Listening Well Before You Speak",
    summary: "Most people need to be heard before they will hear.",
    content: "Ask questions before you answer. Reflect back what you heard. Look for the real concern underneath the words. Listening earns the right to speak and often surfaces the deeper issue.",
    scriptures: ["James 1:19", "Proverbs 18:13"],
    furtherReading: [{ title: "Listening to People", url: "https://www.amazon.com/Listening-People-Practical-Counseling-Skills/dp/083082104X" }]
  },
  {
    id: "gospel-clarity",
    title: "Explaining the Gospel Simply",
    summary: "God, man, Christ, response.",
    content: "God is holy. We are sinners. Christ died and rose for sinners. We must respond in repentance and faith. Keep it clear. Avoid jargon. Point to Jesus.",
    scriptures: ["Romans 1:16", "1 Corinthians 15:3-4", "Acts 2:38"],
    furtherReading: [{ title: "What Is the Gospel? by Greg Gilbert", url: "https://www.amazon.com/What-Gospel-9Marks-Greg-Gilbert/dp/1433515008" }]
  },
  {
    id: "rejection",
    title: "Handling Rejection",
    summary: "Rejection of the message is not rejection of you.",
    content: "Jesus was rejected. The apostles were rejected. Your task is to speak faithfully. The result belongs to God. Do not take rejection personally, and do not stop speaking.",
    scriptures: ["John 15:18", "2 Timothy 2:24-25"],
    furtherReading: [{ title: "Honest Evangelism by Rico Tice", url: "https://www.amazon.com/Honest-Evangelism-Rico-Tice/dp/190991939X" }]
  },
  {
    id: "sovereignty",
    title: "Sovereign and Human Responsibility",
    summary: "God is sovereign in salvation; we are responsible to speak.",
    content: "God chooses. We proclaim. Both are true. Our responsibility is to speak the gospel clearly and lovingly. God is responsible for the outcome.",
    scriptures: ["Acts 13:48", "Romans 10:14-15"],
    furtherReading: [{ title: "Evangelism and the Sovereignty of God by J.I. Packer", url: "https://www.amazon.com/dp/083083799X" }]
  },
  {
    id: "boldness",
    title: "Boldness in the Spirit",
    summary: "Boldness comes from the Spirit, not from personality.",
    content: "Pray for boldness. The early church asked for it (Acts 4:29). Boldness is not aggression. It is clarity and courage given by the Spirit.",
    scriptures: ["Acts 4:29-31", "Ephesians 6:19-20"],
    furtherReading: [{ title: "When People Are Big and God Is Small by Edward Welch", url: "https://www.amazon.com/dp/1629958077" }]
  },
  {
    id: "family",
    title: "Sharing with Family",
    summary: "Family is often the hardest and most important place to speak.",
    content: "Family members already know your flaws. Speak with humility. Live the gospel in front of them. Look for natural openings. Pray more than you speak.",
    scriptures: ["1 Peter 3:1-2", "Deuteronomy 6:6-7"],
    furtherReading: [{ title: "Leading Your Child to Christ", url: "https://www.amazon.com/dp/1938267842" }]
  }
];

const toolkitItems = [
  {
    id: "conversation-prep",
    title: "Conversation Prep Notes",
    summary: "What they said, what you heard, Scriptures to open, and a next step.",
    form: [
      { label: "What they said", id: "said", type: "textarea" },
      { label: "What I heard underneath", id: "heard", type: "textarea" },
      { label: "Scriptures to open", id: "scriptures", type: "text" },
      { label: "Next step", id: "next", type: "text" }
    ]
  },
  {
    id: "follow-up",
    title: "Follow-up Notes",
    summary: "What was said, what you offered, and a next step.",
    form: [
      { label: "What was said", id: "said", type: "textarea" },
      { label: "What I offered", id: "offered", type: "textarea" },
      { label: "Follow-up plan", id: "plan", type: "text" }
    ]
  },
  {
    id: "prayer-list",
    title: "Prayer List",
    summary: "People you are praying for and what you are asking.",
    form: [
      { label: "Name", id: "name", type: "text" },
      { label: "What I am asking", id: "asking", type: "textarea" },
      { label: "Date", id: "date", type: "text" }
    ]
  }
];