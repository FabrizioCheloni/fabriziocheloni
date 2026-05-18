// Latest content data - update this when adding new articles to wiki
window.latestContent = {
    wiki: [
        {
            title: "The Most Confusing C++ Behavior",
            url: "https://codestyleandtaste.com/most-confusing-C++-behavior.html",
            description: "Explores the counterintuitive behavior of trivial constructors in C++, which don't initialize member variables despite being called constructors. Demonstrates how D() (trivial, uninitialized) differs from D(){} (non-trivial, zero-initialized), discusses std::is_trivially_constructible and memcpy safety, and argues for consistent variable initialization rules across codebases.",
            category: "C++ Programming",
            dateAdded: "2026-05-18"
        },
        {
            title: "Don't Use AI for Audio Programming",
            url: "https://thewolfsound.com/dont-use-ai-for-audio-programming/?utm_source=linkedin&utm_medium=social",
            description: "Jan Wilczek argues that beginners should avoid AI-generated audio code because LLMs lack understanding of real-time safety constraints (like avoiding memory allocation on audio threads) and DSP fundamentals. Relying on AI also undermines the cognitive effort needed to develop expertise, produces hard-to-maintain 'vibe-coded' plugins, and may actually slow experienced developers despite subjective speed perceptions.",
            category: "Audio Programming & DSP",
            dateAdded: "2026-05-18"
        },
        {
            title: "I programmatori che cambiano indirizzo (Programmers Changing Direction)",
            url: "https://open.substack.com/pub/pensieriaf/p/i-programmatori-che-cambiano-indirizzo?r=2bfcii&utm_campaign=post-expanded-share&utm_medium=web",
            description: "Alfonso Fuggetta challenges the narrative that AI is destroying tech jobs, noting that only ~55,000 of 1.2 million 2025 layoffs actually cited AI as the cause. Instead, the piece argues that programmers are migrating from tech companies into traditionally non-tech sectors (retail, real estate, construction) that are finally building digital capabilities, making the workforce shift more complex than apocalyptic narratives suggest.",
            category: "Development Tools & Practices",
            dateAdded: "2026-05-18"
        },
        {
            title: "Essential Soft Skills for Developers in the AI Age",
            url: "https://www.stickyminds.com/article/essential-soft-skills-developers-ai-age",
            description: "Explores critical soft skills that developers need to thrive in the AI era, including communication, collaboration, critical thinking, and adaptability. Emphasizes that while AI tools handle technical tasks, human skills like empathy, ethical reasoning, and continuous learning are becoming increasingly vital for professional success.",
            category: "Development Tools & Practices",
            dateAdded: "2025-11-07"
        },
        {
            title: "Why we need C++ Exceptions",
            url: "https://abuehl.github.io/2025/09/08/why-exceptions.html",
            description: "The author argues that C++ exceptions were crucial in developing a complex UML Editor, enabling sophisticated error handling and transaction management. Exceptions allowed the team to manage intricate scenarios like nested object interactions and XML parsing, providing a more elegant solution than traditional error return values.",
            category: "Security & Safety",
            dateAdded: "2025-09-27"
        },
        {
            title: "Phone Bans in Schools: The Kids Debate",
            url: "https://www.nytimes.com/2025/09/17/opinion/phone-bans-schools-kids.html?unlocked_article_code=1.oU8.7QA1.Zw5eQr11xIk2&smid=nytcore-ios-share&referringSource=articleShare",
            description: "Opinion piece examining the implementation of smartphone bans in schools and their impact on students. Explores the debate around distraction-free learning environments, emergency communication concerns, and the balance between educational focus and modern technology integration.",
            category: "Education & Technology",
            dateAdded: "2025-09-25"
        },
        {
            title: "Sorry Rick Rubin, Vibe Coding Isn't Punk Rock",
            url: "https://open.substack.com/pub/fabriziocheloni607361/p/sorry-rick-rubin-vibe-coding-isnt?r=2bfcii&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
            description: "Critiques the 'vibe coding' approach that relies heavily on AI tools, arguing that traditional programming is a creative, meditative process that involves deep problem-solving and modeling the world.",
            category: "Development Tools & Practices",
            dateAdded: "2025-01-22"
        },
        {
            title: "How to Replace Footstep Sounds in Pro Tools",
            url: "https://audiokids.it/replace-footstep-sounds/?_gl=1*1w4m9jv*_up*MQ..*_ga*OTEzMzUyNDAwLjE3NTc3NzIzNDc.*_ga_BWCZTWJWVK*czE3NTc3NzIzNDYkbzEkZzEkdDE3NTc3NzIzNTEkajU1JGwwJGgw*_ga_05HZH2V8JK*czE3NTc3NzIzNDYkbzEkZzEkdDE3NTc3NzIzNTEkajU1JGwwJGgw",
            description: "Step-by-step tutorial for manually replacing footstep sounds in Pro Tools using clip replacement techniques. Covers chopping audio tracks, using 'tab to transient' for precise cuts, and replacing clips while maintaining original timing for professional sound design workflows.",
            category: "Audio Programming & DSP",
            dateAdded: "2025-01-13"
        },
        {
            title: "Getting Started Quickly with Undertone 2 – Dialogue Ambience Replacement",
            url: "https://audiokids.it/getting-started-with-undertone-2/?_gl=1*1w4m9jv*_up*MQ..*_ga*OTEzMzUyNDAwLjE3NTc3NzIzNDc.*_ga_BWCZTWJWVK*czE3NTc3NzIzNDYkbzEkZzEkdDE3NTc3NzIzNTEkajU1JGwwJGgw*_ga_05HZH2V8JK*czE3NTc3NzIzNDYkbzEkZzEkdDE3NTc3NzIzNTEkajU1JGwwJGgw",
            description: "Quick tutorial on using Undertone 2 audio plugin for dialogue ambience replacement in post-production. Shows how to isolate background noise from recordings and create consistent sound beds for dialogue editing workflows.",
            category: "Audio Programming & DSP",
            dateAdded: "2025-01-13"
        },
        {
            title: "Bouncing Surround Audio in Pro Tools – Are You Doing it Wrong?",
            url: "https://audiokids.it/bounce-pro-tools-surround/",
            description: "Comprehensive guide to exporting surround sound audio from Pro Tools, covering Dolby Atmos bouncing, stem workflows, and the Dragout 2 plugin for multiple output formats.",
            category: "Audio Programming & DSP",
            dateAdded: "2025-01-13"
        },
        {
            title: "WaveGAN: Audio Synthesis with GANs",
            url: "https://github.com/chrisdonahue/wavegan",
            description: "Machine learning algorithm that synthesizes raw audio waveforms using generative adversarial networks, capable of generating up to 4-second audio clips across multiple domains including speech, music, and sound effects.",
            category: "Audio Programming & DSP",
            dateAdded: "2025-01-13"
        },
        {
            title: "Dark Souls 3: Beginner's Guide",
            url: "https://www.polygon.com/2016/4/12/11412210/dark-souls-3-beginners-guide-tips-for-beginners-and-returning-masochists",
            description: "Comprehensive beginner's guide for Dark Souls 3, covering essential tips for new players including combat mechanics, character building, and survival strategies.",
            category: "Gaming",
            dateAdded: "2025-01-13"
        }
    ],
    // Future: movies, books, poems will be added here or fetched from Google Sheets
    movies: [],
    books: [],
    poems: []
};