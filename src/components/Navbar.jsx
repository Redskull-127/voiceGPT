import Image from "next/image"

export default function Navbar() {
    return (
        <div className="flex w-full h-24 px-16 bg-cus-white">
            <Image src="/logo.svg" height={0} width={120} alt="text" />
        </div>
    )
}