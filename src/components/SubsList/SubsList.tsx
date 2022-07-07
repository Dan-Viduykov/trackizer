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
    
    const items = (subs: ISub[]) => subs.map((sub: ISub) => {
        const { name, price, id, image } = sub;

        const logoImg = (
            <div className="subs__item-img img">
                {image.length !== 0 ? <img src={image} alt="name" /> : <img src="" alt="" />}
            </div>
        )
        const logoDate = (
            <div className="subs__item-date">
                <p className="ft-body-s">Jun</p>
                <p className="ft-2">25</p>
            </div>
        ) 

        return (
            <li className="subs__item" key={id}>
                <Link className="subs__item-link" to={`/sub-info/${name}`} >
                    {logoMode === 'imgs' ? logoImg : logoDate}
                    <p className="subs__item-name ft-2">{name}</p>
                    <p className={`subs__item-price ${typeList ? 'ft-4' : 'ft-2'}`}>${price}</p>
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