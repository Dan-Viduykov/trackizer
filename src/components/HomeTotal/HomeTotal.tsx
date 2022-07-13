import { FC } from "react";
import styles from './HomeTotal.module.scss';
import { Link } from "react-router-dom";
import HomeIndicator from "../HomeIndicator/HomeIndicator";
import logo from '../../assets/svg/logo.svg'
import { useAppSelector } from "../../core/hooks/redux";

const HomeTotal: FC = () => {
    const { moneySpent } = useAppSelector(state => state.appReducer)

    return (
        <div className={styles.total}>
            <HomeIndicator className={styles.total__indicator} />
            <img className={styles.total__logo} src={logo} alt="logo" />
            <p className={`${styles.total__price} ft__7`}>${moneySpent}</p>
            <Link to='/budgets' className={`${styles.total__btn} ft__1 border`}>See your budget</Link>
        </div>
    )
}

export default HomeTotal