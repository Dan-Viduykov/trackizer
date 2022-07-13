import { FC } from "react";
import { useAppSelector } from "../../../../core/hooks/redux";
import styles from './HomeIndicator.module.scss'

interface HomeIndicatorProps {
    className?: string;
}

const HomeIndicator: FC<HomeIndicatorProps> = ({ className }) => {
    const INDICATOR_MAX_LENGTH = 270;
    const { moneyLimit, moneySpent } = useAppSelector(state => state.appReducer)

    let dasharray1 = INDICATOR_MAX_LENGTH * moneySpent / moneyLimit;
    if (dasharray1 > 270) dasharray1 = 270;
    let dasharray2 = 360 - dasharray1;

    return (
        <div className={className}>
            <svg className={styles.spinner} viewBox="0 0 100 100">
                <radialGradient id="linearColors2" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF"></stop>
                    <stop offset="43.25%" stopColor="#ffbf9b"></stop>
                    <stop offset="100%" stopColor="#FF7966"></stop>
                </radialGradient>
                <circle className={styles.spinner__outer} cx="55" cy="55" r="50" fill="none" strokeWidth="4"></circle>
                <circle className={styles.spinner__middle} cx="55" cy="55" r="50" fill="none" strokeWidth="3"></circle>
                <circle className={styles.spinner__inner} strokeDasharray={`${dasharray1} ${dasharray2}`} strokeDashoffset={'236'} cx="55" cy="55" r="50" fill="none" strokeWidth="4"></circle>        
            </svg>
        </div>
    )
}

export default HomeIndicator