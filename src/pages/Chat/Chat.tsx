import { BiSend } from "react-icons/bi";
import BotBalloon from "../../components/BotBalloon";
import UserBalloon from "../../components/UserBalloon";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router";

export default function Chat() {

    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center py-7 h-screen bg-gradient-to-b from-[#021728] to-[#001323]">
            <div className={`absolute top-0 left-0 w-full flex justify-center bg-gradient-to-b via-[#001323] from-[#021728] to-transparent py-10 z-20`} />

            <div className={`absolute top-0 left-5 flex items-center gap-2 justify-center py-4 z-20 text-white text-md opacity-50 hover:opacity-100 cursor-pointer`}
                onClick={() => {
                    navigate('/');
                }}
            >
                <BsArrowLeft size={20} /> Voltar
            </div>

            <h3 className={`absolute top-0 left-0 w-full flex justify-center py-4 z-20 text-white text-md opacity-50`}>Ap Robot</h3>

            <div className="flex flex-col w-full max-h-[90vh] gap-10 max-w-4xl h-full px-4 pt-13 pb-32 overflow-y-auto space-y-4">

                <BotBalloon text="Olá! Como posso ajudar você hoje? Estou aqui para responder perguntas e fornecer informações úteis. Como posso ajudar você hoje? Estou aqui para responder perguntas e fornecer informações úteis.
                Olá! Como posso ajudar você hoje? Estou aqui para responder perguntas e fornecer informações úteis. Como posso ajudar você hoje? Estou aqui para responder perguntas e fornecer informações úteis."
                    time="20:42"
                />

                <UserBalloon text="Olá, eu gostaria de saber mais sobre o projeto." time="20:42" />

                <BotBalloon text="Olá! Como posso ajudar você hoje? Estou aqui para responder perguntas e fornecer informações úteis. Como posso ajudar você hoje? Estou aqui para responder perguntas e fornecer informações úteis."
                    time="20:42"
                />

                <UserBalloon text="Olá, eu gostaria de saber mais sobre o projeto." time="20:42" />

            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-[#001323] to-transparent py-6">
                <form className="flex w-full max-w-2xl gap-2 px-4">
                    <input
                        type="text"
                        placeholder="Digite sua mensagem..."
                        className="flex-1 bg-[#0a223a] text-white rounded-lg px-4 py-3 outline-none border border-[#1a2e47] focus:border-[#3b82f6] transition relative z-[2]"
                    />
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#3b82f6] text-[white] px-5 py-3 rounded-lg hover:bg-[#2563eb] transition relative z-[2]"
                    >
                        Enviar <BiSend size={20} />
                    </button>
                </form>
                <div className={`absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t via-[#001323] from-[#021728] to-transparent py-23 z-[0]`} />
            </div>
        </div>
    );
}