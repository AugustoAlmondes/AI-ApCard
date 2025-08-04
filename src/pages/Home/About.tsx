import { FaLightbulb } from "react-icons/fa";
import { IoCodeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function About() {
    return (
        <div className={`bg-black min-h-screen w-full p-10 md:p-20 relative`}>
            <h1 className={`text-4xl md:text-6xl text-center font-semibold 
            background-clip-text text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BFE2FF]`}>
                Conheça a Inteligência por Trás das suas Cartas
            </h1>

            <p className={`text-white text-center mt-5 font-extralight text-md md:text-xl mb-20`}>
                Transforme suas experiências em palavras de impact. Gere Cartas de apresentação profissionais com o poder da IA.
            </p>

            <ul className={`flex flex-wrap justify-center gap-10 mt-10`}>
                <li className = {`flex flex-col items-center gap-2 mb-10`}>
                    <div className={`flex mb-2
                    items-center justify-center p-3 w-max h-max rounded-2xl`}
                        style={{ background: "radial-gradient(100% 100% at 65% 35%, #0984e93a, #0984e960, #0984E9)" }}
                    >
                        <FaLightbulb className={`text-[#0984E9] md:text-3xl text-4xl`} />
                    </div>
                    <h2 className={`text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BFE2FF]`}>Propósito</h2>
                    <p className={`text-white text-center font-extralight text-md `}>
                        O AI ApCart nasceu com o objetivo de simplificar a criação de cartas de apresentação profissionais e personalizadas.
                    </p>
                </li>

                <li className = {`flex flex-col items-center gap-2 mb-10`}>
                    <div className={`flex mb-2
                    items-center justify-center p-3 w-max h-max rounded-2xl`}
                        style={{ background: "radial-gradient(100% 100% at 65% 35%, #0984e93a, #0984e960, #0984E9)" }}
                    >
                        <MdEmail className={`text-[#0984E9] text-4xl md:text-3xl`} />
                    </div>
                    <h2 className={`text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BFE2FF]`}>Uso</h2>
                    <p className={`text-white text-center font-extralight text-md `}>
                        Utilizamos tecnologia de ponta em inteligência artificial para gerar textos com fluidez e coerência.
                    </p>
                </li>

                <li className = {`flex flex-col items-center gap-2 mb-10`}>
                    <div className={`flex mb-2
                    items-center justify-center p-3 w-max h-max rounded-2xl`}
                        style={{ background: "radial-gradient(100% 100% at 65% 35%, #0984e93a, #0984e960, #0984E9)" }}
                    >
                        <IoCodeSharp className={`text-[#0984E9] text-4xl md:text-3xl`} />
                    </div>
                    <h2 className={`text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BFE2FF]`}>API</h2>
                    <p className={`text-white text-center font-extralight text-md `}>
                        O AI ApCart utiliza a API da Hugging Face, uma das principais plataformas de modelos de linguagem no mundo.
                    </p>
                </li>
            </ul>
        </div>
    );
}