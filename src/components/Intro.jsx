/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ["latin"] , variants: ['400']})
export default function Intro() {
    return (
        <div className="bg-Intro w-full h-screen flex flex-col justify-center items-center">
            <Image src="/Gif/wave.gif" className="mix-blend-screen" height={100} width={400} alt="text" />
            <div className="flex flex-col text-center">
                <Image src="/Text/voice.svg" height={0} width={300} alt="text" />
                <h1 className="text-xl text-cus-white">Unleash the power of your voice</h1>
            </div>
        </div>
    )
}