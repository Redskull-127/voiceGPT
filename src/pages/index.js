import Head from "next/head";
import Intro from "@/components/Intro";
import { useEffect, useState } from "react";
import HomePage from "@/components/homepage/HomePage";

export default function Home() {
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  });

  if (intro) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Intro />
      </>
    );
  } else {
    return (
      <HomePage />
    );
  }
}
