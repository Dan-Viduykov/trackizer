import React, { FC } from "react";
import './App.scss'
import NewSubscription from "./pages/NewSubscription";
import Settings from "./pages/Settings";
import SubscriptionInfo from "./pages/SubscriptionInfo";

const App: FC = () => {
    return (
        <div className="app">
            <NewSubscription />
        </div>
    )
}

export default App