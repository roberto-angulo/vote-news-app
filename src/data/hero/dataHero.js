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
        content: `The most significant moments of the third day of Pope Francis' visit to Iraq, relived in just over a minute and a half.
        We relive at a glance the most beautiful images of the third day of the Pope's historic visit to Iraq.
        
        The Holy Father on Sunday visited the cities of Erbil, Mosul and Qaraqosh, where he renewed his call for fraternity, hope and peace.
        
        Pope Francis began the day in Erbil, where he met with the President and the Prime Minister of the autonomous region of Iraqi Kurdistan, as well as civil and religious authorities.
        
        From Erbil, Pope Francis travelled to Mosul, where, in the midst of the devastation wrought by ISIS, he prayed for peace for victims of the war in Iraq and throughout the Middle East. `,
        linkLabel: "More information",
        ctaLabel: "What's your veredict?"
    }
};
export default mainDataHero;