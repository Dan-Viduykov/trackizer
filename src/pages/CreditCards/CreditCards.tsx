import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import BottomBar from "../../components/BottomBar";
import HeaderTopMenu from "../../components/HeaderTopMenu";
import './CreditCards.scss'

const CreditCards: FC = () => {

    return (
        <main className="credit-card section">
            <HeaderTopMenu title="Credit Cards" gear/>
            <section className="credit-card__user-card user-card">
                <div className="user-card__type logo-40">
                    <img src="" alt="" />
                </div>
                <h4 className="user-card__title ft-3">Virtual Card</h4>
                <p className="user-card__name ft-1">John Doe</p>
                <p className="user-card__card-number ft-3">**** **** **** 2197</p>
                <p className="user-card__date ft-2">08/28</p>
                <div className="user-card__chip logo-40">
                    <img src="" alt="" />
                </div>
                <svg className="user-card__circles">
                    <linearGradient id="SVGID_1" x1="1" y1="200" x2="150" y2="0">
                        <stop offset="0" stopColor="#fff" stopOpacity={0.1} />
                        <stop offset="1" stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <circle className="user-card__circle-big" cx="170" cy="290" r="190" fill="url(#SVGID_1)" />
                    <circle className="user-card__circle-small" cx="230" cy="40" r="130" fill="url(#SVGID_1)" />
                </svg>
                <div className="user-card__bc"></div>
                <div className="user-card__bc"></div>
            </section>
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
            <section className="credit-card__footer bookmark bookmark--reverse">
                <button className="credit-card__add ft-2"><span>Add new Card</span><FontAwesomeIcon icon={faPlusCircle} /></button>
                <BottomBar creditCards />
            </section>
        </main>
    )
}

export default CreditCards