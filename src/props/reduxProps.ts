export type QuestionProps = {
    id: string;
    order: number;
    content?: string;
    correctAnswer?: string; // answerID
    choosenAnswer?: string; // answerID
    answerValue?: string;
    answerContent?: string;
};

export type AnswerProps = {
    id: string;
    content?: string;
    value: string;
    isCorrect: number;
};

export type BasicEnglishProps = {
    question: QuestionProps[];
    answer: AnswerProps[];
};
