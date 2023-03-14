import Sidebar from "../sidebar/sidebar"
import Navbar from "../Navbar"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useSpeechRecognition, useSpeechSynthesis } from 'react-speech-kit';

export default function HomePage() {

    const [isClicked, setIsClicked] = useState(true)
    const [value, setValue] = useState('')
    const { speak } = useSpeechSynthesis();
    const { listen, listening, transcript, stop } = useSpeechRecognition({
        onResult: (result) => {
            console.log(result)
            setValue(result)
        },
    });
    const handleListen = () => {
        listen();
    };
    const handleStop = () => {
        stop();
    }
    return (
        <div className="w-full h-screen overflow-hidden flex flex-col bg-w-color">
            <h1 className="absolute left-[55%] text-3xl top-1/2">Select any option to continue</h1>
            <Navbar />
            <div className="h-screen w-screen flex">
                <div className="w-[330px] h-[90%] rounded-xl bg-cus-white m-4 shadow-xl">
                    <Sidebar />
                </div>
                <div id="voice-chat" className="hidden overflow-y-scroll relative bg-w-color m-4 h-[90%] w-full">
                    <div className="flex flex-col gap-3" id="textareas">
                    </div>

                </div>
            </div>
            {isClicked ? (<Image src="/Icons/micwhite.svg" onClick={() => {
                try {
                    handleListen()
                } finally {
                    setIsClicked(false)
                }
            }} className="cursor-pointer absolute bottom-10 bg-primary p-5 rounded-full left-1/2" height={0} width={68} alt="text" />) : (<Image src="/Gif/wavesmall.gif" onClick={() => {
                try {
                    handleStop()
                } finally {
                    setIsClicked(true)
                    if (document.getElementById('textareas')) {
                        const textareas = document.getElementById('textareas')
                        const textarea = document.createElement('p')
                        textarea.className = "w-fit px-3 py-2 rounded-3xl bg-white text-primary"
                        textarea.innerText = value
                        textareas.appendChild(textarea)
                    }

                    fetch("https://chat.meertarbani.co/", {
                        method: "POST",
                        headers: new Headers({
                            "Content-Type": "application/json",
                            'Access-Control-Allow-Origin': '*'
                        }),
                        body: JSON.stringify({
                            email: "chatgpt@meertarbani.dev",
                            password: "Hmeer@1257",
                            content: `${value}`,
                        })
                    }).then((response) => response.text()).then(async (result) => {
                        // console.log("result", result);
                        const res = await JSON.parse(result);
                        const data = await JSON.parse(res.result);
                        const answer = await data.choices[0].message.content || "error";
                        if (!answer) {
                            return "error";
                        }
                        console.log(answer)
                        if (document.getElementById('textareas')) {
                            const textareas = document.getElementById('textareas')
                            const textarea = document.createElement('p')

                            textarea.className = "w-fit px-3 py-2 rounded-3xl bg-primary text-white"
                            textarea.innerText = answer
                            textareas.appendChild(textarea)
                        }
                        setTimeout(() => {
                            speak({ text: answer })
                        }, 1000)

                        const mongoData = {}
                        mongoData.question = value
                        mongoData.text = answer
                        fetch(`https://backend-task-j46c.onrender.com/question=${mongoData.question}/ans=${mongoData.text}`, {
                            method: "POST",
                            headers: new Headers({
                                "Content-Type": "application/json",
                            })
                        }).then((res) => console.log(res))
                        
                    })
                        .catch((error) => { console.log("error", error); return error.message });

                }
            }} className="cursor-pointer absolute bottom-10 bg-primary p-5  rounded-full left-1/2" height={0} width={68} alt="gif" />)}
        </div>
    )
}