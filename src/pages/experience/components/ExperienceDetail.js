import { useState } from 'react'

import FullScreenPreview from "../../../components/FullScreenPreview";

import poster from "../../../assets/experience/APL_poster.png";

function ExperienceDetail(props) {

    const close = props.close
    const data = props.data

    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState(null)
    const [previewDescription, setPreviewDescription] = useState(null)

    return (
        <>
            <FullScreenPreview img={previewImage} desc={previewDescription} open={previewOpen} close={() => { setPreviewOpen(false) }} />
            <div className="h-auto min-w-lg max-w-6xl mx-auto flex flex-col items-start justify-start overflow-auto">
                <div className="w-[95%] h-auto grow mx-auto flex flex-col items-start justify-center pt-20 pb-8">

                    <div className="w-full h-auto mb-3">
                        <p className="text-md underline cursor-pointer" onClick={close}>
                            🠔 return to experience
                        </p>
                    </div>

                    <div className="w-full min-h-full flex flex-col items-start justify-start">
                        <div className="min-w-full h-auto border-black border-2 p-3">
                            <span className="text-5xl">
                                {data.org}
                            </span>
                        </div>
                        <div className="w-full min-h-full flex flex-row justify-start items-stretch">
                            <div className="h-auto text-2xl border-2 border-t-0 border-black px-3 py-2">
                                <p className="text-2xl">
                                    {data.title}
                                </p>
                            </div>
                            <div className="h-auto border-b-2 border-r-2 border-black px-3 py-2">
                                <p className="text-2xl">
                                    {data.date}
                                </p>
                            </div>
                            <div className="flex grow bg-black">
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto flex flex-col mt-8 justify-start items-start">
                        <div className="">
                            <p className="text-3xl">
                                description
                            </p>
                        </div>
                        <div className="w-full h-[2px] bg-black" />
                        <div className="">
                            <p className="text-xl mt-4">
                                {data.content.description}
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="text-sm mt-2 text-right">
                                {data.content.tags.join(", ")}
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-auto flex flex-col mt-8 justify-start items-start">
                        <div className="">
                            <p className="text-3xl">
                                media
                            </p>
                        </div>
                        <div className="w-full h-[2px] bg-black" />

                        {data.content.media !== undefined ? (
                            <>
                                {data.content.media.map((item, index) => {
                                    return (
                                        <div className="w-full h-auto flex flex-col justify-start items-center mt-4">
                                            <img className="cursor-pointer" src={item.img} alt="descriptive alt text" onClick={() => { setPreviewOpen(true); setPreviewImage(item.img); setPreviewDescription(item.desc) }} />
                                            <p className="text-md self-start italic mt-2">
                                                {item.desc}
                                            </p>
                                        </div>
                                    )
                                })
                                }</>) : (
                            <div className="w-full">
                                <p className="w-full text-lg text-center mt-4 italic">
                                    no media is attached to this work experience
                                </p>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </>
    )
}

export default ExperienceDetail