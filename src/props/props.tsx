export type TestProps = {
    id: string;
    title: string;
    time: number;
    users: number;
    comments: number;
    parts: number;
    questions: number;
    hastag: string[];
};

export type Answer = {
    AnswerID: string;
    QuestionID: string;
    Answer?: string;
    AnswerValue: string;
    IsCorrect: number;
};

export type Question = {
    QuestionID: string;
    Question: string;
    QuestionType: string;
    AudioPath?: string;
    ImagePath?: string;
    OrderNumber: number;
    Answer: Answer[];
};

export type GeneralTestReturnedInformation = {
    ExamID: string;
    ExamTitle: string;
    ExamMaxScore: number;
    TimeOfExam: number;
    NumberOfQuestion: number;
    Parts: number;

    Question: Question[];
};
