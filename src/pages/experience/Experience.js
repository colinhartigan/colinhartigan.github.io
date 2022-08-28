import Timeline from './components/Timeline'

function Experience(props) {

    return (
        <div className="h-auto flex flex-col items-start justify-start">
            <div className="max-w-[80%] h-auto grow mx-auto flex flex-col items-start justify-center pt-24 pb-2">
                <div className="w-min border-2 border-black p-2 overflow-hidden bg-white">
                    <p className="text-5xl h-full">
                        EXPERIENCE
                    </p>
                </div>
                <Timeline />
            </div>
        </div>
    )
}

export default Experience;