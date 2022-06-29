import React, { FC } from "react";
import './HomeScreen.scss'
import logo from '../../assets/svg/logo.svg'
import Indicator from "./Indicator/Indicator";
import Statistics from "./Statistics";
import SubsList from "../../components/SubsList";
import BottomBar from "../../components/BottomBar";

const HomeScreen: FC = () => {
    return (
        <main className="home shadow-screen">
            <div className="wrap">
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
                <div className="home__subs">
                    <div className="home__subs-modes">
                        <div className="home__subs-mode ft-1">Your subscriptions</div>
                        <div className="home__subs-mode ft-1">Upcoming bills</div>
                    </div>
                    <div className="home__subs-list">
                        <SubsList />
                    </div>
                </div>
                <BottomBar home/>
            </div>
        </main>
    )
}

export default HomeScreen