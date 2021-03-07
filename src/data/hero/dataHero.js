import { internalPages } from "../../common/appConstants";

const mainDataHero =  { 
     navbar: {
        items:[
            {
                title: "Rule of Thumb",
                slug: "main",
                component: internalPages.MAIN_PAGE,
            },
            { title: "Past trials", 
              slug: "past-trials",
              component: internalPages.PAST_TRIALS
            },
            {
                title: "How it works",
                slug: "how-it-works",
                component: internalPages.HOW_IT_WORKS
            },
            {
                title:  "Log In/Sign Up",
                slug: "log-in",
                component: internalPages.LOGIN,

            }, 
        ], 
    }, 
    mainCard: {
        title: <>Whats your opinion on <h1>Pope Francis?</h1></>,
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        linkLabel: "More information",
        ctaLabel: "What's your veredict?"

    }
};
export default mainDataHero;