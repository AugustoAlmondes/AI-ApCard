import { FaLightbulb } from 'react-icons/fa';
import type { AboutInfo } from '../types/AboutInfo';
import { MdEmail } from 'react-icons/md';
import { IoCodeSharp } from 'react-icons/io5';

export const AboutInfos: AboutInfo[] = [
    {
        icon: <FaLightbulb className={`text-[#0984E9] md:text-3xl text-4xl`} />,
        title: 'Propósito',
        description: ' O AI ApCart nasceu com o objetivo de simplificar a criação de cartas de apresentação profissionais e personalizadas.'
    },
    {
        icon: <MdEmail className={`text-[#0984E9] text-4xl md:text-3xl`} />,
        title: 'Uso',
        description: 'Utilizamos tecnologia de ponta em inteligência artificial para gerar textos com fluidez e coerência.'
    },
    {
        icon: <IoCodeSharp className={`text-[#0984E9] text-4xl md:text-3xl`} />,
        title: 'API',
        description: 'O AI ApCart utiliza a API da Hugging Face, uma das principais plataformas de modelos de linguagem no mundo.'
    }
]