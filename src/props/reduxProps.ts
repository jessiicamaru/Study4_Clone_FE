export type QuestionProps = {
    id: string;
    order: number;
    content?: string;
    correctAnswer?: string; // answerID
    choosenAnswer?: string; // answerID
    answerValue?: string;
    audioPath?: string;
    imagePath?: string;
    answerContent?: string;
    partOrder: number;
};

export type AnswerProps = {
    id: string;
    content?: string;
    value: string;
    isCorrect: number;
};

export type BasicEnglishProps = {
    question: QuestionProps[];
};
