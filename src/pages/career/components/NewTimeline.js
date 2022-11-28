

function Timeline(props) {

    const data = props.data
    const callback = props.callback

    return (
        <>
            <div className="h-auto min-w-full mt-8 relative flex flex-row items-start justify-center">


                    <div className="lg:w-[90%] w-full h-auto flex flex-row items-stretch justify-start">

                        {/* <div className="w-[2px] min-h-full bg-black" /> */}

                        <div className="w-full h-auto flex flex-col items-center justify-start gap-12">
                            {data.map((item, index) => {
                                return (
                                    <div className="w-full">
                                        <div className="w-full h-auto flex flex-row justify-center items-center grow">

                                            <div className="w-auto h-auto flex grow flex-col justify-center items-start gap-2 lg:border-0 border-x-2 border-t-2 border-black">
                                                <p className="text-3xl flex grow pl-2 pr-16 mt-3 mx-2">
                                                    {item.org}
                                                </p>

                                                <div className="lg:w-full w-[90%] h-auto flex grow border-black border-b-2" />

                                                <div className="w-full h-auto pr-4 pl-2 flex flex-row justify-start items-center gap-8 mx-2">
                                                    <p className="text-xl flex">
                                                        {item.date}
                                                    </p>
                                                    <p className="text-xl flex grow">
                                                        {item.title}
                                                    </p>
                                                    {/* <p className="text-xs flex text-[#555555]">
                                            {item.content.tags.join(", ")}
                                        </p> */}
                                                </div>

                                            </div>


                                            <div className="lg:visible hidden w-40 h-[50%] lg:flex flex-col justify-center items-center gap-2">
                                                <div className="w-full h-full border-black border-2">
                                                    <button className="text-lg w-full h-full p-3 text-center" onClick={() => { callback(index, item) }}>
                                                        see more
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="visible lg:hidden w-full h-4 border-black border-x-2" />

                                        <div className="visible lg:hidden flex min-w-full h-auto">
                                            <button className="text-lg w-full h-full p-3 text-center border-black border-2" onClick={() => { callback(index, item) }}>
                                                see more
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

            </div>
        </>
    )
}

export default Timeline;