import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js';


function Header(props) {
    return (
        <div className="fixed z-50 h-12 w-full bg-white border-black border-2 overflow-hidden mr-12">
            <div className="w-full h-full m-auto flex flex-row justify-start items-center">
                <div className="w-min h-full border-black border-r-2 flex flex-column items-center justify-center">
                    <p className="w-full h-auto text-4xl p-2 font-medium text-center">
                        CH
                    </p>
                </div>
                <div className="hidden lg:visible w-auto h-full lg:flex flex-row items-center justify-center border-black border-r-2">
                    <a href="">
                        <p className="w-auto h-auto px-6 text-center text-xl">
                            home
                        </p>
                    </a>
                    <a href="">
                        <p className="w-auto h-auto px-6 text-center text-xl">
                            experience
                        </p>
                    </a>
                    <a href="">
                        <p className="w-auto h-auto px-6 text-center text-xl">
                            projects
                        </p>
                    </a>

                </div>
                <div className="hidden lg:visible w-auto h-full lg:flex flex-row items-center justify-center">
                    <a href="">
                        <p className="w-auto h-auto px-6 text-center text-xl">
                            contact
                        </p>
                    </a>
                    <a href="">
                        <p className="w-auto h-auto px-6 text-center text-xl">
                            résumé
                        </p>
                    </a>
                </div>

                <div className="w-full h-full m-auto flex grow bg-black" />

                <div className="flex flex-col items-center justify-center px-2 py-1 w-auto h-auto">
                    <Icon path={mdiMenu} width={32} height={32} title="Menu" color="black" />
                </div>
            </div>
        </div>
    )
}

export default Header;