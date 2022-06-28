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
}

const HeaderTopMenu: FC<HeaderTopMenuProps> = (props) => {
    const { angleLeft, title, trash, gear } = props;
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
        <div className="top-menu">
            { angleLeft ? buttonBack : false }
            { title ? <p className="top-menu__page-name ft-body-l">{props.title}</p> : false }
            { trash ? gear ? false : buttonTrash : gear ? ButtonGear : false }
        </div>
    )
}

export default HeaderTopMenu