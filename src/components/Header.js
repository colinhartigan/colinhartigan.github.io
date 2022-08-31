import { Link } from 'react-router-dom';

import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js';


function Header(props) {
    return (
        <div className="fixed z-50 h-12 w-full bg-white border-black border-b-2 overflow-hidden mr-12">
            <div className="w-full h-full m-auto flex flex-row justify-start items-center ">
                <div className="hidden lg:visible w-auto h-full lg:flex flex-row items-stretch justify-center">
                    <Link to="/home" className="w-auto min-h-full px-6 flex flex-col justify-center items-center border-black border-t-2 border-l-2">
                        <p className="text-center text-xl">
                            home
                        </p>
                    </Link>
                    <Link to="/experience" className="w-auto min-h-full px-6 flex flex-col justify-center items-center border-black border-t-2">
                        <p className="text-center text-xl">
                            experience
                        </p>
                    </Link>
                    <Link to="/projects" className="w-auto min-h-full px-6 flex flex-col justify-center items-center border-black border-t-2 border-r-2">
                        <p className="text-center text-xl">
                            projects
                        </p>
                    </Link>
                </div>
                <div className="hidden lg:visible w-auto h-full lg:flex flex-row items-stretch justify-center">
                    <Link to="/contact" className="w-auto min-h-full px-6 flex flex-col justify-center items-center border-black border-t-2">
                        <p className="text-center text-xl">
                            contact
                        </p>
                    </Link>
                    <Link to="/resume" className="w-auto min-h-full px-6 flex flex-col justify-center items-center border-black border-t-2">
                        <p className="text-center text-xl">
                            résumé
                        </p>
                    </Link>
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