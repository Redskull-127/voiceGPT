// import fetch from "node-fetch"

export default async function getRes(question) {
    console.log("question", question);
    await fetch("https://meer-chatgpt.onrender.com/", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify({
            email: "chatgpt@meertarbani.dev",
            password: "Hmeer@1257",
            content: `${question}`,
        }),
        redirect: "follow",

    })
        .then((response) => response.text())
        .then(async (result) => {
            console.log("result", result);
            const res = await JSON.parse(result);
            const data = await JSON.parse(res.result);
            const answer = await data.choices[0].message.content || "error";
            if (!answer) {
                return "error";
            }
            return answer
        })
        .catch((error) => { console.log("error", error); return error.message });
}