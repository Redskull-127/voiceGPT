import { useState, useEffect } from "react"
// import { async } from "regenerator-runtime"

function AllData({ data }) {
    const dataArr = (data.data)
    console.log(dataArr)
    useEffect(() => {
        if(dataArr){
            dataArr.map((data) => {
                const textarea = document.getElementById('textarea')
                const p = document.createElement('p')
                p.className = 'w-fit m-5 px-3 py-2 rounded-3xl bg-primary text-white'
                p.innerText = `Question: ${data.question} Ans: ${data.ans}`
                textarea.appendChild(p)
            })
        }
    }, [dataArr])

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="my-10 text-4xl">All Data</h1>
            <div id="textarea" className="w-[90%] rounded-2xl h-[80%] overflow-y-scroll bg-cus-white shadow-2xl">
                {/* {dataArr ??  {})} */}
            </div>
        </div>
    )
}
export async function getStaticProps() {

    const resp = await fetch('https://backend-task-j46c.onrender.com/all').then(res => res.json()).then((data) => {
        console.log(data)
        const response = data
        return response
    })
    return {
        props: {
            data: resp
        }
    }
}

export default AllData