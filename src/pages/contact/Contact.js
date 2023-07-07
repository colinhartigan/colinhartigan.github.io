import contact from '../../assets/contact.png';

function NotFound(props) {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-start overflow-hidden">
            <div className="relative h-full w-full flex flex-col items-center justify-center">

                {/* <div className="relative w-auto h-auto">

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
                </div> */}

                <div className="relative w-auto h-auto border-black border-2">

                    <div className="w-full h-auto border-b-2 border-black flex flex-row items-center justify-start">
                        <p className="h-full text-5xl p-3 font-medium w-auto text-left">
                            contact me
                        </p>
                        <div className="w-auto h-full flex grow bg-black fill-black border-black z-20" />
                    </div>

                    <div className="w-full h-auto flex flex-col items-start justify-start">
                        <a className="w-full" href="mailto:colinhartigan@gatech.edu?subject=Hello!" target="_blank" rel="noreferrer">
                            <p className="text-lg p-2 h-full border-black border-b-2 text-left underline">
                                colinhartigan@gatech.edu
                            </p>
                        </a>
                        <a className="w-full" href="https://www.linkedin.com/in/colin-hartigan/" target="_blank" rel="noreferrer">
                            <p className="text-lg p-2 h-full border-black border-b-2 text-left underline">
                                https://www.linkedin.com/in/colin-hartigan
                            </p>
                        </a>
                        <a className="w-full" href=" https://github.com/colinhartigan" target="_blank" rel="noreferrer">
                            <p className="text-lg p-2 h-full border-black text-left underline">
                                https://github.com/colinhartigan
                            </p>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default NotFound;