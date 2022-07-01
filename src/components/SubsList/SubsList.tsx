import { FC } from "react";
import './SubsList.scss'

import { useAppSelector } from "../../core/hooks/redux";
import { ISub } from "../../core/modules/IApp";
import { Link } from "react-router-dom";

interface SubsListProps {
    typeList?: boolean;
}

const SubsList: FC<SubsListProps> = ({ typeList }) => {
    const uniqid = require('uniqid'); 
    const { subscriptions } = useAppSelector(state => state.appReducer);
    
    const items = (subs: ISub[]) => subs.map((sub: ISub) => {
        const { name, price } = sub;

        return (
            <li className="subs__item subscription" key={uniqid()}>
                <Link className="subscription__link" to='/sub-info'>
                    <div className="subscription__img"><img src="" alt="" /></div>
                    <p className="subscription__name ft-2">{name}</p>
                    <p className={`subscription__price ${typeList ? 'ft-4' : 'ft-2'}`}>${price}</p>
                </Link>
            </li>
        )
    })

    return (
        <ul className={`subs ${typeList ? 'subs--flex' : false}`}>
            {items(subscriptions)}
        </ul>
    )
}

export default SubsList