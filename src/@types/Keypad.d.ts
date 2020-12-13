interface KeypadProps {
    confirm: (number: number) => void;
}
interface KeypadState {
    input: string;
}

interface KeysProps {
    click: (item: string) => void;
}
interface KeysState {}

interface InputProps {
    value: string;
    confirm: (number: number) => void;
}
interface InputState {
    input: string;
    touchable: boolean;
}
