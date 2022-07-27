import { data } from "autoprefixer"
import { useEffect } from "react"


function GridRow(props){

    const data = props.data

    return (
        <div className="grid grid-cols-10 p-0 ">
            <p className={`text-xl col-span-2 p-2 h-full border-r-2 border-b-2 border-black`}>
                {data.name}
            </p>
            <p className="text-xl col-span-3 p-2 border-black border-r-2 border-b-2">
                {data.dates}
            </p>
            <p className="text-xl col-span-5 p-2 border-black border-b-2">
                {data.remarks}
            </p>
        </div>
    )
}

export default GridRow