import { FC } from "react";
import './CreditCards.scss'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../../components/Header/Header";

import { UserCard } from "./UserCard/UserCard";
import { NavLink, useLocation } from "react-router-dom";
import { UserCardEdit } from "./UserCardEdit/UserCardEdit";
import Footer from "../../components/Footer/Footer";

const CreditCards: FC = () => {
    const location = useLocation();
    const card = location.pathname === '/creditCards' ? <UserCard className="credit-card__user-card" /> : null;
    const cardEdit = location.pathname === '/creditCards/edit' ? <UserCardEdit className="credit-card__user-card" /> : null;

    return (
        <main className="credit-card section">
            <Header title="Credit Cards" gear/>
            {card}
            {cardEdit}
            <section className="credit-card__subs">
                <p className="credit-card__title ft-3">Subscriptions</p>
                <ul className="credit-card__subs-list">
                    <li className="credit-card__sub logo-40">
                        <img src="" alt="" />
                    </li>
                    <li className="credit-card__sub logo-40">
                        <img src="" alt="" />
                    </li>
                    <li className="credit-card__sub logo-40">
                        <img src="" alt="" />
                    </li>
                    <li className="credit-card__sub logo-40">
                        <img src="" alt="" />
                    </li>
                </ul>
            </section>
            <footer className="credit-card__footer bookmark bookmark--reverse">
                <NavLink to='/creditCards/edit' className="credit-card__add ft-2"><span>Change Card</span><FontAwesomeIcon icon={faPlusCircle} /></NavLink>
                <Footer />
            </footer>
        </main>
    )
}

export default CreditCards