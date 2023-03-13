import Image from "next/image"

export default function Sidebar() {
    return (
        <div className="w-full flex h-full">
            <ul className="my-5 flex flex-col gap-2 mx-7">
                <li onClick={() => {
                    if(document.getElementById('voice-chat')){
                        document.getElementById('voice-chat').classList.remove('hidden')
                    }
                }} className="transition-all duration-300 flex hover:bg-primary hover:text-white hover:cursor-pointer select-none px-2 py-4 rounded-lg gap-3">
                    <Image src="/Icons/micblack.svg" height={0} width={20} alt="text" />
                    <p className="font-medium text-xl">Voice Chat</p>
                </li>
                <li className="transition-all duration-300 flex gap-3 hover:bg-primary px-2 py-4 rounded-lg hover:text-white hover:cursor-pointer select-none">
                    <Image src="/Icons/timeblack.svg" height={0} width={20} alt="text" />
                    <p className="font-medium text-xl">Previous Chat</p>
                </li>
                <li className="transition-all duration-300 flex gap-3 hover:bg-primary px-2 py-4 rounded-lg hover:text-white hover:cursor-pointer select-none">
                    <Image src="/Icons/waveblack.svg" height={0} width={20} alt="text" />
                    <p className="font-medium text-xl inline-flex">About VoiceGPT</p>
                </li>
            </ul>

        </div>
    )
}