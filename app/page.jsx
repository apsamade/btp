'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import BackgroundAnime from "@components/BackgroundAnime"

const Home = () => {
    return (
        <>
            <header className="xl:pt-24 pt-12 z-0 bg-top-bottom-left bg-no-repeat text-white relative bg-fond-header bg-contain min-h-[75vh]">
                <BackgroundAnime />
                <div className="xl:max-w-[800px] max-w-[600px] ml-12 xl:ml-32 xl:mt-24">
                    <span className="uppercase pb-4 block text-teal-500">BTP Platform</span>
                    <h1 className="text-5xl uppercase font-semibold">Premier Titre Principale</h1>
                    <hr className="max-w-[150px] border-white mb-4 mt-2" />
                    <p className="leading-6 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, delectus sint fugiat ut animi nemo reiciendis voluptates architecto sed accusamus eaque expedita ipsa earum, unde, placeat non odio? Unde, dicta.</p>
                    <div className="flex my-5 items-center justify-center flex-wrap">
                        <Link 
                        href="/"
                        className="p-3 py-4 hover:basis-[350px] hover:bg-teal-600 shadow-2xl duration-200 font-semibold ml-0 m-2 basis-[300px] grow rounded-3xl bg-teal-500"
                        >
                            Contact
                        </Link>
                        <Link 
                        href="/"
                        className="p-3 py-4 hover:basis-[350px] hover:bg-teal-600 shadow-2xl duration-200 font-semibold ml-0 xl:ml-2 m-2 basis-[300px] grow rounded-3xl bg-teal-500"
                        >
                            Devis
                        </Link>
                    </div>
                </div>
                <Image 
                alt="développemnt dans le BTP"
                src="/assets/elements/building.png"
                width={600}
                height={600}
                className="absolute bottom-4 right-[5%] xl:block hidden"
                />
            </header>
            <section className="h-[50vh] bg-white">

            </section>
        </>
    )
}

export default Home