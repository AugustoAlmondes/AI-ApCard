import { useState, type ReactNode, useEffect } from "react";
import type { Message, Question } from "../types/chat";
import { ChatContext } from "../contexts/ChatContext";
import { query } from "../service/api";
import type { Data } from "../service/api"

export const ChatProvider = ({ children }: { children: ReactNode }) => {

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'intro',
            text: 'Seja Bem-vindo(a) ao AI ApCard! Eu sou o Ap Robot e estou aqui para ajudar você a gerar uma apresentação de forma fácil e rápida. Inicialmente, irei fazer algumas perguntas para criar uma apresentação personalizada para você. Então responda com sinceridade.',
            sender: 'bot',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isTyping: true
        }
    ]);

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [disableButton, setDisableButton] = useState<boolean>(false);
    const [finallyChat, setFinallyChat] = useState<boolean>(false);

    const questions: Question[] = [
        { id: 1, text: 'Qual é o seu nome completo?', field: 'name' },
        { id: 2, text: 'Qual é a sua área de atuação profissional?', field: 'profession' },
        { id: 3, text: 'Quantos anos de experiência você tem?', field: 'experience' },
        { id: 4, text: 'Quais são suas principais habilidades?', field: 'skills' },
        { id: 5, text: 'Qual é o objetivo desta carta de apresentação?', field: 'objective' },
    ];

    useEffect(() => {
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
    }, []);

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
                    text: 'Obrigado pelas informações! Estou gerando sua carta de apresentação...',
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isTyping: true,
                };

                setMessages(prev => [...prev, botMessage]);
            }, 800);

            const finalPrompt = `
                Você é um assistente profissional especializado na criação de cartas de apresentação altamente personalizadas, elegantes e bem escritas.

                Com base nas informações abaixo, gere uma carta de apresentação completa, coerente e com tom profissional. A carta deve:

                Essa apresentação terá o objetivo de divulgar o perfil do candidato e seus projetos em redes sociais, como o Linkedin.

                - Ter no máximo 2 parágrafos.
                - Apresentar o candidato com clareza.
                - Destacar suas habilidades e anos de experiência.
                - Relacionar suas competências ao objetivo informado.
                - Usar linguagem formal, porém natural.
                - Não repetir perguntas.
                - Não usar listas — apenas texto corrido.

                Informações do usuário:
                - Nome completo: ${answers.name}
                - Área de atuação: ${answers.profession}
                - Anos de experiência: ${answers.experience}
                - Principais habilidades: ${answers.skills}
                - Objetivo da carta: ${answers.objective}

                Agora gere a carta completa.`;

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
        <ChatContext.Provider value={{ messages, currentQuestion, answers, sendMessage, disableButton, finallyChat, setFinallyChat}}>
            {children}
        </ChatContext.Provider>
    );
};
