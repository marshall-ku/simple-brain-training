interface QuestionProps {
    questionDifficulty: [number, number];
    questionLength: number;
    wrong: numnber;
    done: (number: number) => void;
    value: number | undefined;
}

interface QuestionState {
    index: number;
    min: number;
    max: number;
    first: number;
    second: number;
    start: number;
}
