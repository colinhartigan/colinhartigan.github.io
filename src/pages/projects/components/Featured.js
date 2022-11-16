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

    useEffect(() => {
        var downloads = 0;
        fetch("https://api.github.com/repos/colinhartigan/valorant-inventory-manager/releases")
            .then(response => response.json())
            .then(data => {
                for (const release of data) {
                    downloads += release.assets[0].download_count;
                }
                setDownloads(downloads)
            })

        fetch("https://api.github.com/repos/colinhartigan/valorant-inventory-manager")
            .then(response => response.json())
            .then(data => {
                setStars(data.stargazers_count)
                setForks(data.forks_count)
            });

        fetch("https://valorant-api.com/v1/bundles")
            .then(response => response.json())
            .then(data => {
                
                var image = data.data[Math.floor(Math.random()*data.data.length)].displayIcon
                console.log(image)
                setImage(image)
                console.log(image)
            });

    }, [])

    return (

        <div className="w-[100%] max-w-[100%] h-auto self-center flex flex-col items-start justify-start">

            <div className="min-w-full flex xl:flex-row flex-col items-stretch justify-center">

                <div className="min-h-full xl:w-auto w-full px-4 py-5 border-r-2 xl:border-b-2 border-b-2 border-l-2 border-t-2 border-black flex flex-col justify-center items-start">
                    <p className="text-4xl font-medium">
                        valorant-inventory-manager
                    </p>
                </div>

                <div className="min-h-full xl:w-auto w-full grow flex flex-row items-stretch justify-center">

                    <div className="min-h-full xl:w-auto w-[50%] px-5 py-2 flex flex-col items-center justify-center xl:border-l-0 border-l-2 border-r-2 xl:border-t-2 border-b-2 border-black">
                        <a href="https://github.com/colinhartigan/valorant-inventory-manager" target="_blank" rel="noreferrer" className="text-lg text-center underline">
                            github
                        </a>
                        <a href="https://www.reddit.com/r/VALORANT/comments/skxj2o" target="_blank" rel="noreferrer" className="text-lg text-center underline">
                            original reddit post
                        </a>
                    </div>

                    <div className="min-h-full xl:w-auto xl:grow w-[50%] flex flex-row items-center justify-center bg-black border-black border-2">
                        {/* <p className="text-lg text-white underline flex flex-row justify-center items-center">
                            case study <Icon className="ml-1" path={mdiArrowRight} size={1} />
                        </p> */}
                    </div>

                </div>

            </div>

            <div className="relative min-w-full h-48 flex flex-col justify-center items-center border-black border-2 border-t-0 object-none overflow-hidden">
                <img src={image} className="absolute min-w-full h-auto grayscale object-cover blur-sm" alt="featured project" />
            </div>

            <div className="w-full grow flex xl:flex-row flex-col items-stretch justify-evenly">

                <div className="xl:w-full w-full min-h-full flex flex-row items-center justify-center">

                    <div className="min-h-full w-full py-4 flex flex-col items-center justify-center border-r-2 border-l-2 border-b-2 border-black">


                        {downloads !== 0 ? <CountUp className="text-3xl text-center" end={downloads} useEasing separator="," duration={6} /> : <p className="text-3xl text-center">0</p>}

                        <div className="w-full h-auto px-4 flex flex-row items-center justify-center">
                            <Icon path={mdiDownloadOutline} size={1} />
                            <p className="text-lg ml-1">
                                downloads
                            </p>
                        </div>

                    </div>

                    <div className="min-h-full w-full py-4 flex flex-col items-center justify-center border-r-2 border-b-2 border-black">
                        {stars !== 0 ? <CountUp className="text-3xl text-center" end={stars} useEasing separator="," duration={5} /> : <p className="text-3xl text-center">0</p>}

                        <div className="w-full h-auto flex flex-row items-center justify-center">
                            <Icon path={mdiStarOutline} size={1} />
                            <p className="text-lg ml-1">
                                stars
                            </p>
                        </div>
                    </div>

                    <div className="min-h-full w-full py-4 flex flex-col items-center justify-center border-black border-r-2 border-b-2">
                        {forks !== 0 ? <CountUp className="text-3xl text-center" end={forks} useEasing separator="," duration={4} /> : <p className="text-3xl text-center">0</p>}

                        <div className="w-full h-auto flex flex-row items-center justify-center">
                            <Icon path={mdiSourceBranch} size={1} />
                            <p className="text-lg ml-1">
                                forks
                            </p>
                        </div>
                    </div>


                </div>

                <div className="xl:w-full w-full min-h-full px-4 py-2 flex flex-col items-center justify-center border-b-2 xl:border-l-0 border-l-2 border-r-2 border-black">

                    <p className="text-3xl text-center m-auto">
                        javascript, python, html
                    </p>
                    <p className="text-lg">
                        key languages
                    </p>

                </div>

                <div className="w-full min-h-full px-4 py-2 flex flex-col items-center justify-center border-l-2 xl:border-l-0 border-r-2 border-b-2 border-black">

                    <p className="text-3xl text-center m-auto">
                        react, websockets, material ui
                    </p>
                    <p className="text-lg">
                        key technologies
                    </p>

                </div>


            </div>

        </div>

    )

}

export default Featured;