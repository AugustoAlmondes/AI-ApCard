import { createContext } from 'react';
import type { Message } from '../types/chat';

interface ChatContextType {
    messages: Message[];
    currentQuestion: number;
    answers: Record<string, string>;
    sendMessage: (text: string) => void;
    disableButton: boolean;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);
