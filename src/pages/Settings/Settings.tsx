import React, { FC } from "react";
import './Settings.scss'

import { faAngleLeft, faAngleRight, faArrowDownShortWide, faChartPie, faCloud, faMoneyBill, faSpellCheck, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSquare, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from 'antd';
import "antd/dist/antd.css";

import Button from "../../components/Button";

const Settings: FC = () => {
    return (
        <div className="settings">
            <div className="settings__header">
                <div className="settings__top">
                    <button className="settings__arrow-back"><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <p className="settings__page-name font-body-large">Settings</p>
                </div>
                <div className="settings__user">
                    <div className="settings__img">
                        <img src="" alt="" />
                    </div>
                    <p className="settings__user-name font-headline-4" >John Doe</p>
                    <p className="settings__mail font-body-small" >j.doe@gmail.com</p>
                    <Button className="settings__btn-edit" type="submit" btnType="Secondary" >Edit profile</Button>
                </div>
            </div>
            <ul className="settings__category">
                <li className="settings__category-item">
                    <h4 className="settings__category-title font-headline-2" >General</h4>
                    <ul className="settings__list border">
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faUsersViewfinder} />
                            <p className="settings__item-name font-headline-2">Security</p>
                            <p className="settings__item-description font-body-small">FaceID <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faCloud} />
                            <p className="settings__item-name font-headline-2">iCloud Sync</p>
                            <Switch defaultChecked />
                        </li>
                    </ul>
                </li>
                <li className="settings__category-item">
                    <h4 className="settings__category-title font-headline-2" >My subscriptions</h4>
                    <ul className="settings__list border">
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faArrowDownShortWide} />
                            <p className="settings__item-name font-headline-2">Sorting</p>
                            <p className="settings__item-description font-body-small">Date <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faChartPie} />
                            <p className="settings__item-name font-headline-2">Summary</p>
                            <p className="settings__item-description font-body-small">Average <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faMoneyBill} />
                            <p className="settings__item-name font-headline-2">Default currency</p>
                            <p className="settings__item-description font-body-small">USD ($) <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                    </ul>
                </li>
                <li className="settings__category-item" >
                    <h4 className="settings__category-title font-headline-2">Appearance</h4>
                    <ul className="settings__list border">
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faSquare} />
                            <p className="settings__item-name font-headline-2">App icon</p>
                            <p className="settings__item-description font-body-small">Default <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faSun} />
                            {/* <FontAwesomeIcon className="settings__item-icon" icon={faMoon} /> */}
                            <p className="settings__item-name font-headline-2">Theme</p>
                            <p className="settings__item-description font-body-small">Dark <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faSpellCheck} />
                            <p className="settings__item-name font-headline-2">Font</p>
                            <p className="settings__item-description font-body-small">Inter <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Settings