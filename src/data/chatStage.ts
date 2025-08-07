import type { ChatStage } from "../types/chat";

export const chatStages: ChatStage[] = [
    { id: '1', question: 'Qual o seu nome?', key: 'name' },
    {
        id: '2',
        question: 'Quantos anos de experiência você tem na área?',
        key: 'experiencia',
    },
    {
        id: '3',
        question: 'Qual a sua especialidade?',
        key: 'especialidade',
    },
    {
        id: '4',
        question: 'Quais são suas principais habilidades?',
        key: 'habilidades',
    },
    {
        id: '5',
        question: 'Qual o seu objetivo profissional?',
        key: 'objetivo',
    },
    {
        id: '6',
        question: 'Qual o seu objetivo pessoal?',
        key: 'objetivoPessoal',
    },
    {
        id: '7',
        question: 'Qual a sua idade?',
        key: 'idade',
    },

]