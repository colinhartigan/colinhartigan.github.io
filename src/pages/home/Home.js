import react from 'react';

import me from '../../assets/me.jpg';
import namebg from '../../assets/namebg.png'
import background from '../../assets/background.png'

import EducationItem from './components/EducationItem';

function Home(props) {

    const iconSize = 30;

    const schools = [
        {
            "name": "JHU applied physics lab",
            "website": "https://secwww.jhuapl.edu/stem/stem-academy/",
            "dates": "2018 - 2022",
            "accent": "#68ACE5",
            "remarks": "hands-on courses led by industry professionals"
        },
        {
            "name": "marriotts ridge high school",
            "website": "https://mrhs.hcpss.org/",
            "dates": "2018 - 2022",
            "accent": "#170080",
            "remarks": "curriculum focus in STEM"
        },
        {
            "name": "georgia institute of technology",
            "website": "https://www.gatech.edu/",
            "dates": "2022 - 2026",
            "accent": "#B3A369",
            "remarks": "BS in computer engineering",
            "last": true,
        },
    ]

    return (
        <>
            <div className="h-screen mx-auto flex flex-col items-center justify-center">
                <div className="absolute w-auto h-auto flex flex-col items-center justify-center">
                    <div className="p-2 flex flex-col align-center justify-center ">
                        <div className="border-2 border-black p-3 overflow-hidden" >
                            <p className="text-5xl font-medium h-full bg-clip-text text-transparent" style={{ backgroundImage: `url(${namebg})`, }}>
                                COLIN HARTIGAN
                            </p>
                        </div>
                        <div className="flex flex-row align-center justify-center max-h-full">
                            <p className="text-2xl border-2 border-black border-t-0 py-2 px-4 font-medium text-center">
                                MD 🡢 ATL
                            </p>
                            <p className="text-2xl border-2 border-black grow border-l-0 border-t-0 py-2 px-4 font-medium text-center">
                                GT ECE 2026
                            </p>
                        </div>
                    </div>

                    {/* socials */}
                    <div className="flex flex-row align-center justify-center space-x-4 mt-1">
                        <a href="https://github.com/colinhartigan">
                            <svg className="transition ease-in-out delay-100 fill-black hover:fill-gray-500" width={iconSize} height={iconSize} viewBox="0 0 24 24">
                                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/colin-hartigan/">
                            <svg className="transition ease-in-out delay-100 fill-black hover:fill-gray-500" width={iconSize} height={iconSize} viewBox="0 0 24 24">
                                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                            </svg>
                        </a>
                    </div>
                </div>


                <div className="h-[25vh] mt-[75vh]">
                    <div className="h-auto overflow-hidden">
                        <div className="overflow-hidden h-auto">
                            <p className="h-auto text-center text-2xl animate-arrowPeriodic overflow-hidden">
                                🡣
                            </p>
                        </div>
                        <p className="text-center text-lg">
                            scroll for more
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:h-screen h-[200vh] mx-auto max-w-[80%] xl py-7 flex flex-col items-start justify-start">

                <div className="relative h-full xl:h-[50%]">
                    <div className="relative flex flex-col items-start h-auto z-10 pl-8">
                        <div className="w-min border-2 border-b-0 border-black p-2 overflow-hidden bg-white">
                            <p className="text-5xl h-full">
                                HELLO
                            </p>
                        </div>
                        <div className="w-8/12 text-2xl border-2 border-black p-2 bg-white">
                            <p className=" text-left h-full">
                                My name is Colin, and I am a computer engineering student from Maryland. I'm an avid programmer and tinkerer.
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-0 pt-8 w-auto h-full z-0">
                        <img className="h-full w-auto object-contain z-0" src={me} alt="thing" />
                    </div>
                </div>

                <div className="relative h-full xl:h-[50%] w-full">
                    <div className="relative flex flex-col items-end h-auto z-10 pr-8">
                        <div className="w-min border-2 border-b-0 border-black p-2 overflow-hidden bg-white">
                            <p className="text-5xl h-full">
                                EDUCATION
                            </p>
                        </div>
                        <div className="max-w-full xl:max-w-10/12 text-2xl border-x-2 xl:border-x-0 xl:border-y-2 border-black bg-white">

                            <div className="flex flex-col xl:flex-row justify-start align-center">

                                {schools.map((element, index) => {
                                    return <EducationItem data={element} key={index} />
                                })}
                                
                            </div>

                        </div>

                    </div>
                    <div className="absolute top-0 right-0 pt-8 w-auto h-full z-0">
                        <img className="h-full w-auto object-contain z-0" src="https://www.exploregeorgia.org/sites/default/files/legacy_images/TechTowerSign.jpg" alt="thing" />
                    </div>
                </div>
            </div>

            <div className="h-screen mx-auto flex flex-col items-center justify-center">
                bruh
            </div>
        </>
    )
}

export default Home;