import { FC } from "react";
import './sass/main.scss';

import { Outlet, Route, Routes } from "react-router-dom";

import AppSettings from "./pages/AppSettings/AppSettings";
import Calendar from "./pages/Calendar/Calendar";
import CreditCards from "./pages/CreditCards/CreditCards";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import NewSubscription from "./pages/NewSubscription/NewSubscription";
import SubscriptionInfo from "./pages/SubscriptionInfo/SubscriptionInfo";
import Categories from "./pages/Categories/Categories";

const App: FC = () => {
    return (
        <div className="app">
            <Outlet />
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/budgets" element={<Categories />}/>
                <Route path="/budgets/new" element={<Categories />}/>
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/creditCards" element={<CreditCards />}/>
                <Route path="/creditCards/edit" element={<CreditCards />}/>
                <Route path="/settings" element={<AppSettings />}/>
                <Route path="/settings/edit" element={<AppSettings />}/>
                <Route path="/sub-info/:title" element={<SubscriptionInfo />}/>
                <Route path="/sub-new" element={<NewSubscription />}/>
            </Routes>
        </div>
    )
}

export default App