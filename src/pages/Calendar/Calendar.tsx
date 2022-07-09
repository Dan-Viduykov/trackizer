import { FC, useState } from "react";
import './Calendar.scss'

import BottomBar from "../../components/BottomBar";
import HeaderTopMenu from "../../components/HeaderTopMenu";
import SubsList from "../../components/SubsList";

import { Select } from "antd";
import 'antd/dist/antd.css';

const { Option } = Select;

const Calendar: FC = () => {
    const [ selected, setSelected ] = useState<string | null>(null)

    const handleChange = (value: string) => setSelected;

    return (
        <main className="calendar shadow-screen">
            <section className="calendar__top section bookmark">
                <HeaderTopMenu title="Calendar" gear/>
                <h2 className="calendar__title ft-7">Subs<br />Schedule</h2>
                <div className="calendar__choose">
                    <p className="ft-2">3 subscriptions for today</p>
                    <Select
                        className="calendar__select"
                        style={{borderRadius: '32px'}}
                        defaultValue="January"
                        onChange={handleChange} >
                        <Option value="January">January</Option>
                        <Option value="February">February</Option>
                        <Option value="March">March</Option>
                        <Option value="April">April</Option>
                        <Option value="May">May</Option>
                        <Option value="June">June</Option>
                        <Option value="July">July</Option>
                        <Option value="August">August</Option>
                        <Option value="September">September</Option>
                        <Option value="October">October</Option>
                        <Option value="November">November</Option>
                        <Option value="December ">December </Option>
                    </Select>
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
            <BottomBar />
        </main>
    )
}

export default Calendar