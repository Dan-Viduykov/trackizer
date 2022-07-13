import { FC } from "react";
import './sass/main.scss';

import { Outlet, Route, Routes } from "react-router-dom";

import AppSettings from "./pages/AppSettings/AppSettings";
import Calendar from "./pages/Calendar/Calendar";
import CreditCards from "./pages/CreditCards/CreditCards";
import HomePage from "./pages/home";
import CategoriesPage from "./pages/categories";
import NewSubscription from "./pages/NewSubscription/NewSubscription";
import SubscriptionInfo from "./pages/SubscriptionInfo/SubscriptionInfo";

const App: FC = () => {
    return (
        <div className="app">
            <Outlet />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/budgets" element={<CategoriesPage />}/>
                <Route path="/budgets/new" element={<CategoriesPage />}/>
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