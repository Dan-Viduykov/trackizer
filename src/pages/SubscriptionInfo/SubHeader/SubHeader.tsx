import { FC } from "react";
import './SubHeader.scss'

import HeaderTopMenu from "../../../components/HeaderTopMenu";
import { useAppSelector } from "../../../core/hooks/redux";

interface SubHeaderProps {
    idx: number
}

const SubHeader: FC<SubHeaderProps> = ({ idx }) => {
    const { name, price, id } = useAppSelector(state => state.appReducer.subscriptions[idx])

    return (
        <section className="sub-header">
            <HeaderTopMenu angleLeft title="Subscription info" trash={id}/>
            <div className="sub-header__img">
                <img src="" alt="" />
            </div>
            <h2 className="sub-header__title ft-6">{name}</h2>
            <p className="sub-header__price ft-4">${price}</p>
        </section>
    )
}

export { SubHeader }