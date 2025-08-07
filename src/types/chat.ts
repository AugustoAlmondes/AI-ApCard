export type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    time: string;
    isTyping?: boolean;
}

export type Question = {
    id: number;
    text: string;
    field: string;
}