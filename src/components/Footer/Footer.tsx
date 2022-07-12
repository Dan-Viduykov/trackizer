import { FC } from "react";
import './Footer.scss'

import { faCreditCardAlt } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays, faHouse, faListUl, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bg from '../../assets/svg/bottom-bar.svg'

import { NavLink, Link, useLocation } from "react-router-dom";

const Footer: FC = () => {
    const location = useLocation()
    
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
                                <input
                                    id="home"
                                    type="radio"
                                    name="nav"
                                    defaultChecked={location.pathname === '/' ? true : false} />
                                <FontAwesomeIcon icon={faHouse} />
                        </label>
                    </NavLink>
                    <NavLink to='/budgets' className="bottom-bar__buttons-link">
                        <label htmlFor="listApp" className="bottom-bar__label">
                                <input
                                    id="listApp"
                                    type="radio"
                                    name="nav"
                                    defaultChecked={location.pathname === '/budgets' ? true : false} />
                                <FontAwesomeIcon icon={faListUl} />
                        </label>
                    </NavLink>
                </div>
                <div className="bottom-bar__buttons-group"> 
                    <NavLink to='/calendar'  className="bottom-bar__buttons-link">
                        <label htmlFor="calendar" className="bottom-bar__label">
                                <input
                                    id="calendar"
                                    type="radio"
                                    name="nav"
                                    defaultChecked={location.pathname === '/calendar' ? true : false} />
                                <FontAwesomeIcon icon={faCalendarDays} />
                        </label>
                    </NavLink>
                    <NavLink to='/creditCards' className="bottom-bar__buttons-link">
                        <label htmlFor="credit" className="bottom-bar__label">
                                <input
                                    id="credit"
                                    type="radio"
                                    name="nav"
                                    defaultChecked={location.pathname === '/creditCards' ? true : false} />
                                <FontAwesomeIcon icon={faCreditCardAlt} />
                        </label>
                    </NavLink>
                </div>
            </nav>
        </footer>
    )
}

export default Footer