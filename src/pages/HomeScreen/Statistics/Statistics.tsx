import { FC } from "react";
import styles from './Statistics.module.scss'
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
        <section className={styles.statistic}>
            <div className={`${styles.statistic__item} border`}>
                <p className={`${styles.statistic__name} ft__1`}>Active subs</p>
                <p className={`${styles.statistic__info} ft__2`}>{activeSubs}</p>
            </div>
            <div className={`${styles.statistic__item} border`}>
                <p className={`${styles.statistic__name} ft__1`}>Highest subs</p>
                <p className={`${styles.statistic__info} ft__2`}>{subscriptions ? highestSubs : 0}</p>
            </div>
            <div className={`${styles.statistic__item} border`}>
                <p className={`${styles.statistic__name} ft__1`}>Lowest subs</p>
                <p className={`${styles.statistic__info} ft__2`}>{subscriptions ? lowestSubs : 0}</p>
            </div>
        </section>
    )
}

export default Statistics