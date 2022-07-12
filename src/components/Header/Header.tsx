import { CSSProperties, FC } from "react";
import styles from './Header.module.scss'

import { faAngleLeft, faTrashCan, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../core/hooks/redux";
import { AppSlice } from "../../core/store/reducers/appReducer";

interface HeaderProps {
    angleLeft?: boolean;
    trash?: string;
    gear?: boolean;
    title?: string;
    className?: string;
    style?: CSSProperties;
}

const Header: FC<HeaderProps> = (props) => {
    const { angleLeft, title, trash, gear, className, style } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { deleteSubscription } = AppSlice.actions

    const buttonBack = (
        <button
            className={styles.buttonLeft}
            onClick={() => navigate(-1)} >
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    );

    const ButtonGear = (
        <NavLink 
            to='/settings'
            className={styles.buttonRight} >
            <FontAwesomeIcon icon={faGear} />
        </NavLink>
    );

    const trashSubscription = () => {
        navigate('/')
        dispatch(deleteSubscription(trash!));
    } 

    const buttonTrash = (
        <button
            className={styles.buttonRight}
            onClick={trashSubscription} >
            <FontAwesomeIcon icon={faTrashCan} />
        </button>
    )
    
    return (
        <header className={`${styles.header} ${className}`} style={style}>
            { angleLeft ? buttonBack : false }
            <p className={`${styles.title}`}>{title}</p>
            { trash ? gear ? false : buttonTrash : gear ? ButtonGear : false }
        </header>
    )
}

export default Header