import { FC } from "react";
import './UserView.scss';

import { Link } from "react-router-dom";
import { useAppSelector } from "../../../core/hooks/redux";

const UserView: FC = () => {
    const { img, name, mail } = useAppSelector(state => state.userReducer)

    return (
        <div className="user">
            <div className="user__img">
                <img src={img} alt="" />
            </div>
            <p className="user__name ft-4" >{name}</p>
            <p className="user__mail ft-body-s" >{mail}</p>
            <Link to={'/settings/edit'} className="user__btn-edit">Edit profile</Link>
        </div>
    )
}

export {UserView}