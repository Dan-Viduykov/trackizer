import { FC, FormEvent, useState } from "react";
import styles from './NewCategory.module.scss'
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../core/hooks/redux";
import { AppSlice } from "../../../../core/store/reducers/appReducer";
import Button from "../../../Button";

interface NewCategoryProps {
    className: string
}


const NewCategory: FC<NewCategoryProps> = ({ className }) => {
    const { colors } = useAppSelector(state => state.appReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { addCategory } = AppSlice.actions;

    const [ valueTitle, setValueTitle ] = useState('');
    const [ valueLimit, setValueLimit ] = useState<number>(100);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const randomColor = colors[ Math.floor(Math.random() * colors.length) ];
        const newCategory = {
            title: valueTitle,
            limit: valueLimit,
            color: randomColor,
            icon: ''
        };

        dispatch(addCategory(newCategory))
        navigate(-1);
    }
    
    return (
        <form className={`${styles.new} ${className}`} onSubmit={handleSubmit} >
            <input 
                className={`${styles.new__input} input`}
                placeholder="title"
                type="text"
                value={valueTitle}
                onChange={(event) => setValueTitle(event.target.value)} />
            <input 
                className={`${styles.new__input} input`}
                placeholder="limit"
                type="number"
                value={valueLimit}
                onChange={(event) => setValueLimit(Number(event.target.value))} />
            <Button className={styles.new__btn}  btnType="Primary">Save</Button>
        </form>
    )
}

export default NewCategory