import { FC } from "react";
import './BottomBar.scss'

import { faCreditCardAlt } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays, faHouse, faListUl, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from '../../assets/svg/bottom-bar.svg'

import { NavLink, Link } from "react-router-dom";

interface BottomBarProps {
    home?: boolean;
    budgets?: boolean;
    calendar?: boolean;
    creditCards?: boolean;
}

const BottomBar: FC<BottomBarProps> = (props) => {
    const { home, budgets, calendar, creditCards } = props;

    return (
        <footer className="bottom-bar">
            <img src={bg} alt="" />
            <Link to='/sub-new' className="bottom-bar__add-sub">
                <FontAwesomeIcon className="bottom-bar__plus" icon={faPlus}/>
            </Link>
            <nav className="bottom-bar__buttons">
                <div className="bottom-bar__buttons-group"> 
                    <NavLink to='/' className="bottom-bar__buttons-link">
                        <label htmlFor="home" className="bottom-bar__label">
                                <input id="home" type="radio" name="nav" defaultChecked={home} />
                                <FontAwesomeIcon icon={faHouse} />
                        </label>
                    </NavLink>
                    <NavLink to='/budgets' className="bottom-bar__buttons-link">
                        <label htmlFor="listApp" className="bottom-bar__label">
                                <input id="listApp" type="radio" name="nav" defaultChecked={budgets} />
                                <FontAwesomeIcon icon={faListUl} />
                        </label>
                    </NavLink>
                </div>
                <div className="bottom-bar__buttons-group"> 
                    <NavLink to='/calendar'  className="bottom-bar__buttons-link">
                        <label htmlFor="calendar" className="bottom-bar__label">
                                <input id="calendar" type="radio" name="nav" defaultChecked={calendar} />
                                <FontAwesomeIcon icon={faCalendarDays} />
                        </label>
                    </NavLink>
                    <NavLink to='/creditCards' className="bottom-bar__buttons-link">
                        <label htmlFor="credit" className="bottom-bar__label">
                                <input id="credit" type="radio" name="nav" defaultChecked={creditCards} />
                                <FontAwesomeIcon icon={faCreditCardAlt} />
                        </label>
                    </NavLink>
                </div>
            </nav>
        </footer>
    )
}

export default BottomBar