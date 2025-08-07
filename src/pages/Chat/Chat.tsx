import { BiSend } from "react-icons/bi";
import BotBalloon from "../../components/BotBalloon";
import UserBalloon from "../../components/UserBalloon";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useChat } from "../../hooks/useChat";

export default function Chat() {
    const navigate = useNavigate();
    const { messages, sendMessage } = useChat();
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            sendMessage(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="relative flex flex-col items-center py-7 h-screen bg-gradient-to-b from-[#021728] to-[#001323]">
            <div className={`absolute top-0 left-0 w-full flex justify-center bg-gradient-to-b via-[#001323] from-[#021728] to-transparent py-10 z-20`} />

            <div className={`absolute top-0 left-5 flex items-center gap-2 justify-center py-4 z-20 text-white text-md opacity-50 hover:opacity-100 cursor-pointer`}
                onClick={() => navigate('/')}
            >
                <BsArrowLeft size={20} /> Voltar
            </div>

            <h3 className={`absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center py-4 z-20 text-white text-md opacity-50`}>Ap Robot</h3>

            <div className="flex flex-col w-full max-h-[90vh] gap-10 max-w-4xl h-full px-4 pt-13 pb-32 overflow-y-auto space-y-4 scrollbar-hide">
                {messages.map((message) => (
                    <div key={message.id}>
                        {message.sender === 'bot' ? (
                            <BotBalloon
                                text={message.text}
                                time={message.time}
                                typing={message.isTyping || false}
                            />
                        ) : (
                            <UserBalloon
                                text={message.text}
                                time={message.time}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t from-[#001323] to-transparent py-6">
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-2xl gap-2 px-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 bg-[#0a223a] text-white rounded-lg px-4 py-3 outline-none border border-[#1a2e47] focus:border-[#0984E9] transition relative z-[2]"
                    />
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#0984E9] text-[white] px-5 py-3 rounded-lg hover:bg-[#0984E9] transition relative z-[2]"
                    >
                        Enviar <BiSend size={20} />
                    </button>
                </form>
                <div className={`absolute bottom-0 left-0 w-full flex justify-center bg-gradient-to-t via-[#001323] from-[#021728] to-transparent py-23 z-[0]`} />
            </div>
        </div>
    );
}