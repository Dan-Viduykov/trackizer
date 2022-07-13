import { FC, useState } from "react";
import styles from './Category.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import CategoryIndicator from "../CategoryIndicator/CategoryIndicator";
import { ICategory } from "../../../../core/modules/IApp";
import { useAppDispatch, useAppSelector } from "../../../../core/hooks/redux";
import { AppSlice } from "../../../../core/store/reducers/appReducer";
import Button from "../../../Button";

interface CategoryProps {
    category: ICategory
}

const Category: FC<CategoryProps> = ({ category }) => {
    const { title, limit, color, icon } = category;
    const [ active, setActive ] = useState(false);
    const { subscriptions } = useAppSelector(state => state.appReducer);
    const dispatch = useAppDispatch();
    const { deleteCategory } = AppSlice.actions;

    const spent = subscriptions
        .filter(sub => sub.category === title)
        .reduce((acc, sub) => {return acc + sub.price;}, 0);

    const handleClick = () => {
        // нужно как то изменить подписку, чтобы надпись сменилась на null
        dispatch(deleteCategory(title))
    } 

    return (
        <li className={`${styles.category} border`}
            onClick={() => setActive(!active)} >  
            <div className={styles.category__content}>
                <FontAwesomeIcon icon={faGhost} />
                <div className={styles.category__title}>
                    <p className={`ft__2`}>{title}</p>
                    <p className={`ft__body_s`}>${Math.round(limit - spent)} left to spend</p>
                </div>
                <div className={styles.category__price}>
                    <p className={`ft__2`}>${spent}</p>
                    <p className={`ft__body_s`}>of ${limit}</p>
                </div>
            </div>
            <CategoryIndicator
                className={styles.category__indicator}
                spent={spent*100/limit}
                color={color} />
            {
                active ?
                    <Button
                        className={styles.category__delete}
                        btnType={`Primary`}
                        onClick={handleClick} >
                        Del
                    </Button> :
                null
            }
        </li>
    )
}

export default Category