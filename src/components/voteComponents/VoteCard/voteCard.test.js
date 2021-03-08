import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import VoteCard from './VoteCard'
import { dataVote } from '../../../common/appConstants'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const testWord = "I like Aguacate";
const getElmentByDataTestAttribute = (theWrapper, attribute) => 
    theWrapper.find(`[data-test="${attribute}"]`)

const defaultProps = {
    content: testWord,
    labelButton: testWord,
    title: testWord,
    date: testWord,
    category: testWord,
    featuredImage: testWord,
    alt: testWord,
    addLikeToNews: jest.fn(),
    id: 50,
    likesPercentajes: 50,
    dislikesPercentajes: 50,
    setClickingVote: jest.fn(),
}
const setup = (props = defaultProps) => shallow(<VoteCard {...props} /> )

describe("Test general component structure", () => {
    let wrapper;
    let elementToTest;
    let submitVoteButton;
    
    beforeEach(() => {
        wrapper = setup()
    })
    
    test("Check that component is rendered without throwing erros", () => {
        expect(wrapper).toBeTruthy();
    })
    
    test("Check that title news is rendered accordingly", () => {
        const voteCardTitle = "voteCardTitle"
        elementToTest = getElmentByDataTestAttribute(wrapper, voteCardTitle)
        expect(elementToTest).toBeTruthy();
    })

    test("Check that button for giving likes was rendered", () => {
        elementToTest = getElmentByDataTestAttribute(wrapper, dataVote.LIKE_VOTED)
        expect(elementToTest).toBeTruthy();
    })

    test("Check that button for giving dislikes was rendered", () => {
        elementToTest = getElmentByDataTestAttribute(wrapper, dataVote.DISLIKE_VOTED)
        expect(elementToTest).toBeTruthy();
    })

    test("Check that button for submitting votes was rendered", () => {
     submitVoteButton = "voteCardLabelButton"
        elementToTest = getElmentByDataTestAttribute(wrapper, submitVoteButton)
        expect(elementToTest).toBeTruthy();
    })

    test("Check that addLikeToNews function is called, when submit button is clicked", () => {
        const submitVoteButton = "voteCardLabelButton"
        elementToTest = getElmentByDataTestAttribute(wrapper, submitVoteButton)
        elementToTest.simulate("click");
        expect(defaultProps.addLikeToNews).toHaveBeenCalled();
    })
})