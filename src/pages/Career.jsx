import { PiArrowSquareRightThin } from "react-icons/pi";

export default function Career({}) {
    const jobs = ["APL", "APL", "IntelliGenesis LLC", "Lenovo", "???"];

    return (
        <div className="flex h-full w-full flex-col items-center justify-start">
            <div className="flex w-full flex-row items-center justify-center gap-4 text-2xl">
                {jobs.map((org, i) => {
                    return (
                        <>
                            <h1 className="w-auto text-2xl">{org}</h1>
                            {i < jobs.length - 1 && <PiArrowSquareRightThin />}
                        </>
                    );
                })}
            </div>
        </div>
    );
}
