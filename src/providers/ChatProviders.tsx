import { useState, type ReactNode, useEffect } from "react";
import type { Message, Question } from "../types/chat";
import { ChatContext } from "../contexts/ChatContext";
import { query } from "../service/api";
import type { Data } from "../service/api"

export const ChatProvider = ({ children }: { children: ReactNode }) => {

    const initialMessages: Message[] = [
        {
            id: 'intro',
            text: 'Bem-vindo(a) ao AI ApCard! Eu sou o Ap Robot e vou ajudar você a criar um perfil profissional claro, marcante e alinhado aos seus objetivos. Para montar um texto personalizado e de alto impacto, vou fazer algumas perguntas rápidas sobre você. Responda com tranquilidade — cada detalhe ajuda a deixar seu perfil ainda melhor.',
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isTyping: true
        }
    ];

    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [disableButton, setDisableButton] = useState<boolean>(false);
    const [finallyChat, setFinallyChat] = useState<boolean>(false);

    const questions: Question[] = [
        { id: 1, text: 'Para começar, qual é o seu nome completo?', field: 'name' },
        { id: 2, text: 'Em qual área você atua profissionalmente?', field: 'profession' },
        { id: 3, text: 'Quantos anos de experiência você possui nessa área?', field: 'experience' },
        { id: 4, text: 'Quais habilidades você considera suas principais fortalezas?', field: 'skills' },
        { id: 5, text: 'Qual é o principal objetivo do seu perfil profissional?', field: 'objective' },
    ];

    const startInitialChat = () => {
        const timer = setTimeout(() => {
            setMessages(prev =>
                prev.map(msg =>
                    msg.id === "intro" ? { ...msg, isTyping: false } : msg
                )
            );

            setTimeout(() => {
                const firstQuestion: Message = {
                    id: Date.now().toString(),
                    text: questions[0].text,
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isTyping: false
                };
                setMessages(prev => [...prev, firstQuestion]);
            }, 600);

        }, 1500);

        return () => clearTimeout(timer);
    }

    useEffect(() => {
        startInitialChat();
    }, []);

    const resetChat = () => {
        setMessages(initialMessages);
        setCurrentQuestion(0);
        setAnswers({});
        setDisableButton(false);
        setFinallyChat(false);
        startInitialChat();
    }
    const sendMessage = (text: string) => {
        setDisableButton(true);

        const userMessage: Message = {
            id: Date.now().toString(),
            text,
            sender: 'user',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isTyping: false
        };

        setMessages(prev => [...prev, userMessage]);

        const currentQ = questions[currentQuestion];
        setAnswers(prev => ({ ...prev, [currentQ.field]: text }));

        if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
                const nextQuestion = questions[currentQuestion + 1];

                const botMessage: Message = {
                    id: Date.now().toString(),
                    text: nextQuestion.text,
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isTyping: true,
                };

                setMessages(prev => [...prev, botMessage]);

                setTimeout(() => {
                    setMessages(prev =>
                        prev.map(msg =>
                            msg.id === botMessage.id ? { ...msg, isTyping: false } : msg
                        )
                    );
                }, 1200);

                setDisableButton(false); // ← botão libera normalmente nas perguntas intermediárias

            }, 800);

            setCurrentQuestion(prev => prev + 1);

        } else {
            // Última pergunta
            setTimeout(() => {
                const botMessage: Message = {
                    id: Date.now().toString(),
                    text: 'Obrigado pelas informações! Estou gerando sua apresentação...',
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isTyping: true,
                };

                setMessages(prev => [...prev, botMessage]);
            }, 800);

            const finalPrompt = `
                Você é um especialista na criação de perfis profissionais modernos, diretos e de alta qualidade, ideais para uso em redes como LinkedIn, portfólios e apresentações pessoais.

                Com base nas informações fornecidas pelo usuário, gere um texto de apresentação profissional com as seguintes características:

                - Deve ter no máximo 2 parágrafos.
                - Deve apresentar o profissional de forma clara e objetiva.
                - Utilizar linguagem natural, moderna e profissional.
                - Destacar a área de atuação, tempo de experiência e principais habilidades.
                - Conectar essas informações ao objetivo profissional informado pelo usuário.
                - Evitar repetição das perguntas.
                - Não usar listas; escrever apenas em texto corrido.
                - Não utilizar termos como “carta de apresentação”.

                Informações do usuário:
                - Nome completo: ${answers.name}
                - Área de atuação: ${answers.profession}
                - Anos de experiência: ${answers.experience}
                - Principais habilidades: ${answers.skills}
                - Objetivo: ${answers.objective}

                Com base nisso, gere um perfil profissional completo, fluido e convincente.`;

            const payload: Data = {
                messages: [
                    {
                        role: "system",
                        content: finalPrompt
                    }
                ]
            }

            // Continua desabilitado até a API responder
            setDisableButton(true);

            query(payload).then((res) => {
                if (res === "Erro") {
                    const botResponse: Message = {
                        id: Date.now().toString(),
                        text: "Algo deu errado. Tente novamente mais tarde",
                        sender: 'bot',
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        isTyping: false,
                    };
                    setMessages(prev => [...prev, botResponse]);
                    setDisableButton(false);
                    setFinallyChat(true);
                } else {
                    const botResponse: Message = {
                        id: Date.now().toString(),
                        text: res,
                        sender: 'bot',
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        isTyping: false,
                    };
                    setMessages(prev => [...prev, botResponse]);
                    setDisableButton(false);
                    setFinallyChat(true);
                }

            });
        }
    };

    return (
        <ChatContext.Provider value={{ messages, currentQuestion, answers, sendMessage, disableButton, finallyChat, setFinallyChat, resetChat }}>
            {children}
        </ChatContext.Provider>
    );
};
