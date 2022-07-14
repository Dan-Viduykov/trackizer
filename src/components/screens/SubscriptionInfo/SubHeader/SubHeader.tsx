import { FC } from "react";
import { useAppSelector } from "../../../../core/hooks/redux";
import Header from "../../../Header/Header";
import styles from './SubHeader.module.scss'

interface SubHeaderProps {
    idx: number
}

const SubHeader: FC<SubHeaderProps> = ({ idx }) => {
    const { name, price, id } = useAppSelector(state => state.appReducer.subscriptions[idx])

    return (
        <section className={styles.header}>
            <Header title="Subscription info" trash={id}/>
            <div className={styles.header__img}>
                <img src="" alt="" />
            </div>
            <h2 className={`${styles.header__title} ft__6`}>{name}</h2>
            <p className={`${styles.header__price} ft__4`}>${price}</p>
        </section>
    )
}

export { SubHeader }