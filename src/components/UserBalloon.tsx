export default function UserBalloon({ text, time }: { text: string, time: string }) {
    return (
        <>
            <div className={`grid grid-cols-[auto] md:max-w-[50vw] ml-4 content-end`}>
                {/* <hr className={`border-1 border-[#b4ddff1c] w-[95%] mx-auto mb-5`} /> */}

                <div className={`w-full flex justify-end`}>
                    <div
                        className={'relative bg-[#B4DDFF] text-md text-black pl-3 pr-5 py-4 rounded-xl rounded-tr-none mr-2 max-w-[72vw]'}>
                        {text}

                        <div className={`absolute text-white opacity-30 bottom-[-20px] text-sm font-extralight right-2`}>{time}</div>
                    </div>
                </div>
                <hr className={`border-1 border-[#b4ddff0e] w-[95%] mx-auto mt-10`} />
            </div>
        </>
    );
}