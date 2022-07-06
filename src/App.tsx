import { FC } from "react";
import './App.scss'

import { Outlet, Route, Routes } from "react-router-dom";

import AppSettings from "./pages/AppSettings";
import Budgets from "./pages/Budgets";
import Calendar from "./pages/Calendar";
import CreditCards from "./pages/CreditCards";
import HomeScreen from "./pages/HomeScreen";
import NewSubscription from "./pages/NewSubscription";
import SubscriptionInfo from "./pages/SubscriptionInfo";

const App: FC = () => {
    return (
        <div className="app">
            <Outlet />
            <Routes>
                <Route path={process.env.PUBLIC_URL + "/"} element={<HomeScreen />}/>
                <Route path={process.env.PUBLIC_URL + "/budgets"} element={<Budgets />}/>
                <Route path={process.env.PUBLIC_URL + "/calendar"} element={<Calendar />}/>
                <Route path={process.env.PUBLIC_URL + "/creditCards"} element={<CreditCards />}/>
                <Route path={process.env.PUBLIC_URL + "/creditCards/edit"} element={<CreditCards />}/>
                <Route path={process.env.PUBLIC_URL + "/settings"} element={<AppSettings />}/>
                <Route path={process.env.PUBLIC_URL + "/sub-info/:title"} element={<SubscriptionInfo />}/>
                <Route path={process.env.PUBLIC_URL + "/sub-new"} element={<NewSubscription />}/>
            </Routes>
        </div>
    )
}

export default App