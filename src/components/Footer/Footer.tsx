import { FC } from "react";
import styles from './Footer.module.scss'

import { faCreditCardAlt } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays, faHouse, faListUl, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import bg from '../../assets/svg/bottom-bar.svg'
import { Link } from "react-router-dom";
import FooterLink from "../FooterLink/FooterLink";


const Footer: FC = () => {
    const links = [
        {path: '/', icon: faHouse},
        {path: '/budgets', icon: faListUl},
        {path: '/calendar', icon: faCalendarDays},
        {path: '/creditCards', icon: faCreditCardAlt},
    ]

    return (
        <footer className={styles.footer}>
            <img src={bg} alt="" />
            <Link to='/sub-new' className={styles.btn}>
                <FontAwesomeIcon className={styles.plus} icon={faPlus}/>
            </Link>
            <nav className={styles.nav}>
                {
                    links.map( link => {
                        return <FooterLink className={styles.link} path={link.path} icon={link.icon} key={link.path} />
                    })
                }
            </nav>
        </footer>
    )
}

export default Footer