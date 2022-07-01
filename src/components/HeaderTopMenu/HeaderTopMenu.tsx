import { faAngleLeft, faTrashCan, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './HeaderTopMenu.scss'

interface HeaderTopMenuProps {
    angleLeft?: boolean;
    trash?: boolean;
    gear?: boolean;
    title?: string;
    classesNames?: string;
}

const HeaderTopMenu: FC<HeaderTopMenuProps> = (props) => {
    const { angleLeft, title, trash, gear, classesNames } = props;
    const navigate = useNavigate()

    const buttonBack = (
        <button
            className="top-menu__btn top-menu__btn--left"
            onClick={() => navigate(-1)} >
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    );

    const ButtonGear = (
        <NavLink 
            to='/settings'
            className="top-menu__btn top-menu__btn--right" >
            <FontAwesomeIcon icon={faGear} />
        </NavLink>
    );

    const buttonTrash = (
        <button className="top-menu__btn top-menu__btn--right">
            <FontAwesomeIcon icon={faTrashCan} />
        </button>
    )
    
    return (
        <div className={`top-menu ${classesNames}`}>
            { angleLeft ? buttonBack : false }
            <p className="top-menu__page-name ft-body-l">{title}</p>
            { trash ? gear ? false : buttonTrash : gear ? ButtonGear : false }
        </div>
    )
}

export default HeaderTopMenu