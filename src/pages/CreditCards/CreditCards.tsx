import { FC } from "react";
import './CreditCards.scss'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BottomBar from "../../components/BottomBar";
import HeaderTopMenu from "../../components/HeaderTopMenu";

import { UserCard } from "./UserCard";
import { NavLink, useLocation } from "react-router-dom";
import { UserCardEdit } from "./UserCardEdit";

const CreditCards: FC = () => {
    const location = useLocation();
    const card = location.pathname === '/creditCards' ? <UserCard className="credit-card__user-card" /> : null;
    const cardEdit = location.pathname === '/creditCards/edit' ? <UserCardEdit className="credit-card__user-card" /> : null;

    return (
        <main className="credit-card section">
            <HeaderTopMenu title="Credit Cards" gear/>
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
                <BottomBar creditCards />
            </footer>
        </main>
    )
}

export default CreditCards