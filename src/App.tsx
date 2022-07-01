import React, { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import './App.scss'
import AppSettings from "./pages/AppSettings";
import Budgets from "./pages/Budgets";
import Calendar from "./pages/Calendar";
import CreditCards from "./pages/CreditCards";
import HomeScreen from "./pages/HomeScreen";
import SubscriptionInfo from "./pages/SubscriptionInfo";

const App: FC = () => {
    return (
        <div className="app">
            <Outlet />
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/budgets" element={<Budgets />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/creditCards" element={<CreditCards />}/>
                <Route path="/settings" element={<AppSettings />}/>
                <Route path="/sub-info" element={<SubscriptionInfo />}/>
            </Routes>
        </div>
    )
}

export default App