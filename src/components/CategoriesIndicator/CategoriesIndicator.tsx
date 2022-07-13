import { FC } from "react";
import styles from './CategoriesIndicator.module.scss'
import Header from "../Header/Header";

interface CategoriesIndicatorProps {
    className: string;
}

const CategoriesIndicator: FC<CategoriesIndicatorProps> = ({ className }) => {
    return (
        <section className={`${className} ${styles.indicator}`}>
            <Header title="Spending & Budgets" gear/>
            <div className={styles.indicator__lines}>
                <div className={styles.indicator__line}></div>
                <div className={styles.indicator__line}></div>
                <div className={styles.indicator__line}></div>
            </div>
            <p className={`${styles.indicator__total} ft__5`}>$82,97</p>
            <p className={`${styles.indicator__capital} ft__body_s`}>of $2,000 budget</p>
        </section>
    )
}

export default CategoriesIndicator