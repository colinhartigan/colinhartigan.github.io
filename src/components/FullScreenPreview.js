

function FullScreenPreview(props) {

    const img = props.img
    const desc = props.desc 

    const open = props.open
    const close = props.close

    return (
        <>
            {open ?
                <div className="fixed w-[100%] h-[100%] z-50 bg-stone-800/70">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <div className="w-auto h-auto flex flex-col items-center justify-center">
                            <p className="cursor-pointer self-start text-lg underline text-white mb-2" onClick={close}>
                                [x] close
                            </p>
                            <img className="max-h-[70%] w-auto" src={img} alt="something" />
                            <p className="w-full text-lg italic text-left text-white mt-2">
                                {desc}
                            </p>
                        </div>
                    </div>
                </div>
                : null}
        </>
    )
}

export default FullScreenPreview