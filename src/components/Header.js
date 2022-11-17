import { useState } from 'react';

import { Link } from 'react-router-dom';

import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js';


function Header(props) {

    const [showMenu, setShowMenu] = useState(false);

    const menu = [
        {
            name: "home",
            link: "/home"
        },
        {
            name: "experience",
            link: "/experience"
        },
        {
            name: "projects",
            link: "/projects",
            divider: true
        },
        // {
        //     name: "about",
        //     link: "/about",
        //     divider: true,
        // },
        {
            name: "contact",
            link: "/contact"
        },
        {
            name: "résumé",
            link: "/resume"
        }
    ]

    return (
        <>
            <div className="fixed z-40 h-12 w-full bg-white border-black border-b-2 overflow-hidden mr-12">
                <div className="w-full h-full m-auto flex flex-row justify-start items-center ">
                    <div className="hidden lg:visible w-auto h-full lg:flex flex-row items-stretch justify-center">
                        {menu.map((item, index) => {
                            return (
                                <Link to={item.link} className={`w-auto min-h-full px-6 flex flex-row justify-center items-center border-black border-t-2 ${item.divider !== undefined ? 'border-r-2' : ''}`}>
                                    <p className="text-center text-xl">
                                        {item.name}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>

                    <div className="w-full h-full m-auto flex grow bg-black" />

                    <div className="visible lg:hidden flex flex-col items-center justify-center px-2 py-1 w-auto h-auto cursor-pointer">
                        <Icon path={mdiMenu} width={32} height={32} title="Menu" color="black" onClick={() => { setShowMenu(!showMenu) }} />
                    </div>
                </div>
            </div>
            {/* dropdown */}
            {showMenu ?
                <div className="fixed w-full h-auto z-50 top-12 flex flex-col bg-white border-black border-b-2">
                    {menu.map((item, index) => {
                        return (
                            <Link to={item.link} className={`w-auto h-12 flex flex-col justify-center items-center border-black border-x-2 ${item.divider !== undefined ? 'border-b-2' : ''}`} onClick={() => { setShowMenu(false) }}>
                                <p className="text-center text-xl">
                                    {item.name}
                                </p>
                            </Link>
                        )
                    })}
                </div>

                : null}
        </>
    )
}

export default Header;