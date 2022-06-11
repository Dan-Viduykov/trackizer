import React, { FC } from "react";
import './App.scss'
import Settings from "./pages/Settings";

const App: FC = () => {
    return (
        <div className="app">
            <Settings />
        </div>
    )
}

export default App