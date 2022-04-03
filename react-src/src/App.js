import React from "react";
import "./App.css";
import "foundation-sites/dist/css/foundation.min.css";
import { TopBar } from "./components/TopBar";

import { Outlet } from "react-router-dom";

function App(props) {
    const {params} = props;
    return (
        <div className="App grid-container">
            <header className="">
                <TopBar site="Nom du site Test"/>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
