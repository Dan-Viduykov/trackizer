import { FC } from "react";
import './AppSettings.scss'

import { faAngleRight, faArrowDownShortWide, faSpellCheck } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HeaderTopMenu from "../../components/HeaderTopMenu";
import { useAppSelector } from "../../core/hooks/redux";

import { useLocation } from "react-router-dom";
import { UserView } from "./UserView";
import { UserEdit } from "./UserEdit";

// кароч, берёшь удаляешь всё нахер, оставляешь только вью часть, вместо пишек добавляешь инпут, делаешь его не заметным
// и после чего ставишь в вэлью значение из редюсера, и при изменении при нажатии на кнопку, всё это просто сохранится в 
// состоянии юзера в редаксе
 
const AppSettings: FC = () => {
    const { sorting, theme, fontSize } = useAppSelector(state => state.appSettingsReducer)
    const location = useLocation()

    return (
        <main className="settings section">
            <section className="settings__header">
                <HeaderTopMenu angleLeft title="Settings" />
                { location.pathname === '/settings' ? <UserView /> : <UserEdit /> }
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