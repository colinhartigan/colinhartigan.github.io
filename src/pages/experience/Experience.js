import { useEffect } from 'react';
import Timeline from './components/Timeline'

function Experience(props) {

    useEffect(() => {
        window.scrollTo({
            top: 0  
        })
    })

    return (
        <div className="h-auto w-[80%] max-w-screen-2xl mx-auto flex flex-col items-start justify-start">
            <div className="min-w-[80%] max-w-[80%] h-auto grow mx-auto flex flex-col items-start justify-center pt-20 pb-8">
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