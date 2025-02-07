import { useState } from "react";

import Logo from"../assets/images/favicon.png";
import SearchImage from "../assets/images/search.svg";
import DarkModeImage from "../assets/images/dark.svg";
import MenuImage from "../assets/images/menu.svg";

export const Header = () => {
    const [dropDownActive, setDropDownActive] = useState(false);

    function DropMenu() {
        setDropDownActive(!dropDownActive);
    }

    return (
        <header>
            <nav className="h-20 flex border-b-2">
                <div id="mobileNav"
                className="sm:hidden flex flex-wrap items-center justify-between
                w-11/12 mx-auto">
                    <div className="flex items-center">
                        <img className="w-10" src={Logo} alt="Logo" />
                        <span 
                        className="text-3xl ml-2 font-semibold">
                        Cinemate</span>
                    </div>
                        
                    <div className="flex justify-between gap-5">
                        <button
                        className="border-2 rounded-lg">
                            <img className="w-8" src={DarkModeImage} alt="" />
                        </button>
                        <button className="focus:bg-slate-200 focus:border-2
                        focus:rounded-lg" onClick={() => DropMenu()}>
                            <img className="w-8" src={SearchImage} alt="" />
                        </button>
                        <button className="focus:bg-slate-200 focus:border-2
                        focus:rounded-lg" onClick={() => DropMenu()}>
                            <img className="w-8" src={MenuImage} alt="" />
                        </button>
                    </div>
                </div>

                <div id="mobileDropDown" 
                className={`${dropDownActive ? "" : "hidden"}
                absolute top-24 w-[100%] h-60 border-b-2 flex-col z-50
                sm:hidden`} >
                    <ul className="mx-auto text-center h-[100%] flex pb-4
                    flex-col justify-between text-lg">
                        <li>
                            <input type="text"
                            className="border-2 rounded-lg w-11/12"
                            placeholder="   Search..."/>
                        </li>
                        <li>
                            <button 
                            className="w-11/12 py-2 focus:bg-blue-500">
                            Home</button>
                        </li>
                        <li>
                            <button 
                            className="w-11/12 py-2 focus:bg-blue-500">
                            Popular</button>
                        </li>
                        <li>
                            <button 
                            className="w-11/12 py-2 focus:bg-blue-500">
                            Top Rated</button>
                        </li>
                        <li>
                            <button 
                            className="w-11/12 py-2 focus:bg-blue-500">
                            Upcoming</button>
                        </li>
                    </ul>
                </div>

                <div id="desktopNav"
                className="hidden sm:visible sm:flex justify-between
                mx-auto items-center flex-wrap w-11/12">
                    <div className="flex items-center">
                        <img className="w-10" src={Logo} alt="Logo" />
                        <span className="text-2xl ml-2 font-bold">Cinemate</span>
                    </div>

                    <div>
                        <ul className="flex items-center gap-10 text-xl
                        font-medium">
                            <li>
                                <button
                                className="hover:text-blue-600
                                focus:text-blue-600">
                                    Home</button>
                            </li>
                            <li>
                                <button
                                className="hover:text-blue-600
                                focus:text-blue-600">
                                    Popular</button>
                            </li>
                            <li>
                                <button
                                className="hover:text-blue-600
                                focus:text-blue-600">
                                    Top Rated</button>
                            </li>
                            <li>
                                <button
                                className="hover:text-blue-600
                                focus:text-blue-600">
                                    Upcoming</button>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center text-xl gap-3">
                        <button
                        className="border-2 rounded-lg">
                            <img className="w-8" src={DarkModeImage} alt="" />
                        </button>
                        <input type="text" placeholder="   Search..."
                        className="border-2 rounded-lg"/>
                    </div>
                </div>
            </nav>
            
        </header>
    )
}
