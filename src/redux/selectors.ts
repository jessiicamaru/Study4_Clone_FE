import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
const getQuestionBasicEnglishTest = (state: RootState) => {
    return {
        question: state.basicEnglish.question,
    };
};

export const questionBasicEnglishTestSelectors = createSelector(getQuestionBasicEnglishTest, ({ question }) => {
    return question;
});
