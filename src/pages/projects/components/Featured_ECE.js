import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';

import Icon from '@mdi/react'
import { mdiArrowRight, mdiStarOutline, mdiSourceBranch, mdiDownloadOutline } from '@mdi/js'

function Featured(props) {

    const [downloads, setDownloads] = useState(0);
    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);

    const [image, setImage] = useState("");

    return (

        <div className="w-[100%] max-w-[100%] h-auto self-center flex flex-col items-start justify-start">

            <div className="min-w-full flex xl:flex-row flex-col items-stretch justify-center">

                <div className="min-h-full xl:w-auto w-full px-4 py-5 border-r-2 xl:border-b-2 border-b-2 border-l-2 border-t-2 border-black flex flex-col justify-center items-start">
                    <p className="text-4xl font-medium">
                        weathermat
                    </p>
                </div>

                <div className="min-h-full xl:w-auto w-full grow flex flex-row items-stretch justify-center">

                    <div className="min-h-full xl:w-auto w-[50%] px-5 py-2 flex flex-col items-center justify-center xl:border-l-0 border-l-2 border-r-2 xl:border-t-2 border-b-2 border-black">
                        <a href="https://github.com/colinhartigan/modular-matrix" target="_blank" rel="noreferrer" className="text-lg text-center underline">
                            github
                        </a>
                    </div>

                    <div className="min-h-full xl:w-auto xl:grow w-[50%] flex flex-row items-center justify-center bg-black border-black border-2">
                        <a href="/#/ece1100" className="text-lg text-white underline flex flex-row justify-center items-center">
                            see more <Icon className="ml-1" path={mdiArrowRight} size={1} />
                        </a>
                    </div>

                </div>

            </div>

            <div className="relative min-w-full h-48 flex flex-col justify-center items-center border-black border-2 border-t-0 object-none overflow-hidden">
                <img src={image} className="absolute min-w-full h-auto grayscale object-cover blur-sm" alt="featured project" />
            </div>

            <div className="w-full grow flex xl:flex-row flex-col items-stretch justify-evenly">

                <div className="xl:w-full w-full min-h-full flex flex-row items-center justify-center">

                    <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center border-b-2 border-l-2 border-r-2 border-black ">
                        <p className="text-3xl text-center">
                            for ECE 1100 @ gatech
                        </p>
                    </div>


                </div>
                
                <div className="xl:w-full w-full min-h-full px-4 py-2 flex flex-col items-center justify-center border-b-2 xl:border-l-0 border-l-2 border-r-2 border-black">

                    <p className="text-3xl text-center">
                        micropython
                    </p>
                    <p className="text-lg">
                        language
                    </p>

                </div>

                <div className="w-full min-h-full px-4 py-2 flex flex-col items-center justify-center border-l-2 xl:border-l-0 border-r-2 border-b-2 border-black">

                    <p className="text-3xl text-center">
                        esp32, ws2812b LEDs
                    </p>
                    <p className="text-lg">
                        hardware
                    </p>

                </div>


            </div>

        </div>

    )

}

export default Featured;