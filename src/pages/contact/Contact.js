import contact from '../../assets/contact.png';

function NotFound(props) {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-start overflow-hidden">
            <div className="relative h-full w-full flex flex-col items-center justify-center">

                <div className="relative w-auto h-auto">

                    <div className="absolute w-[130%] top-4 -left-4 z-1">
                        <img src={contact} />
                    </div>

                    <div className="relative z-2">
                        <div className="w-max border-2 border-b-0 border-black p-2 overflow-hidden bg-white">
                            <p className="text-5xl h-full">
                                CONTACT ME
                            </p>
                        </div>
                        <p className="text-lg w-full border-black border-2 p-3 bg-white">
                            <a href="mailto:colinhartigan@gatech.edu?subject=Hello!">
                                colinhartigan@gatech.edu
                            </a>
                        </p>
                        <p className="text-lg w-full underline border-black border-2 border-t-0 p-3 bg-white">
                            <a href="https://www.linkedin.com/in/colin-hartigan/" target="_blank" rel="noreferrer">
                                https://www.linkedin.com/in/colin-hartigan
                            </a>
                        </p>
                        <p className="text-lg w-full underline border-black border-2 border-t-0 p-3 bg-white">
                            <a href="https://github.com/colinhartigan" target="_blank" rel="noreferrer">
                                https://github.com/colinhartigan
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NotFound;