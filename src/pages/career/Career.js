import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";

import ExperienceDetail from "./components/ExperienceDetail";
import NewTimeline from "./components/NewTimeline";

import APL_poster from "../../assets/experience/APL_poster.png";
import APL_threading from "../../assets/experience/APL_threading.mp4";
import IG_demo from "../../assets/experience/IG_demo.jpeg";
import SHC_group from "../../assets/experience/SHC_group.jpg";

function Experience(props) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const data = [
        {
            org: "Lenovo",
            title: "quality engineering intern",
            location: "Morrisville, NC",
            date: "jun. 2024 - aug. 2024",
            image: "",
            content: {
                description:
                    "Lenovo runs an internal beta program to test new ThinkPads before they are released to the public. As a quality engineer, I managed several families of systems, including the P14s Gen 5 and P16s Gen 3, and was responsible for triaging, tracking, and resolving issues reported by beta testers. During my time, Lenovo also ran an external beta with five Fortune 500 customers to test the ThinkPad T14s Gen6, a first-generation Windows Copilot+ PC. During this program, I triaged issues reported by customers in collaboration with the beta program manager, ensuring the development teams could quickly resolve them before the product's launch to the general public. Through my work, I contributed to the successful launch of these new ThinkPads and contributed to over $500,000 in avoided post-launch costs to Lenovo.",
                tags: ["quality assurance", "laptop repair", "powershell", "batch"],
                // media: [
                //     // {
                //     //     img: IG_demo,
                //     //     isImage: true,
                //     //     desc: "cyberspan showcase at TechNet Augusta, featuring the interactive map component I created",
                //     // },
                // ],
            },
        },
        {
            org: "IntelliGenesis LLC",
            title: "software engineering intern",
            location: "Columbia, MD",
            date: "jun. 2023 - aug. 2023",
            image: "",
            content: {
                description:
                    "As a software engineering intern, I had the opportunity to contribute to IntelliGenesis' products and pursue projects with other interns. With the other interns, I led a project to create a voice-controlled security camera that could capture, process, and recall footage based on features of interest, such as a person in view. I also worked on the company's flagship cybersecurity product by redesigning and upgrading React components in addition to implementing a highly-requested feature by its end-users.",
                tags: ["python", "react", "full-stack"],
                media: [
                    {
                        img: IG_demo,
                        isImage: true,
                        desc: "cyberspan showcase at TechNet Augusta, featuring the interactive map component I created",
                    },
                ],
            },
        },

        {
            org: "The HIVE Makerspace at Georgia Tech",
            title: "peer instructor",
            location: "Atlanta, GA",
            date: "jan. 2023 - present",
            image: "",
            content: {
                description:
                    "The HIVE Makerspace is the nation's largest ECE-centered makerspace. It offers an accessible and inclusive environment for students to learn and create, and it provides the tools and resources to complete projects for free. As a peer instructor, I teach and assist students in using equipment including 3D printers and laser cutters. I have also spearheaded an effort to upgrade the space's operational procedures, especially with 3D printing, in an effort to increase overal efficiency and usability of the space.",
                tags: ["makerspace", "engineering", "workshop"],
            },
        },

        {
            org: "Sandy Hill Camp and Retreat Center",
            title: "counselor",
            location: "North East, MD",
            date: "july 2022",
            image: "",
            content: {
                description:
                    "As a cabin counselor, I led and managed cabins of 10-12 children during one-week sleep-away camp sessions. Additionally, I taught instructional classes in creative arts, team building, and recreational sports. In collaboration with a co-counselor, I became acquainted with the campers' needs and accomodated them to enhance their camp experience.",
                tags: ["leadership", "behavior management", "communication"],
                media: [
                    {
                        img: SHC_group,
                        isImage: true,
                        desc: "me + counselors <3",
                    },
                ],
            },
        },

        {
            org: "Johns Hopkins University Applied Physics Laboratory",
            title: "ASPIRE intern",
            location: "Laurel, MD",
            date: "oct. 2021 - may 2022",
            image: "",
            content: {
                description:
                    "Under the guidance of my mentor, who worked in APL's Space Exploration Sector, I wrote software to parse and aggregate large batches of NASA weather satellite data to train a deep learning model. Given the magnitude of the datasets, I implemented multithreading to scale the efficiency of my software.",
                tags: ["python", "tensorflow", "data parsing and processing", "multithreading", "csv"],
                media: [
                    {
                        img: APL_threading,
                        desc: "demo of multithreading implementation parsing 50+ csv files with 3m+ datapoints each",
                    },
                ],
            },
        },

        {
            org: "Sandy Hill Camp and Retreat Center",
            title: "junior counselor",
            location: "North East, MD",
            date: "july 2021",
            image: "",
            content: {
                description:
                    "Sandy Hill's camper-to-counselor pipeline creates opportunities for older campers to transition to a full-time staff position through a unique mentorship program. Under the guidance of long-time staff members of the camp, I attended a behavior management training class and directly shadowed counselors while living in a cabin with campers. ",
                tags: ["leadership", "behavior management"],
            },
        },

        {
            org: "Johns Hopkins University Applied Physics Laboratory",
            title: "ASPIRE intern",
            location: "Laurel, MD",
            date: "oct. 2020 - may 2021",
            image: "",
            content: {
                description:
                    "Working with a team of researches in APL's Research and Exploratory Development Department who use addative manufacturing machinery to append components onto existing circuit boards, I was tasked with creating a tool which visualized the CNC code and its resulting output. Written in Python, my software was able to visualize toolpaths containing 100,000+ actions on an interactive plot. I filed an invention disclosure for the novelty, uniqueness, and utility of my software.",
                tags: ["python", "invention", "CNC", "visualization", "data parsing and processing", "data structures"],
                media: [
                    {
                        img: APL_poster,
                        isImage: true,
                        desc: "poster abstract of visualization software. includes examples, features, and results.",
                    },
                ],
            },
        },
    ];

    const [selectedJob, setSelectedJob] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [redir, setRedir] = useState(false);

    function selectExperience(id, job) {
        setSelectedJob(job);
        setSearchParams({ id: id });
    }

    function closeExperience() {
        setSelectedJob(null);
        searchParams.delete("id");
        setSearchParams(searchParams);
    }

    useEffect(() => {
        if (searchParams.get("id") !== null) {
            var id = searchParams.get("id");
            if (id < data.length) {
                setSelectedJob(data[id]);
            } else {
                setRedir(true);
            }
        } else {
            setSelectedJob(null);
            setRedir(false);
        }
    }, [searchParams]);

    return (
        <>
            {redir === true ? <Navigate to={"/lost"} /> : null}
            {selectedJob !== null ? (
                <ExperienceDetail close={closeExperience} data={selectedJob} />
            ) : (
                <div className='h-auto min-w-lg max-w-7xl mx-auto flex flex-col items-start justify-start'>
                    <div className='w-[95%] h-auto grow mx-auto flex flex-col items-start justify-center pt-12 pb-8'>
                        {/* <div className="w-full h-auto flex flex-col items-start justify-start mt-6">

                            <div className="w-full h-auto mb-4">
                                <p className="text-4xl">
                                    current objective
                                </p>
                                <div className="w-full h-[2px] bg-black mt-2" />
                            </div>
                            <p className="text-xl">
                                I am a self-driven and resourceful computer engineering major with professional experience in collaborative fast-paced
                                environments as a programmer. I am also a solo full-stack developer, creating applications with over 200,000 total downloads.
                                I am seeking a software engineering internship for May - August 2022.
                            </p>
                        </div> */}

                        <div className='w-full h-auto flex flex-col items-start justify-start '>
                            {/* <div className="w-full h-auto mb-4">
                                <p className="text-4xl">
                                    looking ahead
                                </p>
                                <div className="w-full h-[2px] bg-black mt-2" />
                            </div>
                            <div className="w-full h-auto flex-col justify-start items-center mt-4">
                                <div className="w-auto h-auto flex flex-col border-black border-t-2">

                                    {future.map((item, index) => {
                                        return (
                                            <div className="w-auto h-auto grid grid-cols-4 border-black border-2 border-t-0">
                                                <div className="w-auto h-auto col-span-1 flex flex-col items-start justify-start p-3 border-black border-r-2">
                                                    <p className="text-2xl">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-lg italic">
                                                        {item.time}
                                                    </p>
                                                </div>
                                                <div className="w-auto h-auto col-span-3 flex flex-col items-start justify-start p-3">
                                                    <p className="text-xl">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div> */}

                            <div className='w-full h-auto flex flex-col items-start justify-start mt-6'>
                                <div className='w-auto h-auto p-3 mb-4 border-black border-2'>
                                    <p className='text-4xl'>work experience</p>
                                </div>
                                <NewTimeline data={data} callback={selectExperience} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Experience;
