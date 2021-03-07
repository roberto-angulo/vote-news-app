import { internalPages } from '../../common/appConstants'
import HowItWorks from '../internalPages/HowItWorks';
import LogIn from '../internalPages/LogIn';
import PasTrials from '../internalPages/PasTrials';

export const checkForComponentPage = (component) => {
    let componentToOutput;
    if( component === internalPages.HOW_IT_WORKS ) {
        componentToOutput = <HowItWorks />
    } else if( component === internalPages.PAST_TRIALS ) {
        componentToOutput = <PasTrials />
    } else {
        componentToOutput = <LogIn />
    }
    return componentToOutput
}