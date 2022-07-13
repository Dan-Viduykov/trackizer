import { FC } from "react";
import styles from './CategoryIndicator.module.scss'

interface CategoryIndicatorProps {
    spent: number;
    color: string;
    className?: string;
}

const CategoryIndicator: FC<CategoryIndicatorProps> = ({ spent, color, className }) => {
    return (
        <div className={`${styles.indicator} ${className}`}>
            <div style={{width: `${spent}%`, background: color}}></div>
        </div>
    )
}

export default CategoryIndicator