import { useEffect } from "react";

import Project from "./components/Project";
function Projects(props) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const projects = [
        {
            title: "spotify-album-art-matrix",
            github: "colinhartigan/spotify-album-art-matrix",
            description: "a dynamic frame that displays album art from your currently playing spotify song",
            languages: ["c++"],
            technologies: [""],
            stats: [],
        },
        {
            title: "hive-dash",
            github: "colinhartigan/hive-dash",
            description: "a dashboard to improve 3D printing operations at The HIVE makerspace",
            languages: ["javascript"],
            technologies: ["next", "mongodb", "google firebase"],
            stats: [],
        },
        {
            title: "ledger",
            github: "fbn-org/fbn-ledger",
            description: "full-stack web app for tracking who owes who within a friend group.",
            languages: ["javascript"],
            technologies: ["next", "mongodb"],
            stats: [],
        },
        {
            title: "valorant-rpc",
            github: "colinhartigan/valorant-rpc",
            description:
                "a discord rich presence implementation for VALORANT featuring a full set of art assets and descriptive presence states",
            languages: ["python"],
            technologies: ["webserver", "discord API", "valorant API"],
            // stats: ["downloads", "stars", "forks"],
            stats: [],
        },
        {
            title: "valorant-inventory-manager",
            github: "colinhartigan/valorant-inventory-manager",
            description:
                "an application to manage a VALORANT inventory, offering extensive features not found in the game client",
            languages: ["py", "js", "html"],
            technologies: ["webserver, discord API, valorant API"],
            // stats: ["downloads", "stars", "forks"],
            stats: [],
        },
        {
            title: "colinhartigan.github.io",
            github: "colinhartigan/colinhartigan.github.io",
            description: "this website! a place where i can showcase my work experience and projects",
            languages: ["javascript"],
            technologies: ["react, tailwindcss"],
            stats: [],
        },
    ];

    return (
        <div className='h-fit w-2xl max-w-7xl mx-auto flex flex-col items-start justify-start'>
            <div className='w-[95%] h-auto grow mx-auto flex flex-col items-start justify-center pt-20 pb-8'>
                {/* <div className='w-full h-auto flex flex-col items-center justify-center gap-12'>
                    <FeaturedLEDGER />
                    <FeaturedECE />
                    <FeaturedVAL />
                </div>

                <div className='w-[80%] h-[2px] m-10 bg-black self-center' /> */}

                <div className='w-full h-min grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-12 justify-center items-start'>
                    {projects.map((project, index) => {
                        const data = project;
                        return <Project data={data} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;
