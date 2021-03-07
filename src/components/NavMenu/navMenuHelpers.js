import { internalPages } from '../../common/appConstants'
import HowItWorks from '../HOC/pages/HowItWorks';
import LogIn from '../HOC/pages/LogIn';
import MainPage from '../HOC/pages/MainPage';
import PasTrials from '../HOC/pages/PasTrials';

export const checkForComponentPage = (component) => {
    switch(component)  {
        case internalPages.HOW_IT_WORKS: {
            return <HowItWorks />
        }
        case internalPages.PAST_TRIALS: {
            return <PasTrials />
        }
        case internalPages.LOGIN: {
            return <LogIn />
        }
        default: {
            return <MainPage />
        }
    }
}