import { useEffect } from 'react';

import Featured from './components/Featured'
import Project from './components/Project'

function Projects(props) {

    useEffect(() => {
        window.scrollTo({
            top: 0  
        })
    })

    return (
        <div className="h-fit w-2xl max-w-screen-2xl mx-auto flex flex-col items-start justify-start">
            <div className="w-[95%] h-auto grow mx-auto flex flex-col items-start justify-center pt-20 pb-8">

                <div className="w-min border-2 border-black p-2 mb-10 overflow-hidden bg-white">
                    <p className="text-5xl h-full">
                        PROJECTS
                    </p>
                </div>

                <Featured />

                <p className="w-full text-lg mt-16 text-center italic ">
                    more coming soon
                </p>

                {/* <div className="w-[80%] h-[2px] m-10 bg-black self-center"/>

                <div className="w-full h-auto grid grid-cols-3 gap-12 justify-center items-center">

                    <Project />

                </div> */}

            </div>
        </div>
    )
}

export default Projects;