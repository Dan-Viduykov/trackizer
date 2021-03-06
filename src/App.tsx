import { FC } from "react";
import './sass/main.scss';

import { Outlet, Route, Routes } from "react-router-dom";

import Calendar from "./pages/Calendar/Calendar";
import CreditCards from "./pages/CreditCards/CreditCards";
import HomePage from "./pages/home";
import SettingsPage from "./pages/appSettings";
import CategoriesPage from "./pages/categories";
import SubscriptionPage from "./pages/subscriptionInfo";
import NewSubPage from "./pages/newSubscription";

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
                <Route path="/settings" element={<SettingsPage />}/>
                <Route path="/settings/edit" element={<SettingsPage />}/>
                <Route path="/sub-info/:title" element={<SubscriptionPage />}/>
                <Route path="/sub-new" element={<NewSubPage />}/>
            </Routes>
        </div>
    )
}

export default App