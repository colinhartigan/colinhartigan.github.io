

function Timeline(props) {

    const data = [
        {
            org: "Sandy Hill Camp and Retreat Center",
            title: "counselor",
            location: "North East, MD",
            date: "july 2022",
            image: "",
            content: {
                description: "As a cabin counselor, I led and managed cabins of 10-12 children during one-week sleep-away camp sessions. Additionally, I taught instructional classes in creative arts, team building, and recreational sports. In collaboration with a co-counselor, I became acquainted with the campers' needs and accomodated them to enhance their camp experience.",
                tags: ["leadership", "behavior management", "communication"],
            }
        },

        {
            org: "Johns Hopkins University Applied Physics Laboratory",
            title: "ASPIRE intern",
            location: "Laurel, MD",
            date: "oct. 2021 - may 2022",
            image: "",
            content: {
                description: "Under the guidance of my mentor, who worked in APL's Space Exploration Sector, I wrote software to parse and aggregate large batches of NASA weather satellite data to train a deep learning model. Given the magnitude of the datasets, I implemented multithreading to scale the efficiency of my software.",
                tags: ["python", "tensorflow", "data parsing and processing", "multithreading", "csv"],
            }
        },

        {
            org: "Sandy Hill Camp and Retreat Center",
            title: "junior counselor",
            location: "North East, MD",
            date: "july 2021",
            image: "",
            content: {
                description: "Sandy Hill's camper-to-counselor pipeline creates opportunities for older campers to transition to a full-time staff position through a unique mentorship program. Under the guidance of long-time staff members of the camp, I attended a behavior management training class and directly shadowed counselors while living in a cabin with campers. ",
                tags: ["leadership", "behavior management"],
            }
        },

        {
            org: "Johns Hopkins University Applied Physics Laboratory",
            title: "ASPIRE intern",
            location: "Laurel, MD",
            date: "oct. 2020 - may 2021",
            image: "",
            content: {
                description: "Working with a team of researches in APL's Research and Exploratory Development Department who use addative manufacturing machinery to append components onto existing circuit boards, I was tasked with creating a tool which visualized the CNC code and its resulting output. Written in Python, my software was able to visualize toolpaths containing 100,000+ actions on an interactive plot. I filed an invention disclosure for the novelty, uniqueness, and utility of my software.",
                tags: ["python", "invention", "CNC", "visualization", "data parsing and processing", "data structures"],
            }
        }
    ]

    return (
        <>
            <div className="h-auto min-w-full mt-8 relative flex flex-row items-start justify-center">

                <div className="min-h-full w-auto flex flex-col justify-center items-center gap-12">

                    {data.map((item, index) => {
                        return (
                            <div className="w-full">
                                <div className="w-full h-auto flex flex-row justify-center items-center grow">

                                    <div className="w-auto h-auto flex grow flex-col justify-center items-start gap-2 lg:border-0 border-x-2 border-t-2 border-black">
                                        <p className="text-3xl flex grow pl-2 pr-16 mt-3 mx-2">
                                            {item.org}
                                        </p>

                                        <div className="lg:w-full w-[90%] h-auto flex grow border-black border-b-2" />

                                        <div className="w-full h-auto pr-4 pl-2 flex flex-row justify-start items-center gap-8 mx-2">
                                            <p className="text-xl flex">
                                                {item.date}
                                            </p>
                                            <p className="text-xl flex grow">
                                                {item.title}
                                            </p>
                                            {/* <p className="text-xs flex text-[#555555]">
                                            {item.content.tags.join(", ")}
                                        </p> */}
                                        </div>

                                    </div>


                                    <div className="lg:visible hidden w-40 h-[50%] lg:flex flex-col justify-center items-center gap-2">
                                        <div className="w-full h-full border-black border-2">
                                            <button className="text-lg w-full h-full p-3 text-center">
                                                see more
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div className="visible lg:hidden w-full h-4 border-black border-x-2" />

                                <div className="visible lg:hidden flex min-w-full h-auto">
                                    <button className="text-lg w-full h-full p-3 text-center border-black border-2">
                                        see more
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    )
}

export default Timeline;