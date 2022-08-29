

function Featured(props) {

    return (
        <>

            <div className="w-[80%] h-40 border-black border-2 self-center">

                <div className="w-full h-16 flex flex-row items-center justify-start">
                    <div className="h-full border-black border-r-2 border-b-2 flex flex-col justify-center items-center">
                        <p className="text-3xl p-3">
                            name
                        </p>
                    </div>

                    <div className="min-h-full grow border-black border-b-2">

                    </div>

                </div>

                <div className="w-full h-24 flex flex-row items-center justify-center">

                    <div className="w-[20%] h-full flex flex-col items-center justify-center border-r-2 border-black">

                        

                    </div>

                </div>

            </div>

        </>
    )

}

export default Featured;