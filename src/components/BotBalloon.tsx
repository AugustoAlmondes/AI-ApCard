import { FaCircle } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

export default function BotBalloon({ text, time }: { text: string, time: string }) {
    return (
        <div className={`grid grid-cols-[auto_2fr] md:max-w-[50vw] mr-4`}>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><RiRobot2Fill size={25} color="#0984E9" /></div>

            <div
                className={'relative bg-[#0984E9] text-md text-white pl-3 pr-5 py-4 rounded-xl ml-2 w-max max-w-[72vw]'}>
                {/* {text} */}
                <p className = {`pl-2 flex gap-2 items-center`}>
                    <FaCircle size={6} />
                    <FaCircle size={6} />
                    <FaCircle size={6} />
                </p>

                <div className = {`absolute bottom-[-20px] text-sm font-extralight left-2 opacity-30`}>{time}</div>
            </div>
        </div>
    );
}