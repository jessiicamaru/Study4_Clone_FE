import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AnswerProps, BasicEnglishProps, QuestionProps } from '../props/reduxProps';

const initialState: BasicEnglishProps = {
    question: [],
    answer: [],
};

export const BasicEnglishSlice = createSlice({
    name: 'basicEnglish',
    initialState,
    reducers: {
        setAnswerForQuestion: (state, action: PayloadAction<{ answer: AnswerProps; question: QuestionProps }>) => {
            const { answer, question } = action.payload;
            const temp = state.question.find((i) => i.id == question.id);

            if (!temp) {
                const questionData = {
                    id: question.id,
                    order: question.order,
                    content: question.content,
                    choosenAnswer: answer.id,
                    answerValue: answer.value,
                    answerContent: answer.content,
                    ...(answer.isCorrect === 1 && { correctAnswer: answer.id }),
                };

                state.question.push(questionData);
            } else {
                const index = state.question.findIndex((i) => i.id == question.id);
                state.question[index] = {
                    ...state.question[index],
                    choosenAnswer: answer.id,
                    answerValue: answer.value,
                    answerContent: answer.content,
                };
            }
        },
    },
});

export default BasicEnglishSlice.reducer;
export const { setAnswerForQuestion } = BasicEnglishSlice.actions;
