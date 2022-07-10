import { FC } from "react";
import './Categories.scss'

import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../core/hooks/redux";
import { ICategory } from "../../../core/modules/IApp";

interface CategoriesProps {
    className: string;
}

const Categories: FC<CategoriesProps> = ({ className }) => {
    const { categories } = useAppSelector(state => state.appReducer);
    const uniqid = require('uniqid');

    const createCategoryItem = (category: ICategory) => {
        const { title, spent, limit, icon } = category;

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
                <div className="category__indicator">
                    <div></div>
                </div>
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