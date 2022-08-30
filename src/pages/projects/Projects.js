import { useEffect } from 'react';

import Featured from './components/Featured'

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

            </div>
        </div>
    )
}

export default Projects;