import React, { FC } from "react";
import './HomeScreen.scss'
import logo from '../../assets/svg/logo.svg'
import Indicator from "./Indicator/Indicator";
import Statistics from "./Statistics";
import SubsList from "../../components/SubsList";
import BottomBar from "../../components/BottomBar";
import HeaderTopMenu from "../../components/HeaderTopMenu";
import SubsMode from "./SubsMode";

const HomeScreen: FC = () => {
    return (
        <main className="home shadow-screen">
            <section className="home__section section bookmark">
                <HeaderTopMenu gear/>
                <div className="home__counter">
                    <div className="home__total">
                        <div className="home__indicator">
                            <Indicator />
                        </div>
                        <img className="home__logo" src={logo} alt="logo" />
                        <p className="home__total-price ft-7">$1,235</p>
                        <button className="home__total-btn ft-1 border">See your budget</button>
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
                <BottomBar home/>
            </section>
        </main>
    )
}

export default HomeScreen