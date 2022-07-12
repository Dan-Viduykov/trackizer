import { FC, useState } from "react";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch, useAppSelector } from "../../../core/hooks/redux";
import { CategoryIndicator } from "./CategoryIndicator";
import Button from "../../../components/Button";
import { AppSlice } from "../../../core/store/reducers/appReducer";

interface CategoryProps {
    icon: string;
    title: string;
    limit: number;
    color: string;
}

const Category: FC<CategoryProps> = (props) => {
    const { title, limit, color, icon } = props;
    const { subscriptions } = useAppSelector(state => state.appReducer);
    const dispatch = useAppDispatch();
    const { deleteCategory, changeSubscription } = AppSlice.actions

    const [ active, setActive ] = useState(false)

    const spent = subscriptions
        .filter(sub => sub.category === title)
        .reduce((acc, sub) => {return acc + sub.price;}, 0);

    const handleClick = () => {
        // нужно как то изменить подписку, чтобы надпись сменилась на null
        dispatch(deleteCategory(title))
    } 

    return (
        <li
            className="categories__category category border"
            onClick={() => setActive(!active)} >  
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
            <CategoryIndicator spent={spent*100/limit} color={color} />
            {
                active ?
                    <Button
                        className="category__btn-del"
                        btnType="Primary"
                        onClick={handleClick} >
                        Del
                    </Button> :
                null
            }
        </li>
    )
}

export {Category}