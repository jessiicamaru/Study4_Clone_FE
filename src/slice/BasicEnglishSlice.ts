import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AnswerProps, BasicEnglishProps, QuestionProps } from '../props/reduxProps';

const initialState: BasicEnglishProps = {
    question: [],
};

export const BasicEnglishSlice = createSlice({
    name: 'basicEnglish',
    initialState,
    reducers: {
        setCorrectAnswer: (state, acion: PayloadAction<{ question: QuestionProps[] }>) => {
            const { question } = acion.payload;
            state.question = question;
        },

        setAnswerForQuestion: (state, action: PayloadAction<{ answer: AnswerProps; question: QuestionProps }>) => {
            const { answer, question } = action.payload;

            const index = state.question.findIndex((i) => i.id == question.id);
            state.question[index] = {
                ...state.question[index],
                choosenAnswer: answer.id,
                answerValue: answer.value,
                answerContent: answer.content,
            };
        },
    },
});

export default BasicEnglishSlice.reducer;
export const { setAnswerForQuestion } = BasicEnglishSlice.actions;
