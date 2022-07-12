import { FC } from "react";
import styles from './FooterLink.module.scss';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";

interface FooterLinkProps {
    path: string;
    icon: IconDefinition;
    className: string;
}

const FooterLink: FC<FooterLinkProps> = (props) => {
    const { path, icon, className } = props
    const location = useLocation();
    
    return (
        <NavLink to={path} className={`${styles.link} ${className}`}>
            <label className={styles.label}>
                    <input
                        className={styles.input}
                        type="radio"
                        name='nav'
                        defaultChecked={location.pathname === path ? true : false} />
                    <FontAwesomeIcon className={styles.icon} icon={icon} />
            </label>
        </NavLink>
    )
}

export default FooterLink