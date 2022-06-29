import { FC } from "react";
import './SubsList.scss'

import { useAppSelector } from "../../core/hooks/redux";
import { ISub } from "../../core/modules/IApp";

interface SubsListProps {
    typeList?: boolean;
}

const SubsList: FC<SubsListProps> = ({ typeList }) => {
    const uniqid = require('uniqid'); 
    const { subscriptions } = useAppSelector(state => state.appReducer);
    
    const items = (subs: ISub[]) => subs.map((sub: ISub) => {
        const { name, price } = sub;

        return (
            <li className="subs__item sub" key={uniqid()}>
                <div className="sub__img"><img src="" alt="" /></div>
                <p className="sub__name ft-2">{name}</p>
                <p className={`sub__price ${typeList ? 'ft-4' : 'ft-2'}`}>${price}</p>
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