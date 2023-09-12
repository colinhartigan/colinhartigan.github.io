import { useEffect, useState } from "react";

import { mdiDownload, mdiSourceBranch, mdiStarOutline } from "@mdi/js";
import Icon from "@mdi/react";

function Project(props) {
    const [downloads, setDownloads] = useState(0);
    const [stars, setStars] = useState(0);
    const [forks, setForks] = useState(0);

    const data = props.data;

    useEffect(() => {
        var downloads = 0;
        fetch(`https://api.github.com/repos/${data.github}/releases`)
            .then((response) => response.json())
            .then((d) => {
                for (const release of d) {
                    downloads += release.assets[0].download_count;
                }
                setDownloads(downloads);
            });

        fetch(`https://api.github.com/repos/${data.github}`)
            .then((response) => response.json())
            .then((d) => {
                setStars(d.stargazers_count);
                setForks(d.forks_count);
            });
    }, []);

    return (
        <div className='w-full h-auto'>
            <div className='w-full h-full flex flex-row items-stretch justify-start'>
                <p className='min-h-full p-3 text-3xl border-black border-r-2 border-l-2 border-t-2 border-b-2 text-center'>
                    {data.title}
                </p>

                <div className='min-h-full w-auto px-5 flex flex-row items-center justify-center border-black border-r-2 border-b-2 border-t-2'>
                    <a
                        href={`https://github.com/${data.github}`}
                        target='_blank'
                        rel='noreferrer'
                        className='text-lg text-center underline'
                    >
                        github
                    </a>
                </div>

                <div className='min-h-full grow bg-black border-black border-2'></div>
            </div>

            {data.stats.length > 0 && (
                <div className='w-full h-full flex flex-row items-stretch justify-start border-black border-b-2'>
                    {data.stats.includes("downloads") ? (
                        <div className='min-h-full w-full p-2 flex flex-row items-center justify-center border-black border-l-2'>
                            <Icon path={mdiDownload} size={1} />
                            <p className='text-lg ml-1'>{downloads}</p>
                        </div>
                    ) : null}

                    <div className='min-h-full w-full p-2 flex flex-row items-center justify-center border-black border-l-2 border-r-2'>
                        <Icon path={mdiStarOutline} size={1} />
                        <p className='text-lg ml-1'>{stars}</p>
                    </div>

                    <div className='min-h-full w-full p-2 flex flex-row items-center justify-center border-black border-r-2'>
                        <Icon path={mdiSourceBranch} size={1} />
                        <p className='text-lg ml-1'>{forks}</p>
                    </div>
                </div>
            )}

            <div className='w-full h-[138px] p-3 flex flex-col items-start justify-start border-black border-l-2 border-r-2 border-b-2'>
                <p className='h-full text-xl text-left'>{data.description}</p>
            </div>

            <div className='min-w-full h-auto flex flex-row flex-auto items-stretch justify-center border-black border-l-2 border-r-2 border-b-2'>
                <div className='w-[30%] min-h-full p-2 flex flex-col items-center justify-center border-black border-r-2'>
                    <p className='text-lg text-center'>{data.languages.join(", ")}</p>
                </div>
                <div className='w-[70%] min-h-full p-2 flex flex-col items-center justify-center'>
                    <p className='text-lg text-center'>{data.technologies.join(", ")}</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
