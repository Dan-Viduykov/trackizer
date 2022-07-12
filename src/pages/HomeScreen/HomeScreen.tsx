import { FC } from "react";
import './HomeScreen.scss'

import logo from '../../assets/svg/logo.svg'
import Indicator from "./Indicator/Indicator";
import Statistics from "./Statistics/Statistics";
import SubsMode from "./SubsMode/SubsMode";

import SubsList from "../../components/SubsList/SubsList";
import Header from "../../components/Header/Header";

import { Link } from "react-router-dom";
import { useAppSelector } from "../../core/hooks/redux";
import Footer from "../../components/Footer/Footer";

const HomeScreen: FC = () => {
    const { moneySpent } = useAppSelector(state => state.appReducer)

    return (
        <main className="home shadow-screen">
            <section className="home__section section bookmark">
                <Header gear/>
                <div className="home__counter">
                    <div className="home__total">
                        <div className="home__indicator">
                            <Indicator />
                        </div>
                        <img className="home__logo" src={logo} alt="logo" />
                        <p className="home__total-price ft-7">${moneySpent}</p>
                        <Link to='/budgets' className="home__total-btn ft-1 border">See your budget</Link>
                    </div>
                    <Statistics />
                </div>
            </section>
            <section className="home__section section">
                <div className="home__subs">
                    <SubsMode />
                    <div className="home__subs-list">
                        <SubsList />
                    </div>
                </div>
                <Footer />
            </section>
        </main>
    )
}

export default HomeScreen