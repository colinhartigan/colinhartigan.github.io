export default function Career({}) {
    const jobs = ["APL", "APL", "IntelliGenesis LLC", "Lenovo", "???"];

    return (
        <div className="flex h-full flex-col items-center justify-start gap-4">
            {/* <div className="flex w-full flex-row items-center justify-center gap-4 text-2xl">
                {jobs.map((org, i) => {
                    return (
                        <>
                            <h1 className="w-auto text-2xl">{org}</h1>
                            {i < jobs.length - 1 && <PiArrowSquareRightThin />}
                        </>
                    );
                })}
            </div> */}

            <div className="flex w-5/6 flex-col items-center justify-start gap-4">
                {/* <div className=""></div> */}
                <div className="flex h-auto w-full flex-col items-start justify-start gap-4">
                    <div className="flex w-full flex-row items-center justify-start gap-4">
                        <div className="flex h-auto w-full flex-row items-center justify-between">
                            <h1 className="text-4xl italic">Lenovo</h1>
                            <h2 className="text-xl">June 2024 - August 2024</h2>
                        </div>
                    </div>
                    <div className="flex w-full flex-row items-center justify-start gap-4">
                        <div className="flex h-full w-[40px] flex-col items-center justify-center">
                            <div className="border- h-full w-[2px] rounded-lg bg-black"></div>
                        </div>
                        <div className="flex h-auto w-full flex-row items-center justify-between">
                            blah blah blah company stuff
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
