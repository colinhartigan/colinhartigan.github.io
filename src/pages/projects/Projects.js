import { useEffect } from 'react';

import Featured from './components/Featured'
import Project from './components/Project'

function Projects(props) {

    useEffect(() => {
        window.scrollTo({
            top: 0  
        })
    })

    const projects = [
        {
            title: "valorant-rpc",
            github: "colinhartigan/valorant-rpc",
            description: "a discord rich presence implementation for VALORANT featuring a full set of art assets and descriptive presence states",
            languages: ["python"],
            technologies: ["webserver, discord API, valorant API"],
        },
        {
            title: "valorant-skin-cli",
            github: "colinhartigan/valorant-skin-cli",
            description: "(predecessor to valorant-inventory-manager) a command line interface for managing a VALORANT inventory with additional features not in the game client",
            languages: ["python"],
            technologies: ["webserver, cli interface, valorant API"],
        },
        {
            title: "ggsheet",
            github: "colinhartigan/ggsheet",
            description: "a program to generate post-match summary images, similar to the ones used in VALORANT esports competitions",
            languages: ["python"],
            technologies: ["image processing, valorant API"],
        },
        
    ]

    return (
        <div className="h-fit w-2xl max-w-screen-2xl mx-auto flex flex-col items-start justify-start">
            <div className="w-[95%] h-auto grow mx-auto flex flex-col items-start justify-center pt-20 pb-8">

                <div className="w-min border-2 border-black p-2 mb-10 overflow-hidden bg-white">
                    <p className="text-5xl h-full">
                        PROJECTS
                    </p>
                </div>

                <Featured />

                <div className="w-[80%] h-[2px] m-10 bg-black self-center"/>

                <div className="w-full h-min grid grid-cols-3 gap-12 justify-center items-start">

                    {projects.map((project, index) => {
                        const data = project;
                        return <Project data={data}/>
                    })}

                </div>

            </div>
        </div>
    )
}

export default Projects;