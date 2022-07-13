import { FC } from "react";
import './Categories.scss'
import Category from "../Category/Category";
import { useAppSelector } from "../../../../core/hooks/redux";
import { ICategory } from "../../../../core/modules/IApp";

interface CategoriesListProps {
    className: string;
}

const CategoriesList: FC<CategoriesListProps> = ({ className }) => {
    const { categories } = useAppSelector(state => state.appReducer);
    const uniqid = require('uniqid');
    
    return (
        <ul className={`${className} categories`}>
            { categories.map((category: ICategory) => <Category category={category} key={uniqid()} />) }
        </ul>
    )
}

export default CategoriesList