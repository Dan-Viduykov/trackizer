import { FC } from "react";
import './Statistics.scss'
import { useAppSelector } from "../../../core/hooks/redux";

const Statistics: FC = () => {
    const { subscriptions } = useAppSelector(state => state.appReducer);

    const activeSubs = subscriptions.length;
    let highestSubs = 0
    let lowestSubs = 0

    if (activeSubs > 0) {
        highestSubs = subscriptions.reduce((acc, curr) => acc.price > curr.price ? acc : curr).price;
        lowestSubs = subscriptions.reduce((acc, curr) => acc.price < curr.price ? acc : curr).price;
    }

    return (
        <section className="statistic">
            <div className="statistic__item border">
                <p className="statistic__name ft-1">Active subs</p>
                <p className="statistic__info ft-2">{activeSubs}</p>
            </div>
            <div className="statistic__item border">
                <p className="statistic__name ft-1">Highest subs</p>
                <p className="statistic__info ft-2">{subscriptions ? highestSubs : 0}</p>
            </div>
            <div className="statistic__item border">
                <p className="statistic__name ft-1">Lowest subs</p>
                <p className="statistic__info ft-2">{subscriptions ? lowestSubs : 0}</p>
            </div>
        </section>
    )
}

export default Statistics