import { useEffect } from 'react';

import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin } from '@mdi/js';

import portrait from '../../assets/frontpage.jpg'

function Home(props) {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <>
            <div className="w-[80%] h-screen max-w-screen-2xl mx-auto">
                <div className="h-full w-auto mx-auto flex flex-col items-center justify-center pt-12">

                    <div className="relative w-full h-[90%] border-black border-2 flex flex-row items-center justify-center">

                        <div className="absolute w-auto left-0 bottom-0 h-auto flex flex-col items-center justify-center z-10 bg-transparent">

                            <div className="w-full h-auto border-y-2 border-black flex flex-row items-center justify-start bg-white">
                                <p className="text-5xl p-3 font-medium h-full w-auto text-center">
                                    colin hartigan
                                </p>
                                <div className="w-auto h-full flex grow bg-black border-black" />
                            </div>

                            <div className="w-full h-auto border-b-2 border-black flex flex-row items-center justify-start bg-white">
                                <p className="text-2xl p-3 h-full border-r-2 border-black w-auto text-center">
                                    georgia tech ECE
                                </p>
                                <p className="text-2xl p-3 h-full border-r-0 border-black w-auto text-center">
                                    maryland 🡢 atlanta
                                </p>
                                <div className="w-auto h-full flex grow bg-black border-black" />
                            </div>

                            {/* <div className="w-full h-auto border-b-2 border-black flex flex-row items-center justify-start">
                                    <p className="text-xl p-3 h-auto w-full">
                                        a long block of text
                                    </p>
                                </div> */}

                            <div className="w-full h-auto border-b-0 border-black flex flex-row items-center justify-start bg-white">
                                <a href="https://github.com/colinhartigan" target="_blank" rel="noreferrer">
                                    <p className="text-lg p-2 h-full border-r-2 border-black w-auto text-center">
                                        github
                                    </p>
                                </a>
                                <a href="https://www.linkedin.com/in/colin-hartigan/" target="_blank" rel="noreferrer" >
                                    <p className="text-lg p-2 h-full border-r-2 border-black w-auto text-center">
                                        linkedin
                                    </p>
                                </a>
                                <div className="w-auto h-full flex grow bg-black border-black" />
                            </div>

                        </div>


                        <img src={portrait} alt="portrait" className="relative w-full h-full object-cover grayscale z-0" />

                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;