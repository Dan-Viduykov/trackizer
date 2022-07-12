import { FC } from "react";

interface CategoryIndicatorProps {
    spent: number;
    color: string;
}

const CategoryIndicator: FC<CategoryIndicatorProps> = (props) => {
    const { spent, color } = props

    return (
        <div className="category__indicator">
            <div style={{width: `${spent}%`, background: color}}></div>
        </div>
    )
}

export {CategoryIndicator}