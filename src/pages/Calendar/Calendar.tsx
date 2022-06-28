import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { FC } from "react";
import BottomBar from "../../components/BottomBar";
import HeaderTopMenu from "../../components/HeaderTopMenu";
import './Calendar.scss'
import 'antd/dist/antd.css';

const Calendar: FC = () => {
    return (
        <section className="calendar">
            <div className="calendar__top">
                <HeaderTopMenu title="Calendar" gear/>
                <h2 className="calendar__title ft-7">Subs Schedule</h2>
                <Select className="calendar__select" defaultValue={'january'}>
                    <Option value="january">January</Option>
                    <Option value="february">February</Option>
                    <Option value="match">Match</Option>
                    <Option value="april">April</Option>
                    <Option value="may">May</Option>
                    <Option value="jun">Jun</Option>
                    <Option value="july">July</Option>
                    <Option value="august">August</Option>
                    <Option value="september">September</Option>
                    <Option value="november">November</Option>
                    <Option value="december">December</Option>
                </Select>
                <div className="calendar__carousel">
                    <ul className="calendar__list">
                        <li className="calendar__item calendar__item--active border">
                            <p className="calendar__item-date ft-4">08</p>
                        </li>
                        <li className="calendar__item border">
                            <p className="calendar__item-date ft-4">09</p>
                        </li>
                        <li className="calendar__item border">
                            <p className="calendar__item-date ft-4">10</p>
                        </li>
                        <li className="calendar__item border">
                            <p className="calendar__item-date ft-4">11</p>
                        </li>
                        <li className="calendar__item border">
                            <p className="calendar__item-date ft-4">11</p>
                        </li>
                        <li className="calendar__item border">
                            <p className="calendar__item-date ft-4">11</p>
                        </li>
                        <li className="calendar__item border">
                            <p className="calendar__item-date ft-4">11</p>
                        </li>
                        <li className="calendar__item border">
                            <p className="calendar__item-date ft-4">11</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="calendar__subs">
                <div className="calendar__period">
                    <p className="calendar__mount ft-4">January</p>
                    <p className="calendar__total-price ft-4">$24.98</p>
                </div>
                <ul className="calendar__subs-list">
                    <li className="calendar__sub border">
                        <div className="calendar__sub-logo">
                            <img src="" alt="" />
                        </div>
                        <p className="calendar__sub-title ft-2">Spotify</p>
                        <p className="calendar__sub-price ft-4">$5.99</p>
                    </li>
                    <li className="calendar__sub border">
                        <div className="calendar__sub-logo">
                            <img src="" alt="" />
                        </div>
                        <p className="calendar__sub-title ft-2">Spotify</p>
                        <p className="calendar__sub-price ft-4">$5.99</p>
                    </li>
                    <li className="calendar__sub border">
                        <div className="calendar__sub-logo">
                            <img src="" alt="" />
                        </div>
                        <p className="calendar__sub-title ft-2">Spotify</p>
                        <p className="calendar__sub-price ft-4">$5.99</p>
                    </li>
                </ul>
            </div>
            <BottomBar calendar />
        </section>
    )
}

export default Calendar