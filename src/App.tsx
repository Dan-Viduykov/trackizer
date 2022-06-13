import React, { FC } from "react";
import './App.scss'
import Settings from "./pages/Settings";
import SubscriptionInfo from "./pages/SubscriptionInfo";

const App: FC = () => {
    return (
        <div className="app">
            <Settings />
        </div>
    )
}

export default App