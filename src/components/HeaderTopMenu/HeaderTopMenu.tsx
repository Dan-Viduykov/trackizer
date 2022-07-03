import { FC } from "react";
import './HeaderTopMenu.scss'

import { faAngleLeft, faTrashCan, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../core/hooks/redux";
import { AppSlice } from "../../core/store/reducers/appReducer";

interface HeaderTopMenuProps {
    angleLeft?: boolean;
    trash?: string;
    gear?: boolean;
    title?: string;
    classesNames?: string;
}

const HeaderTopMenu: FC<HeaderTopMenuProps> = (props) => {
    const { angleLeft, title, trash, gear, classesNames } = props;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { deleteSubscription } = AppSlice.actions

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

    const trashSubscription = () => {
        navigate('/')
        dispatch(deleteSubscription(trash!));
    } 

    const buttonTrash = (
        <button
            className="top-menu__btn top-menu__btn--right"
            onClick={trashSubscription} >
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