import React, { FC } from "react";
import './BottomBar.scss'

import { faCreditCardAlt } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays, faHouse, faListUl, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from '../../assets/svg/bottom-bar.svg'

const BottomBar: FC = () => {
    return (
        <nav className="bottom-bar">
            <img src={bg} alt="" />
            <button className="bottom-bar__add-sub"><FontAwesomeIcon icon={faPlus}/></button>
            <div className="bottom-bar__buttons">
                <label htmlFor="home" className="bottom-bar__label" >
                    <input id="home" type="radio" name="nav" defaultChecked />
                    <FontAwesomeIcon icon={faHouse} />
                </label>
                <label htmlFor="list" className="bottom-bar__label" >
                    <input id="list" type="radio" name="nav" />
                    <FontAwesomeIcon icon={faListUl} />
                </label>
                <label htmlFor="calendar" className="bottom-bar__label" >
                    <input id="calendar" type="radio" name="nav" />
                    <FontAwesomeIcon icon={faCalendarDays} />
                </label>
                <label htmlFor="credit" className="bottom-bar__label" >
                    <input id="credit" type="radio" name="nav" />
                    <FontAwesomeIcon icon={faCreditCardAlt} />
                </label>
            </div>
        </nav>
    )
}

export default BottomBar