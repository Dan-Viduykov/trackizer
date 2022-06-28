import { FC } from "react";
import { useAppSelector } from "../../../core/hooks/redux";
import './Statistics.scss'

const Statistics: FC = () => {
    const { subscriptions } = useAppSelector(state => state.appReducer);

    const activeSubs = subscriptions.length;
    const highestSubs = subscriptions.reduce((acc, curr) => acc.price > curr.price ? acc : curr).price;
    const lowestSubs = subscriptions.reduce((acc, curr) => acc.price < curr.price ? acc : curr).price;

    return (
        <div className="statistic">
            <div className="statistic__item border">
                <p className="statistic__name ft-1">Active subs</p>
                <p className="statistic__info ft-2">{activeSubs}</p>
            </div>
            <div className="statistic__item border">
                <p className="statistic__name ft-1">Highest subs</p>
                <p className="statistic__info ft-2">{highestSubs}</p>
            </div>
            <div className="statistic__item border">
                <p className="statistic__name ft-1">Lowest subs</p>
                <p className="statistic__info ft-2">{lowestSubs}</p>
            </div>
        </div>
    )
}

export default Statistics