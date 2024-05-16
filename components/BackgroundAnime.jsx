'use client'

import Image from "next/image"

const BackgroundAnime = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[-5]'>
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/paralelogram.png"
                width={375}
                height={375}
                className="move-elem-3 hover:top-[29%] hover:right-[27%] duration-1000 absolute top-[27%] right-[25%] z-0"

            />
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/paralelogram.png"
                width={375}
                height={375}
                className="move-elem-3 hover:top-[22%] hover:right-[32%] duration-1000 absolute top-[20%] right-[30%] z-0"

            />
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/paralelogram.png"
                width={375}
                height={375}
                className="move-elem-4 hover:bottom-[20%] hover:left-[12%] duration-1000 absolute bottom-[18%] left-[10%] z-0"
            />
            <Image
                alt="Image de abdel-samade le développeur web"
                src="/assets/elements/paralelogram_2.png"
                width={375}
                height={375}
                className="move-elem-4 hover:bottom-[14%] hover:left-[19%] duration-1000 absolute bottom-[12%] left-[17%] z-0"
            />
        </div>
    )
}

export default BackgroundAnime