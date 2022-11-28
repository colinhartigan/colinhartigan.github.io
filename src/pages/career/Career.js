import { useEffect, useState } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';

import Timeline from './components/Timeline'
import NewTimeline from './components/NewTimeline'
import ExperienceDetail from './components/ExperienceDetail';
import FullScreenPreview from '../../components/FullScreenPreview';

import APL_poster from "../../assets/experience/APL_poster.png"
import SHC_group from "../../assets/experience/SHC_group.jpg"

function Experience(props) {

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

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
                media: [
                    {
                        "img": SHC_group,
                        "desc": "me + counselors <3"
                    }
                ]
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
                media: [
                    {
                        "img": APL_poster,
                        "desc": "poster abstract of visualization software. includes examples, features, and results."
                    }
                ]
            }
        }
    ]

    const [selectedJob, setSelectedJob] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
    const [redir, setRedir] = useState(false)

    function selectExperience(id, job) {
        setSelectedJob(job)
        setSearchParams({ 'id': id })
    }

    function closeExperience() {
        setSelectedJob(null)
        searchParams.delete('id')
        setSearchParams(searchParams)
    }

    useEffect(() => {
        if (searchParams.get('id') !== null) {
            var id = searchParams.get('id')
            if (id < data.length) {
                setSelectedJob(data[id])
            } else {
                setRedir(true)
            }
        } else {
            setSelectedJob(null)
            setRedir(false)
        }
    }, [searchParams])

    return (
        <>
            {redir === true ? <Navigate to={"/lost"} /> : null}
            {selectedJob !== null ?
                <ExperienceDetail close={closeExperience} data={selectedJob} />
                :

                <div className="h-auto min-w-lg max-w-7xl mx-auto flex flex-col items-start justify-start">
                    <div className="w-[95%] h-auto grow mx-auto flex flex-col items-start justify-center pt-20 pb-8">
                        <div className="w-min border-2 border-black p-2 overflow-hidden bg-white">
                            <p className="text-5xl h-full">
                                CAREER
                            </p>
                        </div>

                        <div className="w-full h-auto flex flex-col items-start justify-start mt-6">

                            <p className="text-3xl mb-1">
                                current objective
                            </p>
                            <div className="w-full h-auto flex flex-col items-start justify-start p-3 border-black border-2">
                                <p className="text-2xl">
                                    I am a self-driven and resourceful computer engineering major with professional experience in collaborative fast-paced
                                    environments as a programmer. I am also a solo full-stack developer, creating applications with over 200,000 total downloads.
                                    I am seeking a software engineering internship for May - August 2022.
                                </p>
                            </div>
                        </div>

                        <NewTimeline data={data} callback={selectExperience} />
                    </div>
                </div>
            }
        </>
    )
}

export default Experience;