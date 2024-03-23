import React, { useState } from 'react'
import { useAppContext } from '../contexts/Context'
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import "../css/Navbar.css"


const Navbar = () => {

    const { user } = useAppContext();
    console.log(user);

    const [count, setCount] = useState(0);

    // window.onmousedown = () => {
    //     setCount(0);
    // }

    return (
        <>
            <div className="navbar" onMouseLeave={() => setCount(0)}>
                <div className="logo">logo</div>

                <ul className="nav-links-cont">
                    <li className="nav-link" onMouseEnter={() => setCount(count + 1)}>
                        HOME
                    </li>
                    <li className="nav-link">SHOP</li>
                    <li className="nav-link">BLOG</li>
                    <li className="nav-link">PAGES</li>
                    <li className="nav-link">PORTFOLIO</li>
                    <li className="nav-link">NEW POST</li>
                </ul>

                <ul className="nav-end">
                    <li className="nav-icon">
                        <IoIosSearch />
                    </li>
                    <li className="nav-icon">
                        <RxHamburgerMenu />
                    </li>
                    <li className="nav-icon">
                        <IoBagHandleOutline />
                    </li>
                    {user ? user.username : "no user"}
                </ul>
                {count > 0 ? <div onMouseLeave={() => setCount(0)} className="experiment" key={count}>{count} </div> : null}
            </div>

        </>
    )
}

export default Navbar