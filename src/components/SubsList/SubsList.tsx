import { FC } from "react";
import './SubsList.scss'

import { useAppSelector } from "../../core/hooks/redux";
import { ISub } from "../../core/modules/IApp";
import { Link } from "react-router-dom";

interface SubsListProps {
    typeList?: boolean;
}

const SubsList: FC<SubsListProps> = ({ typeList }) => {
    const { subscriptions, logoMode } = useAppSelector(state => state.appReducer);
    const uniqid = require('uniqid'); 
    
    const items = (subs: ISub[]) => subs.map((sub: ISub) => {
        const { name, price } = sub;

        const logoImg = (
            <div className="subscription__img">
                <img src="" alt="" />
            </div>
        )
        const logoDate = (
            <div className="subscription__date">
                <p className="ft-body-s">Jun</p>
                <p className="ft-2">25</p>
            </div>
        )      

        return (
            <li className="subs__item subscription" key={uniqid()}>
                <Link className="subscription__link" to={`/sub-info/${name}`} >
                    {logoMode === 'imgs' ? logoImg : logoDate}
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