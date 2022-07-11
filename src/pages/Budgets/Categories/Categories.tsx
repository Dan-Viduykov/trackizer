import { FC } from "react";
import './Categories.scss'
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../core/hooks/redux";
import { ICategory } from "../../../core/modules/IApp";

interface CategoriesProps {
    className: string;
}

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

const Categories: FC<CategoriesProps> = ({ className }) => {
    const { categories, subscriptions } = useAppSelector(state => state.appReducer);
    const uniqid = require('uniqid');

    const createCategoryItem = (category: ICategory) => {
        const { title, limit, icon, color } = category;

        const spent = subscriptions
                        .filter(sub => sub.category === title)
                        .reduce((acc, sub) => {return acc + sub.price;}, 0);
        const spentPercent = spent*100/limit;

        return (
            <li className="categories__category category border" key={uniqid()}>  
                <div className="category__content">
                    <FontAwesomeIcon icon={faGhost} />
                    <div className="category__title">
                        <p className="ft-2" >{title}</p>
                        <p className="ft-body-s" >${Math.round(limit - spent)} left to spend</p>
                    </div>
                    <div className="category__price">
                        <p className="ft-2" >${spent}</p>
                        <p className="ft-body-s" >of ${limit}</p>
                    </div>
                </div>
                <CategoryIndicator spent={spentPercent} color={color} />
            </li>
        )
    }
    
    return (
        <ul className={`${className} categories`}>
            { categories.map((category: ICategory) => createCategoryItem(category)) }
        </ul>
    )
}

export {Categories}