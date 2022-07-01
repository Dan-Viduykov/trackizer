import { Select } from "antd";
import { FC } from "react";

import BottomBar from "../../components/BottomBar";
import HeaderTopMenu from "../../components/HeaderTopMenu";
import SubsList from "../../components/SubsList";

import './Calendar.scss'
import 'antd/dist/antd.css';

const Calendar: FC = () => {
    return (
        <main className="calendar shadow-screen">
            <section className="calendar__top section bookmark">
                <HeaderTopMenu title="Calendar" gear/>
                <h2 className="calendar__title ft-7">Subs<br />Schedule</h2>
                <div className="calendar__choose">
                    <p className="ft-2">3 subscriptions for today</p>
                    <Select className="calendar__select" defaultValue={'january'}></Select>
                </div>
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
            </section>
            <section className="calendar__subs section">
                <div className="calendar__period">
                    <p className="calendar__mount ft-4">January</p>
                    <p className="calendar__total-price ft-4">$24.98</p>
                </div>
                <ul className="calendar__subs-list">
                    <SubsList typeList/>
                </ul>
            </section>
            <BottomBar calendar />
        </main>
    )
}

export default Calendar