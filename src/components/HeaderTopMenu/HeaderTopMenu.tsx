import { faAngleLeft, faTrashCan, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import './HeaderTopMenu.scss'

interface HeaderTopMenuProps {
    angleLeft?: boolean;
    trash?: boolean;
    gear?: boolean;
    title?: string;
}

const HeaderTopMenu: FC<HeaderTopMenuProps> = (props) => {
    const { angleLeft, title, trash, gear } = props
    return (
        <div className="top-menu">
            { angleLeft ? <button className="top-menu__btn top-menu__btn--left"><FontAwesomeIcon icon={faAngleLeft} /></button> : false }
            { title ? <p className="top-menu__page-name ft-body-l">{props.title}</p> : false }
            { trash ? gear ? 
                false : <button className="top-menu__btn top-menu__btn--right"><FontAwesomeIcon icon={faTrashCan} /></button> : 
                gear ? <button className="top-menu__btn top-menu__btn--right"><FontAwesomeIcon icon={faGear} /></button>
            : false }
        </div>
    )
}

export default HeaderTopMenu