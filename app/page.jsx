'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
    return (
        <>
            <header className="pt-24 bg-fond-header bg-cover min-h-[75vh]">
                <div className="max-w-[800px] ml-32 mt-24">
                    <h1 className="text-4xl uppercase font-semibold">Premier Titre Principale</h1>
                    <hr className="max-w-[150px] border-black mb-4 mt-1" />
                    <p className="leading-6 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, delectus sint fugiat ut animi nemo reiciendis voluptates architecto sed accusamus eaque expedita ipsa earum, unde, placeat non odio? Unde, dicta.</p>
                    <div>
                        <Link 
                        href="/"
                        className=""
                        >

                        </Link>
                        <Link 
                        href="/"
                        className=""
                        >

                        </Link>
                    </div>
                </div>
            </header>
            <section className="h-[50vh] bg-purple-200">

            </section>
        </>
    )
}

export default Home