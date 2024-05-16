'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IoCheckmark } from "react-icons/io5";
import BackgroundAnime from "@components/BackgroundAnime"

const Home = () => {
    return (
        <>
            <header className="xl:pt-24 overflow-hidden bg-fond-header bg-cover pt-12 z-0 text-white relative min-h-[75vh]">
                <Image
                    alt="Background btp"
                    width={1920}
                    height={1080}
                    src="/assets/backgrounds/fond-header.png"
                    className="absolute top-0 left-0 right-0 bottom-0 -z-40 min-h-[75vh] xl:w-auto hidden xl:block w-[200%]"
                />
                <BackgroundAnime />
                <div className="xl:max-w-[800px] p-4 mx-auto max-w-[600px] xl:ml-32 xl:mt-24">
                    <span className="uppercase pb-4 block text-primary">BTP Platform</span>
                    <h1 className="xl:text-6xl text-nowrap text-3xl uppercase font-semibold">Premier Titre <strong className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-700">Principale</strong></h1>
                    <hr className="max-w-[150px] border-white mb-4 mt-2" />
                    <p className="leading-6 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, delectus sint fugiat ut animi nemo reiciendis voluptates architecto sed accusamus eaque expedita ipsa earum, unde, placeat non odio? Unde, dicta.</p>
                    <div className="flex my-5 items-center justify-center flex-wrap">
                        <Link
                            href="/"
                            className="p-3 py-4 hover:basis-[350px] hover:bg-teal-500 shadow-2xl duration-200 font-semibold ml-0 m-2 basis-[300px] grow rounded-3xl bg-primary"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/"
                            className="p-3 py-4 hover:basis-[350px] hover:bg-teal-500 shadow-2xl duration-200 font-semibold ml-0 xl:ml-2 m-2 basis-[300px] grow rounded-3xl bg-primary"
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
            <section className="bg-white">
                <div className="max-w-[600px] mx-auto mt-24 pb-12">
                    <strong className="bg-clip-text tracking-[2px] uppercase text-center mx-auto block py-2 text-transparent bg-gradient-to-r from-primary to-teal-700">Services</strong>
                    <h2 className="font-bold text-teal-950 text-center mx-auto text-5xl">Deuxieme titre du site pour les services</h2>
                </div>
                <section className="flex items-center justify-center mx-auto flex-wrap">
                    <Image
                        alt="développemnt dans le BTP"
                        src="/assets/elements/building.png"
                        width={450}
                        height={450}
                        className="pb-16"
                    />
                    <div className="xl:pl-14 px-8 xl:pt-12 pb-0">
                        <strong className="bg-clip-text tracking-[2px] py-3 block text-transparent bg-gradient-to-r uppercase from-teal-400 to-teal-700">Simple features</strong>
                        <h3 className="text-3xl font-semibold">Pour les ouvriers.</h3>
                        <div className="flex my-4 p-2 items-center justify-start">
                            <IoCheckmark className="text-teal-800 p-2 bg-green-200 rounded-[100%] text-4xl mr-2" /> <p>Une information quelconque <strong>Élément</strong></p>
                        </div>
                        <div className="flex my-4 p-2 items-center justify-start">
                            <IoCheckmark className="text-teal-800 p-2 bg-green-200 rounded-[100%] text-4xl mr-2" /> <p>Une information quelconque <strong>Élément</strong></p>
                        </div>
                        <div className="flex my-4 p-2 items-center justify-start">
                            <IoCheckmark className="text-teal-800 p-2 bg-green-200 rounded-[100%] text-4xl mr-2" /> <p>Une information quelconque <strong>Élément</strong></p>
                        </div>
                        <div className="flex my-4 p-2 items-center justify-start">
                            <IoCheckmark className="text-teal-800 p-2 bg-green-200 rounded-[100%] text-4xl mr-2" /> <p>Une information quelconque <strong>Élément</strong></p>
                        </div>
                        <Link href='/' className="p-3 mt-12 block w-fit py-4 text-white px-24 hover:px-32 duration-200 hover:bg-teal-500 shadow-2xl font-semibold ml-0 m-2 rounded-3xl bg-primary">
                            Contact
                        </Link>
                    </div>
                </section>
                <Image
                    alt="développemnt dans le BTP"
                    src="/assets/elements/lien.png"
                    width={600}
                    height={450}
                    className="mx-auto block"
                />
                <section className="flex items-center justify-center mx-auto flex-wrap">
                    <div className="xl:pl-14 px-8 xl:pt-0 pb-32">
                        <strong className="bg-clip-text tracking-[2px] py-3 block text-transparent bg-gradient-to-r uppercase from-teal-400 to-teal-700">Simple features</strong>
                        <h3 className="text-3xl font-semibold">Pour les ouvriers.</h3>
                        <div className="flex my-4 pl-0 p-2 items-center justify-start">
                            <IoCheckmark className="text-teal-800 p-2 bg-green-200 rounded-[100%] text-4xl mr-2" /> <p>Une information quelconque <strong>Élément</strong></p>
                        </div>
                        <div className="flex my-4 pl-0 p-2 items-center justify-start">
                            <IoCheckmark className="text-teal-800 p-2 bg-green-200 rounded-[100%] text-4xl mr-2" /> <p>Une information quelconque <strong>Élément</strong></p>
                        </div>
                        <div className="flex my-4 pl-0 p-2 items-center justify-start">
                            <IoCheckmark className="text-teal-800 p-2 bg-green-200 rounded-[100%] text-4xl mr-2" /> <p>Une information quelconque <strong>Élément</strong></p>
                        </div>
                        <div className="flex my-4 pl-0 p-2 items-center justify-start">
                            <IoCheckmark className="text-teal-800 p-2 bg-green-200 rounded-[100%] text-4xl mr-2" /> <p>Une information quelconque <strong>Élément</strong></p>
                        </div>
                        <Link href='/' className="p-3 mt-12 block w-fit py-4 text-white px-24 hover:px-32 duration-200 hover:bg-teal-500 shadow-2xl font-semibold ml-0 m-2 rounded-3xl bg-primary">
                            Contact
                        </Link>
                    </div>
                    <Image
                        alt="développemnt dans le BTP"
                        src="/assets/elements/building.png"
                        width={500}
                        height={450}
                        className="pb-16 relative bottom-24"
                    />
                </section>
                <section className="max-w-[1000px] mb-24 overflow-hidden z-0 relative text-white mx-auto flex items-center justify-around p-4 rounded-lg bg-gradient-to-l to-teal-800 from-primary">
                    <BackgroundAnime />
                    <Image
                        alt="développemnt dans le BTP"
                        src="/assets/elements/woman_3d.png"
                        width={300}
                        height={210}
                        className="px-12"
                    />
                    <div>
                        <h2 className="text-3xl font-bold pb-4">Troisieme titre du site internet</h2>
                        <p className="leading-6 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est fuga, explicabo, nisi quas unde, consequatur illo odit earum fugit non corrupti iste esse veniam atque! Repudiandae laboriosam autem blanditiis repellendus?</p>
                        <p className="leading-6 mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est fuga, explicabo, nisi quas unde, consequatur illo odit earum fugit non corrupti iste esse veniam atque! Repudiandae laboriosam autem blanditiis repellendus?</p>
                        <Link href='/' className="p-3 mt-8 block w-fit py-4 text-primary px-24 hover:px-32 duration-200 hover:bg-black shadow-2xl font-semibold ml-0 m-2 rounded-3xl bg-white">
                            Contact
                        </Link>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Home