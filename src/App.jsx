import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import portrait from "./assets/portrait.jpg";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className='container max-w-screen-lg mx-auto h-screen flex flex-col gap-5'>
            {/* topbar */}
            <NavBar />

            {/* quick about */}
            <div className='columns-2'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <img src={portrait} className='grayscale w-6/12' />
                </div>
                <div className='h-full flex flex-grow flex-col justify-center items-start'>
                    <div className='flex flex-col justify-center items-start flex-grow'>
                        <ul className='list-disc text-md'>
                            <li>third-year computer engineering</li>
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

            <div className='min-h-[6000px]'></div>
        </div>
    );
}

export default App;
