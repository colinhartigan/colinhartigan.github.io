import { useMemo } from "react";
import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import portrait from "../assets/portrait.jpg";

export default function Home({}) {
    const schoolYear = useMemo(() => {
        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();
        console.log(month, year);
        if (year === 2025 && month >= 7) {
            return "fourth";
        }
        return "third";
    }, []);

    return (
        <div className='columns-2'>
            <div className='w-full flex flex-col justify-center items-center'>
                <img src={portrait} className='grayscale w-6/12' />
            </div>
            <div className='h-full flex flex-grow flex-col justify-center items-start'>
                <div className='flex flex-col justify-center items-start flex-grow gap-2'>
                    <p>Student at Georgia Tech</p>
                    <ul className='list-disc text-md list-inside'>
                        <li>{schoolYear}-year computer engineering</li>
                        <li>computing hardware, computer architecture, devices</li>
                    </ul>
                </div>
                <div className='flex flex-row justify-start items-start gap-4'>
                    {[
                        {
                            title: "linkedin",
                            icon: <PiLinkedinLogo />,
                            href: "https://www.linkedin.com/in/colin-hartigan/",
                        },
                        {
                            title: "github",
                            icon: <PiGithubLogo />,
                            href: "https://github.com/colinhartigan",
                        },
                    ].map((item) => {
                        return (
                            <a
                                className='flex flex-row justify-start items-center gap-1'
                                key={item.title}
                                href={item.href}
                                target='_blank'
                            >
                                {item.icon}
                                <p className='text-sm underline'>{item.title}</p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
