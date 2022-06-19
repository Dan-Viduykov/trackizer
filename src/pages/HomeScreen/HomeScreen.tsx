import React, { FC } from "react";
import BottomBar from "../../components/BottomBar";
import './HomeScreen.scss'
import logo from '../../assets/svg/logo.svg'

const HomeScreen: FC = () => {
    return (
        <div className="home wrap">
            <div className="home__counter">
                <div className="home__total">
                    <div className="home__indicator">
                        <svg className="spinner" viewBox="0 0 100 100">
                            <radialGradient id="linearColors2" x1="0.5" y1="0" x2="0.5" y2="1">
                                <stop offset="0%" stopColor="#FFFFFF"></stop>
                                <stop offset="43.25%" stopColor="#ffbf9b"></stop>
                                <stop offset="100%" stopColor="#FF7966"></stop>
                            </radialGradient>
                            <circle className="outer" cx="55" cy="55" r="50" fill="none" strokeWidth="4"></circle>
                            <circle className="middle" cx="55" cy="55" r="50" fill="none" strokeWidth="3"></circle>
                            <circle className="inner" strokeDasharray={`0 360`} strokeDashoffset={'236'} cx="55" cy="55" r="50" fill="none" strokeWidth="4"></circle>
                        </svg>
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
            <BottomBar />
        </div>
    )
}

export default HomeScreen