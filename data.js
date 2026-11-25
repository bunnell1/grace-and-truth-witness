const situations = [
  {
    id: "good-person",
    title: "I'm a good person",
    behind: "Often a desire to be affirmed or a misunderstanding of how God measures righteousness. Many have never been confronted with God's holy standard.",
    principles: "People naturally measure themselves by other people or by their own intentions. Scripture measures us by God's holy standard. No one is righteous by works (Romans 3:10-12, 23). The gospel is that Christ lived the perfect life we could not live and died the death we deserved.",
    scriptures: ["Romans 3:10-12", "Romans 3:23", "Isaiah 64:6", "Ephesians 2:8-9"],
    responses: ["I understand. Most of us think of ourselves as reasonably good. Can I ask—good compared to what? Compared to other people, or compared to God's perfect standard?", "The Bible says none of us meets that standard. That's why we need a Savior, not just a better version of ourselves."],
    furtherReading: [{ title: "What Is the Gospel? by Greg Gilbert", url: "https://www.amazon.com/What-Gospel-9Marks-Greg-Gilbert/dp/1433515008" }, { title: "The Gospel for Real Life", url: "https://www.amazon.com/dp/1576835073" }]
  },
  {
    id: "all-religions",
    title: "All religions lead to God",
    behind: "A desire for tolerance or a belief that sincerity is enough. Often comes from a culture that treats all religious claims as equally valid.",
    principles: "Jesus claimed to be the only way (John 14:6). The gospel is exclusive in its claim about Christ and inclusive in its invitation to every person.",
    scriptures: ["John 14:6", "Acts 4:12", "1 Timothy 2:5"],
    responses: ["I hear that a lot. Jesus said He is the way, the truth, and the life, and that no one comes to the Father except through Him. That's a strong claim. What do you make of it?"],
    furtherReading: [{ title: "Jesus Among Other Gods by Ravi Zacharias", url: "https://www.amazon.com/Jesus-Among-Other-Gods-Provocative/dp/0849943272" }]
  },
  {
    id: "bible-contradictions",
    title: "The Bible is full of contradictions",
    behind: "Usually based on second-hand claims or surface-level differences in parallel accounts. Rarely has the person examined the texts carefully.",
    principles: "Apparent difficulties are best examined with the text itself. The Bible has been carefully preserved and the main message is clear.",
    scriptures: ["2 Timothy 3:16", "Psalm 19:7"],
    responses: ["Which parts do you have in mind? I'd rather look at a specific passage than talk about contradictions in general."],
    furtherReading: [{ title: "Can We Trust the Gospels? by Peter J. Williams", url: "https://www.amazon.com/Can-Trust-Gospels-Peter-Williams/dp/1433552954" }]
  },
  {
    id: "problem-of-evil",
    title: "If God is good, why is there so much suffering?",
    behind: "Often personal pain or a genuine struggle with how a good God can allow evil. Sometimes used as a reason to reject God without examining the alternative.",
    principles: "Scripture shows that God is sovereign, that evil is real, and that He has acted in Christ to overcome it. The cross is where a good God entered suffering.",
    scriptures: ["Romans 8:28", "Genesis 50:20", "John 16:33"],
    responses: ["That's a hard question. The Bible doesn't give us a neat explanation for every instance of suffering, but it does show us a God who entered suffering Himself on the cross."],
    furtherReading: [{ title: "The Problem of Pain by C.S. Lewis", url: "https://www.amazon.com/Problem-Pain-C-S-Lewis/dp/0060652969" }]
  },
  {
    id: "spiritual-not-religious",
    title: "I'm spiritual but not religious",
    behind: "A desire for personal spirituality without accountability or institutional religion. Often a reaction to bad experiences with church.",
    principles: "Jesus calls people into relationship with Himself and into the church. Spirituality without the gospel is incomplete.",
    scriptures: ["John 4:24", "Acts 2:42", "Hebrews 10:25"],
    responses: ["What do you mean by spiritual? Jesus said true worshipers worship the Father in spirit and truth."],
    furtherReading: [{ title: "The Reason for God by Timothy Keller", url: "https://www.amazon.com/Reason-God-Belief-Age-Skepticism/dp/1594483493" }]
  },
  {
    id: "bible-outdated",
    title: "The Bible is outdated",
    behind: "An assumption that ancient texts cannot speak to modern life, or discomfort with moral teachings that conflict with current culture.",
    principles: "The Bible addresses the human heart, which does not change. Its message is as relevant today as when it was written.",
    scriptures: ["Hebrews 4:12", "Isaiah 40:8"],
    responses: ["Which parts feel outdated to you? The Bible's diagnosis of the human heart and its offer of a Savior still match what we see."],
    furtherReading: [{ title: "Taking God at His Word by Kevin DeYoung", url: "https://www.amazon.com/Taking-God-His-Word-Necessary-ebook/dp/B00IFG0EPM" }]
  },
  {
    id: "science-faith",
    title: "Science and faith can't both be true",
    behind: "A common cultural narrative that treats science and Christianity as opposites. Often based on a limited view of both.",
    principles: "The God who made the world is the God who reveals Himself in Scripture. Science describes the creation; the Bible tells us why it exists and who made it.",
    scriptures: ["Genesis 1:1", "Psalm 19:1", "Colossians 1:16"],
    responses: ["Many scientists are Christians. The question is not whether science and faith can coexist, but whether the God of the Bible is the God who made the world science studies."],
    furtherReading: [{ title: "The Case for a Creator by Lee Strobel", url: "https://www.amazon.com/Case-Creator-Journalist-Investigates-Scientific/dp/0310241448" }]
  },
  {
    id: "hypocrites",
    title: "The church is full of hypocrites",
    behind: "Real disappointment with Christians or a way to dismiss the message without dealing with Christ Himself.",
    principles: "The church is made of sinners who are being changed. Hypocrisy is real, but it does not change the truth of the gospel or the character of Christ.",
    scriptures: ["Romans 3:23", "1 John 1:8-9"],
    responses: ["You're right that the church is full of imperfect people. So am I. Point people to Jesus, not to imperfect followers."],
    furtherReading: [{ title: "The Prodigal God by Timothy Keller", url: "https://www.amazon.com/Prodigal-God-Recovering-Heart-Christian-ebook/dp/B0017SYNZM" }]
  },
  {
    id: "hell",
    title: "A loving God wouldn't send people to hell",
    behind: "A struggle with the justice of God or a desire to avoid the seriousness of sin and judgment.",
    principles: "Hell is the just consequence of rejecting God. God's love is shown in providing a way of escape through Christ.",
    scriptures: ["Matthew 25:46", "John 3:16", "2 Peter 3:9"],
    responses: ["Hell is a hard doctrine. The Bible presents it as the just consequence of rejecting the God who made us. The good news is that God has provided a way of escape."],
    furtherReading: [{ title: "Erasing Hell by Francis Chan", url: "https://www.amazon.com/Erasing-Hell-What-God-About/dp/0781407257" }]
  },
  {
    id: "too-bad",
    title: "I'm too bad for God to forgive me",
    behind: "Genuine guilt or a misunderstanding of the depth of God's grace. Sometimes used to avoid dealing with repentance.",
    principles: "No one is beyond the reach of the gospel. Christ died for sinners, not for the righteous.",
    scriptures: ["1 Timothy 1:15", "Romans 5:8", "Isaiah 1:18"],
    responses: ["The gospel is for people who know they need it. Jesus said He came to call sinners, not the righteous."],
    furtherReading: [{ title: "The Gospel for Real Life by Jerry Bridges", url: "https://www.amazon.com/dp/1576835073" }]
  },
  {
    id: "dont-judge",
    title: "Don't judge me / Christians are judgmental",
    behind: "A desire to avoid moral accountability or a reaction to unkind Christians. Sometimes a misunderstanding of what judgment means.",
    principles: "Jesus warned against hypocritical judgment, but He also called people to repent. Love and truth go together.",
    scriptures: ["Matthew 7:1-5", "John 7:24", "Galatians 6:1"],
    responses: ["I don't want to judge you. I do want to be honest about what the Bible says. Can we look at that together?"],
    furtherReading: [{ title: "The Reason for God by Timothy Keller", url: "https://www.amazon.com/Reason-God-Belief-Age-Skepticism/dp/1594483493" }]
  },
  {
    id: "raised-church",
    title: "I was raised in church but it didn't stick",
    behind: "Often a lack of personal faith, bad experiences, or never hearing the gospel clearly. Sometimes resentment toward family or church.",
    principles: "Being raised in church is not the same as knowing Christ. The gospel must be received personally.",
    scriptures: ["John 3:3", "Matthew 7:21-23"],
    responses: ["What did you hear growing up? Sometimes people grow up around church without ever hearing the gospel clearly."],
    furtherReading: [{ title: "The Prodigal God by Timothy Keller", url: "https://www.amazon.com/Prodigal-God-Recovering-Heart-Christian-ebook/dp/B0017SYNZM" }]
  },
  {
    id: "why-jesus",
    title: "Why Jesus and not other religious figures?",
    behind: "A desire to treat all religious leaders as equal, or uncertainty about what makes Jesus unique.",
    principles: "Jesus claimed to be God and rose from the dead. Other religious figures did not. The gospel stands or falls on who Jesus is.",
    scriptures: ["John 14:6", "1 Corinthians 15:3-4", "Acts 4:12"],
    responses: ["What do you think is unique about Jesus? He claimed to be God and rose from the dead. That's different from other religious leaders."],
    furtherReading: [{ title: "Jesus Among Other Gods by Ravi Zacharias", url: "https://www.amazon.com/Jesus-Among-Other-Gods-Provocative/dp/0849943272" }]
  },
  {
    id: "no-church",
    title: "I don't need church; I can just believe on my own",
    behind: "A desire for personal faith without accountability, or bad experiences with church.",
    principles: "The New Testament assumes believers are part of a local church. Faith is personal, but it is not private.",
    scriptures: ["Hebrews 10:24-25", "Acts 2:42", "Ephesians 4:11-16"],
    responses: ["The Bible talks about believers gathering together. Is there a reason church has been hard for you?"],
    furtherReading: [{ title: "Church Membership by Jonathan Leeman", url: "https://www.amazon.com/Church-Membership-Represents-Building-Churches-ebook/dp/B007RPROLO" }]
  },
  {
    id: "crusades",
    title: "What about the Crusades / the church's bad history?",
    behind: "A way to dismiss Christianity because of the failures of people who claimed it.",
    principles: "The failures of Christians do not change the truth of the gospel or the character of Christ. The church is made of sinners.",
    scriptures: ["Romans 3:23", "1 John 1:8-9"],
    responses: ["The church has done wrong things. So have I. The question is still whether Jesus is who He claimed to be."],
    furtherReading: [{ title: "The Case for Christ by Lee Strobel", url: "https://www.amazon.com/Case-Christ-Journalist-Personal-Investigation/dp/0310345863" }]
  },
  {
    id: "evolution",
    title: "Evolution proves the Bible is wrong",
    behind: "A common assumption that science and the Bible are in conflict, often without careful study of either.",
    principles: "The Bible is not a science textbook. It tells us who made the world and why. Many Christians hold different views on the details of origins.",
    scriptures: ["Genesis 1:1", "Psalm 19:1", "Colossians 1:16"],
    responses: ["What part of evolution do you think conflicts with the Bible? The main claim of Genesis is that God made the world."],
    furtherReading: [{ title: "The Case for a Creator by Lee Strobel", url: "https://www.amazon.com/Case-Creator-Journalist-Investigates-Scientific/dp/0310241448" }]
  },
  {
    id: "trinity",
    title: "The Trinity doesn't make sense",
    behind: "Difficulty with the doctrine of one God in three persons, or a desire for a simpler view of God.",
    principles: "The Trinity is how God has revealed Himself. It is not a human invention. We accept it because Scripture teaches it.",
    scriptures: ["Matthew 28:19", "John 1:1", "2 Corinthians 13:14"],
    responses: ["It is hard to grasp. The Bible presents one God who is Father, Son, and Spirit. What part is hardest for you?"],
    furtherReading: [{ title: "Delighting in the Trinity by Michael Reeves", url: "https://www.amazon.com/Delighting-Trinity-Introduction-Christian-Faith/dp/0830839836" }]
  },
  {
    id: "lgbtq",
    title: "I'm gay / LGBTQ+ and God made me this way",
    behind: "A desire for affirmation, or the belief that desire equals identity and design.",
    principles: "Scripture teaches that sexual intimacy is for marriage between a man and a woman. Desire does not define us. The gospel offers forgiveness and a new identity in Christ.",
    scriptures: ["Genesis 1:27", "1 Corinthians 6:9-11", "Romans 1:26-27"],
    responses: ["This is a hard topic. The Bible speaks clearly about sexuality, and it also speaks clearly about forgiveness and new life in Christ. Can we look at what it says?"],
    furtherReading: [{ title: "Is God Anti-Gay? by Sam Allberry", url: "https://www.amazon.com/God-Anti-Gay-Questions-Christians-ebook/dp/B00B7J0W3A" }]
  }
];

const modules = [
  {
    id: "listening",
    title: "Listening Well Before You Speak",
    summary: "Most people need to be heard before they will hear.",
    content: "Ask questions before you answer. Reflect back what you heard. Look for the real concern underneath the words. Listening earns the right to speak and often surfaces the deeper issue. Practice asking one clarifying question before you share a verse or an answer.",
    why: "People are more open to hearing when they feel understood. Listening also helps you avoid answering a question they did not ask.",
    scriptures: ["James 1:19", "Proverbs 18:13"],
    homework: ["In your next conversation, ask two questions before you share any answer.", "Write down what you heard underneath the words and check it with the person."],
    furtherReading: [{ title: "Questioning Evangelism by Randy Newman", url: "https://www.amazon.com/dp/0825447801" }]
  },
  {
    id: "gospel-clarity",
    title: "Explaining the Gospel Simply",
    summary: "God, man, Christ, response.",
    content: "God is holy. We are sinners. Christ died and rose for sinners. We must respond in repentance and faith. Keep it clear. Avoid jargon. Point to Jesus. Practice saying the outline in under a minute.",
    why: "A clear outline keeps the conversation focused on Christ and makes it easier for the other person to understand what is being asked of them.",
    scriptures: ["Romans 1:16", "1 Corinthians 15:3-4", "Acts 2:38"],
    homework: ["Write the gospel in four short sentences (God, man, Christ, response).", "Share that outline with one person this week."],
    furtherReading: [{ title: "What Is the Gospel? by Greg Gilbert", url: "https://www.amazon.com/What-Gospel-9Marks-Greg-Gilbert/dp/1433515008" }, { title: "The Gospel and Personal Evangelism by Mark Dever", url: "https://www.amazon.com/Gospel-Personal-Evangelism-Foreword-Mahaney-ebook/dp/B0017JWL28" }]
  },
  {
    id: "rejection",
    title: "Handling Rejection",
    summary: "Rejection of the message is not rejection of you.",
    content: "Jesus was rejected. The apostles were rejected. Your task is to speak faithfully. The result belongs to God. Do not take rejection personally, and do not stop speaking. Expect some people to say no.",
    why: "Remembering that rejection is normal keeps you from taking it personally and quitting. Faithfulness is measured by speaking, not by the response.",
    scriptures: ["John 15:18", "2 Timothy 2:24-25"],
    homework: ["Pray for one person who has rejected the gospel.", "Write down one way you can respond kindly the next time you hear no."],
    furtherReading: [{ title: "Honest Evangelism by Rico Tice", url: "https://www.amazon.com/Honest-Evangelism-Rico-Tice/dp/190991939X" }]
  },
  {
    id: "sovereignty",
    title: "Sovereign and Human Responsibility",
    summary: "God is sovereign in salvation; we are responsible to speak.",
    content: "God chooses. We proclaim. Both are true. Our responsibility is to speak the gospel clearly and lovingly. God is responsible for the outcome. Rest in His sovereignty while you speak.",
    why: "Holding both truths together frees you from anxiety about results while still calling you to speak. You can rest and still be faithful.",
    scriptures: ["Acts 13:48", "Romans 10:14-15"],
    homework: ["Read Acts 13:48 and Romans 10:14-15 side by side.", "Write a short prayer that trusts God with the result while asking for boldness to speak."],
    furtherReading: [{ title: "Evangelism and the Sovereignty of God by J.I. Packer", url: "https://www.amazon.com/dp/083083799X" }]
  },
  {
    id: "boldness",
    title: "Boldness in the Spirit",
    summary: "Boldness comes from the Spirit, not from personality.",
    content: "Pray for boldness. The early church asked for it (Acts 4:29). Boldness is not aggression. It is clarity and courage given by the Spirit. Ask for it before you speak.",
    why: "Boldness is a gift, not a personality trait. Asking for it reminds you that the Spirit is the one who opens mouths and hearts.",
    scriptures: ["Acts 4:29-31", "Ephesians 6:19-20"],
    homework: ["Pray Acts 4:29 each morning this week.", "Look for one opportunity to speak and take it."],
    furtherReading: [{ title: "When People Are Big and God Is Small by Edward Welch", url: "https://www.amazon.com/dp/1629958077" }]
  },
  {
    id: "family",
    title: "Sharing with Family",
    summary: "Family is often the hardest and most important place to speak.",
    content: "Family members already know your flaws. Speak with humility. Live the gospel in front of them. Look for natural openings. Pray more than you speak. Consistency over time matters more than one big conversation.",
    why: "Family sees your life up close. Consistent humility and prayer over time often opens more doors than a single conversation.",
    scriptures: ["1 Peter 3:1-2", "Deuteronomy 6:6-7"],
    homework: ["Pray daily for one family member.", "Look for one natural opening this week and speak briefly."],
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
    id: "gospel-outline",
    title: "Gospel Outline Worksheet",
    summary: "A simple outline: God, man, Christ, response.",
    form: [
      { label: "God", id: "god", type: "textarea" },
      { label: "Man", id: "man", type: "textarea" },
      { label: "Christ", id: "christ", type: "textarea" },
      { label: "Response", id: "response", type: "textarea" }
    ]
  },
  {
    id: "follow-up",
    title: "Follow-up Checklist",
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
  },
  {
    id: "heart-check",
    title: "Heart Check Before Speaking",
    summary: "A quick check on motive and readiness.",
    form: [
      { label: "Am I speaking from love or from a desire to win?", id: "motive", type: "textarea" },
      { label: "Have I prayed?", id: "prayed", type: "text" },
      { label: "What do I need to confess or set aside?", id: "confess", type: "textarea" }
    ]
  }
];