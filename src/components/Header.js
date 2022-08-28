import { Link } from 'react-router-dom';

import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js';


function Header(props) {
    return (
        <div className="fixed z-50 h-12 w-full bg-white border-black border-2 overflow-hidden mr-12">
            <div className="w-full h-full m-auto flex flex-row justify-start items-center">
                <div className="hidden lg:visible w-auto h-full lg:flex flex-row items-center justify-center border-black border-r-2">
                    <Link to="/home" className="w-auto h-auto px-6 text-center text-xl">
                        home
                    </Link>
                    <Link to="/experience" className="w-auto h-auto px-6 text-center text-xl">
                        experience
                    </Link>
                    <Link to="/projects" className="w-auto h-auto px-6 text-center text-xl">
                        projects
                    </Link>
                </div>
                <div className="hidden lg:visible w-auto h-full lg:flex flex-row items-center justify-center">
                    <Link to="/contact" className="w-auto h-auto px-6 text-center text-xl">
                        contact
                    </Link>
                    <Link to="/resume" className="w-auto h-auto px-6 text-center text-xl">
                        résumé
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