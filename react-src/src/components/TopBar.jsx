import React from "react";
import { NavLink, Link } from "react-router-dom";

export const TopBar = (props) => {
    const { site } = props;
    return <>
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu" data-dropdown-menu>
                    {/* <li class="menu-text">Site Title</li> */}
                    
                    <li><NavLink to="/react">React</NavLink></li>
                    <li><NavLink to="accueil">{ site }</NavLink></li>
                    <li><NavLink to="page1"> Page 1</NavLink></li>
                    <li><NavLink to="page2"> Page 2</NavLink></li>
                    <li><NavLink to="form"> Form</NavLink></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                <li><input type="search" placeholder="Search" /></li>
                <li><button type="button" className="button">Search</button></li>
                </ul>
            </div>
            </div>
    </>
}