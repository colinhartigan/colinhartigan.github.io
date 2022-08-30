import Icon from '@mdi/react'

import { mdiArrowRight } from '@mdi/js'
import demo1 from '../../../assets/featured/demo1.png'
import demo2 from '../../../assets/featured/demo2.png'

function Featured(props) {

    return (

        <div className="w-[100%] h-auto border-black border-2 self-center flex flex-col items-start justify-start">

            <div className="w-full xl:h-20 h-40 flex xl:flex-row flex-col items-center justify-center border-b-2 border-black">

                <div className="h-full xl:w-auto w-full px-4 xl:border-r-2 xl:border-b-0 border-b-2 border-black flex flex-col justify-center items-start">
                    <p className="text-4xl font-medium">
                        valorant-inventory-manager
                    </p>
                </div>

                <div className="h-full xl:w-auto w-full grow flex flex-row items-center justify-center">

                    <div className="h-full xl:w-auto w-[50%] px-5 flex flex-col items-center justify-center border-r-2 border-black">
                        <p className="text-lg text-center underline">
                            github
                        </p>
                        <p className="text-lg text-center underline">
                            original reddit post
                        </p>
                    </div>

                    <div className="h-full xl:w-auto xl:grow w-[50%] flex flex-row items-center justify-center bg-black">
                        <p className="text-lg text-white underline flex flex-row justify-center items-center">
                            case study <Icon className="ml-1" path={mdiArrowRight} size={1} />
                        </p>
                    </div>

                </div>

            </div>

            <div className="w-full h-52 flex flex-col justify-center items-center border-black border-b-2 overflow-hidden">
                <img src={demo1} className="w-[150%] h-auto grayscale blur-sm " alt="bruh" />
            </div>

            <div className="w-full xl:h-20 h-72 grow flex xl:flex-row flex-col items-center justify-evenly">

                <div className="xl:w-full w-full h-full px-4 py-2 flex flex-col items-center justify-center border-b-2 xl:border-b-0 xl:border-r-2 border-black">

                    <p className="text-3xl text-center">
                        200,000+
                    </p>
                    <p className="text-lg">
                        downloads
                    </p>

                </div>

                <div className="xl:w-full w-full h-full px-4 py-2 flex flex-col items-center justify-center border-b-2 xl:border-b-0 xl:border-r-2 border-black">

                    <p className="text-3xl text-center">
                        javascript, python
                    </p>
                    <p className="text-lg">
                        key languages
                    </p>

                </div>

                <div className="w-full h-full px-4 py-2 flex flex-col items-center justify-center">

                    <p className="text-3xl text-center">
                        react, websockets, material ui
                    </p>
                    <p className="text-lg">
                        key technologies
                    </p>

                </div>


            </div>

        </div>

    )

}

export default Featured;