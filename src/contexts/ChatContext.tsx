import { createContext, useState, type ReactNode } from 'react';
import type { Message, Question } from '../types/chat';

interface ChatContextType {
    messages: Message[];
    currentQuestion: number;
    answers: Record<string, string>;
    sendMessage: (text: string) => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Seja Bem-vindo(a) ao AI ApCard, eu sou o Ap Robot e estou aqui para ajudar você a gerar uma apresentação de forma fácil e rápida. Inicialmente, irei fazer algumas perguntas para criar uma apresentação personalizada para você. Então responda com sinceridade',
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
    ]);

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const questions: Question[] = [
        { id: 1, text: 'Qual é o seu nome completo?', field: 'name' },
        { id: 2, text: 'Qual é a sua área de atuação profissional?', field: 'profession' },
        { id: 3, text: 'Quantos anos de experiência você tem?', field: 'experience' },
        { id: 4, text: 'Quais são suas principais habilidades?', field: 'skills' },
        { id: 5, text: 'Qual é o objetivo desta carta de apresentação?', field: 'objective' },
    ];

    const sendMessage = (text: string) => {
        // Adiciona a mensagem do usuário
        const userMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isTyping: false
        };

        setMessages(prev => [...prev, userMessage]);

        // Salva a resposta
        const currentQ = questions[currentQuestion];
        setAnswers(prev => ({ ...prev, [currentQ.field]: text }));

        // Verifica se ainda há perguntas
        if (currentQuestion < questions.length - 1) {
            // Avança para a próxima pergunta
            setCurrentQuestion(prev => prev + 1);

            // Adiciona a próxima pergunta do bot com efeito de digitação
            setTimeout(() => {
                const nextQuestion = questions[currentQuestion + 1];
                const botMessage: Message = {
                    id: Date.now().toString(),
                    text: nextQuestion.text,
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isTyping: false,
                };
                setMessages(prev => [...prev, botMessage]);

                // Remove o efeito de digitação após 2 segundos
                setTimeout(() => {
                    setMessages(prev => prev.map(msg =>
                        msg.id === botMessage.id ? { ...msg, isTyping: true } : msg
                    ));
                }, 2000);
            }, 1000);
        } else {
            // Todas as perguntas foram respondidas - podemos enviar para a API
            setTimeout(() => {
                const botMessage: Message = {
                    id: Date.now().toString(),
                    text: 'Obrigado pelas informações! Estou gerando sua carta de apresentação...',
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isTyping: true,
                };
                setMessages(prev => [...prev, botMessage]);

                // Aqui você chamaria a API
                // generateCoverLetter(answers);
            }, 1000);
        }
    };

    return (
        <ChatContext.Provider value={{ messages, currentQuestion, answers, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};
