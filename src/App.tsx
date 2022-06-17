import React, { FC } from "react";
import './App.scss'
import HomeScreen from "./pages/HomeScreen";
import NewSubscription from "./pages/NewSubscription";
import Settings from "./pages/Settings";
import SubscriptionInfo from "./pages/SubscriptionInfo";

const App: FC = () => {
    return (
        <div className="app">
            <HomeScreen />
        </div>
    )
}

export default App