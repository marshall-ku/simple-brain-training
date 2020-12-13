interface AppProps {}

interface AppState {
    difficulty: [number, number];
    difficultyString: string;
    count: number;
    done: boolean;
    doneTime?: number;
    wrong: number;
    answer?: number;
}
