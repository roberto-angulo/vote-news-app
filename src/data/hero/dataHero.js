const mainDataHero =  { 
     navbar: {
        items:[
            { title: "Past trials", 
              slug: "past-trials",
              component: "PasTrials"
            },
            {
                title: "How it works",
                slug: "how-it-works",
                component: "HowItWorks"
            },
            {
                title:  "Log In/Sign Up",
                slug: "log-in",
                component: "Login",

            },
        ], 
        brandName: "Rule  of Thumb",
    }, 
    mainCard: {
        title: <>Whats your opinion on <h1>Pope Francis?</h1></>,
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        linkLabel: "More information",
        ctaLabel: "What's your veredict?"

    }
};
export default mainDataHero;