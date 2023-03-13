import Sidebar from "../sidebar/sidebar"
import Navbar from "../Navbar"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useSpeechRecognition } from 'react-speech-kit';
import getRes from "../getRes";

export default function HomePage() {
    const [isClicked, setIsClicked] = useState(true)
    const [value, setValue] = useState('')
    const { listen, listening, transcript } = useSpeechRecognition({
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
        <div className="w-full h-screen flex flex-col bg-w-color">
            <h1 className="absolute left-[55%] text-3xl top-1/2">Select any option to continue</h1>
            <Navbar />
            <div className="h-screen w-screen flex">
                <div className="w-[330px] h-[90%] rounded-xl bg-cus-white m-4 shadow-xl">
                    <Sidebar />
                </div>
                <div id="voice-chat" className="hidden relative bg-w-color m-4 h-[90%] w-full">
                    <div className="flex justify-end items-end overflow-y-scroll flex-col gap-3" id="textareas">
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
                            if(document.getElementById('textareas')){
                                const textareas = document.getElementById('textareas')
                                const textarea = document.createElement('textarea')
                                textarea.rows = 3
                                textarea.cols = 70
                                textarea.className = "w-1/2 px-3 py-2 rounded-3xl"
                                textarea.value = value
                                textareas.appendChild(textarea)
                            }
                            console.log(getRes(value))
                        }
                    }} className="cursor-pointer absolute bottom-10 bg-primary p-5  rounded-full left-1/2" height={0} width={68} alt="gif" />)}
                </div>
            </div>
        </div>
    )
}