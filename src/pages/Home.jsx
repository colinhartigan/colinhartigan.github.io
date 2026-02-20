import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import portrait from "../assets/portrait.jpeg";

export default function Home({}) {
    // const schoolYear = useMemo(() => {
    //     let date = new Date();
    //     let month = date.getMonth();
    //     let year = date.getFullYear();
    //     console.log(month, year);
    //     if (year === 2025 && month >= 4) {
    //         return "fourth";
    //     }
    //     return "third";
    // }, []);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="flex flex-row items-stretch justify-evenly gap-4 px-4">
                <div className="flex w-1/2 flex-col items-center justify-center">
                    <img src={portrait} className="w-1/2" />
                </div>
                <div className="flex w-1/2 flex-col gap-8">
                    <p className="text-3xl font-semibold">Colin Hartigan</p>
                    <div className="flex flex-grow flex-col items-start justify-center gap-2">
                        <p>student at Georgia Tech</p>
                        <ul className="text-md list-inside list-disc">
                            <li>fourth year - computer engineering</li>
                            <li>
                                computer hardware & architecture, embedded
                                devices
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-4">
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
                                    className="flex flex-row items-center justify-start gap-1"
                                    key={item.title}
                                    href={item.href}
                                    target="_blank"
                                >
                                    {item.icon}
                                    <p className="text-sm underline">
                                        {item.title}
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
