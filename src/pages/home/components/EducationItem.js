import { data } from "autoprefixer"
import { useEffect } from "react"


function GridRow(props) {

    const data = props.data

    return (
        <>
            <div className="min-h-full row flex flex-col justify-center align-center border-x-0 xl:border-x-2 border-y-2 xl:border-y-0 border-black" >
                <a href={data.website} target="_blank" rel="noreferrer">
                    <p className="w-full text-3xl text-center p-2 border-b-2 border-black decoration-solid underline" style={{ textDecorationColor: data.accent }}>
                        {data.name}
                    </p>
                </a>
                <div className="flex flex-row justify-center align-center h-full">
                    <p className="text-lg m-auto h-full text-center p-2 border-r-2 border-black">
                        {data.dates}
                    </p>
                    <p className="text-lg m-auto h-full p-2 text-center grow">
                        {data.remarks}
                    </p>
                </div>
            </div>

            {!data.last ? <p className="text-center text-2xl h-full w-auto my-auto p-3 transform rotate-90 xl:rotate-0">
                🡢
            </p> : null}
        </>
    )
}

export default GridRow
