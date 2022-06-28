import React, { FC } from "react";
import BottomBar from "../../components/BottomBar";
import './HomeScreen.scss'
import logo from '../../assets/svg/logo.svg'
import Indicator from "./Indicator/Indicator";

const HomeScreen: FC = () => {
    return (
        <div className="home wrap">
            <div className="home__counter">
                <div className="home__total">
                    <div className="home__indicator">
                        <Indicator />
                    </div>
                    <img className="home__logo" src={logo} alt="logo" />
                    <p className="home__total-price ft-7">$1,235</p>
                    <button className="home__total-btn ft-1 border">See your budget</button>
                </div>
                <div className="home__statistic">
                    <div className="home__statistic-item border">
                        <p className="home__statistic-name ft-1">Active subs</p>
                        <p className="home__statistic-info ft-2">12</p>
                    </div>
                    <div className="home__statistic-item border">
                        <p className="home__statistic-name ft-1">Highest subs</p>
                        <p className="home__statistic-info ft-2">$19.99</p>
                    </div>
                    <div className="home__statistic-item border">
                        <p className="home__statistic-name ft-1">Lowest subs</p>
                        <p className="home__statistic-info ft-2">$5.99</p>
                    </div>
                </div>
            </div>
            <div className="home__subs">
                <div className="home__subs-modes">
                    <div className="home__subs-mode ft-1">Your subscriptions</div>
                    <div className="home__subs-mode ft-1">Upcoming bills</div>
                </div>
                <ol className="home__subs-list">
                    <li className="home__sub">
                        <div className="home__sub-img"><img src="" alt="" /></div>
                        <p className="home__sub-name ft-2">Spotify</p>
                        <p className="home__sub-price ft-2">$5.99</p>
                    </li>
                    <li className="home__sub">
                        <div className="home__sub-img"><img src="" alt="" /></div>
                        <p className="home__sub-name ft-2">YouTube Premium</p>
                        <p className="home__sub-price ft-2">$18.99</p>
                    </li>
                    <li className="home__sub">
                        <div className="home__sub-img"><img src="" alt="" /></div>
                        <p className="home__sub-name ft-2">Microsoft OneDrive</p>
                        <p className="home__sub-price ft-2">$29.99</p>
                    </li>
                    <li className="home__sub">
                        <div className="home__sub-img"><img src="" alt="" /></div>
                        <p className="home__sub-name ft-2">Netflix</p>
                        <p className="home__sub-price ft-2">$37.99</p>
                    </li>
                </ol>
            </div>
            <BottomBar home />
        </div>
    )
}

export default HomeScreen