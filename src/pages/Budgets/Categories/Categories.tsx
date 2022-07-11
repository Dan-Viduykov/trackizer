import { FC } from "react";
import './Categories.scss'
import { useAppSelector } from "../../../core/hooks/redux";
import { ICategory } from "../../../core/modules/IApp";
import { Category } from "./Category";

interface CategoriesProps {
    className: string;
}

const Categories: FC<CategoriesProps> = ({ className }) => {
    const { categories } = useAppSelector(state => state.appReducer);
    const uniqid = require('uniqid');
    
    return (
        <ul className={`${className} categories`}>
            { categories.map((category: ICategory) => {
                console.log(category);
                return <Category {...category} key={uniqid()} />
            }) }
        </ul>
    )
}

export {Categories}