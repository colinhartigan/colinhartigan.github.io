import { useEffect } from "react"


function Timline(props) {

    const data = [
        {
            org: "Johns Hopkins University Applied Physics Lab",
            title: "ASPIRE intern",
            location: "Laurel, MD",
            date: "oct. 2020 - may 2021",
            content: {
                description: "Working with a team of researches in APL's Research and Exploratory Development Department who use addative manufacturing machinery to append components onto existing circuit boards, I was tasked with creating a tool which visualized the CNC code and its resulting output. Written in Python, my software was able to visualize toolpaths containing 100,000+ actions on an interactive plot. I filed an invention disclosure for the novelty, uniqueness, and utility of my software.",
                tags: ["python", "invention", "CNC", "visualization", "data parsing and processing", "data structures"],
            }
        },

        {
            org: "Sandy Hill Camp and Retreat Center",
            title: "junior counselor",
            location: "North East, MD",
            date: "july 2021",
            content: {
                description: "Sandy Hill's camper-to-counselor pipeline creates opportunities for older campers to transition to a full-time staff position through a unique mentorship program. Under the guidance of long-time staff members of the camp, I attended a behavior management training class and directly shadowed counselors while living in a cabin with campers. ",
                tags: ["leadership", "behavior management"],
            }
        },

        {
            org: "Johns Hopkins University Applied Physics Lab",
            title: "ASPIRE intern",
            location: "Laurel, MD",
            date: "oct. 2021 - may 2022",
            content: {
                description: "Under the guidance of my mentor, who worked in APL's Space Exploration Sector, I wrote software to parse and aggregate large batches of NASA weather satellite data to train a deep learning model. Given the magnitude of the datasets, I implemented multithreading to scale the efficiency of my software.",
                tags: ["python", "tensorflow", "data parsing and processing", "multithreading", "csv"],
            }
        },

        {
            org: "Sandy Hill Camp and Retreat Center",
            title: "counselor",
            location: "North East, MD",
            date: "july 2022",
            content: {
                description: "As a cabin counselor, I led and managed cabins of 10-12 children during one-week sleep-away camp sessions. Additionally, I taught instructional classes in creative arts, team building, and recreational sports. In collaboration with a co-counselor, I became acquainted with the campers' needs and accomodated them to enhance their camp experience.",
                tags: ["leadership", "behavior management", "communication"],
            }
        },
    ]

    useEffect(() => {
        window.scrollTo({
            top: 0  
        })
    }, [])

    return (

        <>
            <div className="h-auto w-full mt-6 relative flex flex-row items-start justify-start">

                {/* <div className="min-h-[100%] absolute grow w-[2px] bg-black">
                </div> */}

                <div className="w-auto min-h-full flex flex-col justify-between items-start gap-12">

                    {data.map((element) => {
                        return (
                            <div className="h-auto w-full flex flex-col lg:flex-row justify-start items-center">


                                <div className="min-h-full min-w-full lg:min-w-[33%] grow flex-col items-start justify-start">

                                    <div className="h-full w-full flex grow flex-col justify-center items-start">
                                        <p className="mx-3 text-3xl">
                                            {element.org}
                                        </p>
                                        <p className="mx-3 mb-3 mt-1 text-md italic">
                                            {element.location}
                                        </p>
                                    </div>

                                    <div className="h-[2px] bg-black " />

                                    <div className="flex flex-row justify-start items-center">
                                        <p className="m-3 w-auto text-lg text-left">
                                            {element.date}
                                        </p>
                                        <p className="m-3 grow text-lg text-right">
                                            {element.title}
                                        </p>
                                    </div>
                                </div>

                                <div className="h-full w-auto grow flex flex-col justify-center items-center">
                                    <div className="w-full grow border-black border-2">
                                        <p className="p-3 text-xl h-full">
                                            {element.content.description}
                                        </p>
                                    </div>
                                    <div className="w-full border-black border-t-0 border-2">
                                        <p className="p-2 text-sm h-full">
                                            {element.content.tags.join(", ")}
                                        </p>
                                    </div>
                                </div>


                            </div>
                        )
                    })}


                </div>
            </div>

        </>
    )
}

export default Timline