import { useState, useEffect } from "react"
// import { async } from "regenerator-runtime"

function AllData({ data }) {

    useEffect(() => {
        if (document.getElementById('textarea')) {
            const parent = document.getElementById('textarea')
            const child = document.createElement('p')
            child.className = "w-fit px-3 py-2 rounded-3xl bg-white text-primary"
            child.innerText = "Hello"
            parent.appendChild(child)
        }
    }, [])

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="my-10 text-4xl">All Data</h1>
            <div id="textarea" className="w-[90%] rounded-2xl h-[80%] overflow-y-scroll bg-cus-white shadow-2xl"></div>
        </div>
    )
}
export async function getStaticProps() {
    // const resp = await connectToDatabase()
    // const data = await resp.find().toArray()
    // const prop = data[0].text
    // return {
    //     props: {
    //         response: prop
    //     }
    // }
    const resp = await fetch('https://backend-task-j46c.onrender.com/all').then(res => res.json()).then((data) => {
    console.log(data)    
    const response = data.data[0].text
        return response
    })
    return {
        props: {
            data: resp
        }
    }
}

export default AllData