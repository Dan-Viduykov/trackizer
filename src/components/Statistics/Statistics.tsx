import { FC } from "react";
import { useAppSelector } from "../../core/hooks/redux";
import styles from './Statistics.module.scss'

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
        <section className={styles.statistics}>
            <div className={`${styles.statistics__item} border`}>
                <p className={`${styles.statistics__name} ft__1`}>Active subs</p>
                <p className={`${styles.statistics__info} ft__2`}>{activeSubs}</p>
            </div>
            <div className={`${styles.statistics__item} border`}>
                <p className={`${styles.statistics__name} ft__1`}>Highest subs</p>
                <p className={`${styles.statistics__info} ft__2`}>{subscriptions ? highestSubs : 0}</p>
            </div>
            <div className={`${styles.statistics__item} border`}>
                <p className={`${styles.statistics__name} ft__1`}>Lowest subs</p>
                <p className={`${styles.statistics__info} ft__2`}>{subscriptions ? lowestSubs : 0}</p>
            </div>
        </section>
    )
}

export default Statistics