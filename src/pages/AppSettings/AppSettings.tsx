import React, { FC } from "react";
import './AppSettings.scss'

import { faAngleRight, faArrowDownShortWide, faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "antd/dist/antd.css";

import Button from "../../components/Button";
import HeaderTopMenu from "../../components/HeaderTopMenu";
import { useAppSelector } from "../../core/hooks/redux";

const AppSettings: FC = () => {

    const { name, mail } = useAppSelector(state => state.userReducer);
    const { sorting, theme, fontSize } = useAppSelector(state => state.appSettingsReducer)
    
    return (
        <main className="settings section">
            <section className="settings__header">
                <HeaderTopMenu angleLeft title="Settings" />
                <div className="settings__user">
                    <div className="settings__img">
                        <img src="" alt="" />
                    </div>
                    <p className="settings__user-name ft-4" >{name}</p>
                    <p className="settings__mail ft-body-s" >{mail}</p>
                    <Button className="settings__btn-edit" type="submit" btnType="Secondary" >Edit profile</Button>
                </div>
            </section>
            <ul className="settings__category">
                <li className="settings__category-item">
                    <h4 className="settings__category-title ft-2" >My subscriptions</h4>
                    <ul className="settings__list border">
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faArrowDownShortWide} />
                            <p className="settings__item-name ft-2">Sorting</p>
                            <p className="settings__item-description ft-body-s">{sorting} <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                    </ul>
                </li>
                <li className="settings__category-item" >
                    <h4 className="settings__category-title ft-2">Appearance</h4>
                    <ul className="settings__list border">
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faSun} />
                            <p className="settings__item-name ft-2">Theme</p>
                            <p className="settings__item-description ft-body-s">{theme} <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                        <li className="settings__item">
                            <FontAwesomeIcon className="settings__item-icon" icon={faSpellCheck} />
                            <p className="settings__item-name ft-2">Font</p>
                            <p className="settings__item-description ft-body-s">{fontSize} <FontAwesomeIcon className="angle-right" icon={faAngleRight} /></p>
                        </li>
                    </ul>
                </li>
            </ul>
        </main>
    )
}

export default AppSettings